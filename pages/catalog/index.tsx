import { useContext, useState, useEffect } from "react";
import Context from "@/context/useTranslate";
import { GetServerSideProps } from "next";
import axios from "axios";

import TitlePage from "@/components/children/TitlePage";
import Filter from "@/components/Filter";
import ProductBlock from "@/components/children/ProductBlock";

import { IoMdClose } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import Head from "next/head";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   try {
      const products = await axios.get(
         process.env.NEXT_PUBLIC_API + "/products"
      );
      const categories = await axios.get(
         process.env.NEXT_PUBLIC_API + "/categories"
      );

      return {
         props: {
            products: products.data,
            categories: categories.data,
         },
      };
   } catch (e) {
      return {
         props: {
            products: [],
            categories: [],
         },
      };
   }
};

interface CatalogProps {
   products: any;
   categories: any;
}
interface Item {
   id: number;
   name: string;
   isVisible: boolean;
}

const Catalog: React.FC<CatalogProps> = ({ products, categories }) => {
   const translation: any = useContext(Context);
   const [hide, setHide] = useState(false);
   const [value, setValue] = useState("");
   const [search, setSearch] = useState<any>([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [products_arr, setProducts] = useState(products.data);
   const router = useRouter();

   console.log(search);

   useEffect(() => {
      let sewCategories: any = new Set(selectedCategories);
      sewCategories = [...sewCategories];
      let stringified = sewCategories.join(",");
      let query = "?categories=" + stringified;

      if (stringified.length !== 0) {
         axios
            .get(process.env.NEXT_PUBLIC_API + "/products" + query)
            .then((res) => console.log(res?.data?.data));
      } else if (router.query?.category) {
         axios
            .get(
               process.env.NEXT_PUBLIC_API +
                  "/products?cagegories=" +
                  router.query?.category
            )
            .then((res) => {
               console.log(res);

               setProducts(res.data.data);
            });
      }
   }, [selectedCategories]);

   useEffect(() => {
      axios
         .get(process.env.NEXT_PUBLIC_API + "/products?name[$regex]=" + value)
         .then((res) => setSearch(res.data.data))
         .catch((err) => console.log(err));
   }, [value]);
   console.log(search);

   return (
      <>
         <section>
            <div className="mb-32 max-xl:mb-24 max-lg:mb-14 max-sm:mb-7">
               <TitlePage>{translation.catalog.title}</TitlePage>
            </div>
         </section>

         <div className="w-full sticky top-0 z-50 mb-5 shadow-sm bg-white">
            <div className="custom-container flex justify-end max-lg:justify-between mb-10 pt-5 max-lg:pt-3 pb-3">
               <div className="lg:hidden">
                  <button
                     onClick={() => setHide(!hide)}
                     className="bg-[#568b75] p-2 rounded-lg"
                  >
                     <TbFilterSearch size={25} color={"fff"} />
                  </button>
               </div>

               <div
                  className={`absolute top-14 left-14 max-md:left-5 ${
                     hide ? "max-lg:block" : "hidden"
                  }`}
               >
                  {/* <div className="max-lg:max-w-[250px] flex flex-col gap-5">
                     <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white">
                        <div className="flex items-center justify-between cursor-pointer">
                           <p>{translation.catalog.allCategories}</p>
                        </div>

                        <div className="pl-5 mt-4">
                           <ul>
                              <li
                                 onClick={() => {
                                    if (selectedCategories.includes("All")) {
                                       setSelectedCategories(
                                          selectedCategories.filter(
                                             (item: any) => item !== "All"
                                          )
                                       );
                                    } else {
                                       setSelectedCategories([
                                          ...selectedCategories,
                                          "All",
                                       ]);
                                    }
                                 }}
                              >
                                 <label className="flex items-center gap-3 mb-2">
                                    <input name="category" type="checkbox" />
                                    <p>{translation.catalog.all}</p>
                                 </label>
                              </li>
                              {categories.map((item: any) => {
                                 return (
                                    <li
                                       key={item._id}
                                       onClick={() => {
                                          if (
                                             selectedCategories.includes(
                                                item._id
                                             )
                                          ) {
                                             setSelectedCategories(
                                                selectedCategories.filter(
                                                   (el: any) => el !== item._id
                                                )
                                             );
                                          } else {
                                             setSelectedCategories([
                                                ...selectedCategories,
                                                item._id,
                                             ]);
                                          }
                                       }}
                                    >
                                       <label className="flex items-center gap-3 mb-2">
                                          <input
                                             type="checkbox"
                                             name="category"
                                          />
                                          <p>{item.name}</p>
                                       </label>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                     </div>
                  </div> */}

                  <Filter
                     categories={categories}
                     selectedCategories={selectedCategories}
                     setSelectedCategories={setSelectedCategories}
                  />
               </div>

               <div className="max-w-xs max-md:max-w-[200px] w-full">
                  <input
                     onChange={(e) => setValue(e.target.value)}
                     className="w-full border p-3 max-lg:py-2 max-sm:p-2 rounded-lg"
                     placeholder={translation.catalog.search}
                     type="search"
                  />
               </div>
            </div>
         </div>
         <div className="custom-container max-sm:px-2">
            <div className="flex gap-20 max-xl:gap-10">
               <aside
                  className={`max-w-[250px] max-2xl:max-w-[200px] max-lg:max-w-full h-full w-full max-lg:fixed max-lg:z-50 max-lg:top-0 max-lg:left-0 max-lg:p-5 lg:sticky top-24 max-lg:overflow-x-auto max-lg:hidden max-lg:bg-white ${
                     hide ? "block" : "max-lg:hidden"
                  }`}
               >
                  <Filter
                     categories={categories}
                     selectedCategories={selectedCategories}
                     setSelectedCategories={setSelectedCategories}
                  />

                  <button
                     onClick={() => setHide(false)}
                     className="absolute top-5 right-5 hidden max-lg:block"
                  >
                     <IoMdClose color={"red"} size={25} />
                  </button>
               </aside>

               <div className="w-full mb-28 max-xl:mb-24 max-md:mb-14">
                  <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-8 max-xl:gap-3 max-md:gap-2 max-xs:gap-1">
                     {search[0]
                        ? search.map((item: any) => {
                             return <ProductBlock key={item._id} item={item} />;
                          })
                        : products_arr.map((item: any) => {
                             return <ProductBlock key={item._id} item={item} />;
                          })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Catalog;
