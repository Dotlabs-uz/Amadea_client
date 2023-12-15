import { useContext, useState, useEffect } from "react";
import Context from "@/context/useTranslate";
import { GetServerSideProps } from "next";
import axios from "axios";

import TitlePage from "@/components/children/TitlePage";
import Filter from "@/components/Filter";
import ProductBlock from "@/components/ProductBlock";

import { IoMdClose } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   try {
      const categories = await axios.get(
         process.env.NEXT_PUBLIC_API + "/categories"
      );

      return {
         props: {
            categories: categories.data,
         },
      };
   } catch (e) {
      return {
         props: {
            categories: [],
         },
      };
   }
};

interface CatalogProps {
   categories: any;
}

const Catalog: React.FC<CatalogProps> = ({ categories }) => {
   const router = useRouter();
   const translation: any = useContext(Context);
   const [hide, setHide] = useState(false);
   let initVal = router?.query["category"] ?? "all";
   const [selectedcategory, setSelectedCategory] = useState(initVal);
   const [products_arr, setProducts] = useState([]);
   const [products_data, setProductsData] = useState<any>(null);
   const [currentPage, setCurrentPage] = useState(1);
   const [loading, setLoading] = useState(true);

   const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
   };

   useEffect(() => {
      let query = `?page=${currentPage}&categories=${selectedcategory}`;

      if (selectedcategory === "all") {
         axios
            .get(process.env.NEXT_PUBLIC_API + `/products?page=${currentPage}`)
            .then((res) => {
               setProducts(res?.data?.data);
               setProductsData(res?.data);
               setLoading(false);
            });
      } else {
         if (selectedcategory.length !== 0) {
            axios
               .get(process.env.NEXT_PUBLIC_API + "/products" + query)
               .then((res) => {
                  setProducts(res?.data?.data);
                  setProductsData(res?.data);
                  setLoading(false);
               });
         }
      }
   }, [selectedcategory, currentPage]);

   function searchProducts(value: string) {
      try {
         let val = value.length > 0 ? `?name=${value}` : "";
         axios
            .get(process.env.NEXT_PUBLIC_API + "/products" + val)
            .then((res) => {
               console.log({ searchRes: res });
               setProducts(res?.data?.data);
               setProductsData(res?.data);
            })
            .catch((err) => console.log(err));
      } catch (e) {
         console.log("error");
      }
   }

   return (
      <>
         <div className="w-full py-2 text-white bg-[#50806B]">
            <div className="custom-container flex gap-3">
               <Link href={"/"}>
                  <p className="cursor-pointer hover:underline underline-offset-2">
                     Home
                  </p>
               </Link>
               &gt;
               <Link href={"/catalog"}>
                  <p className="cursor-pointer hover:underline underline-offset-2">
                     Catalog
                  </p>
               </Link>
            </div>
         </div>
         <section id="start">
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
                  <Filter
                     selectedcategory={selectedcategory}
                     setSelectedCategory={setSelectedCategory}
                     categories={categories}
                  />
               </div>

               <div className="max-w-xs max-md:max-w-[200px] w-full">
                  <input
                     onChange={(e) => searchProducts(e.target.value)}
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
                     selectedcategory={selectedcategory}
                     setSelectedCategory={setSelectedCategory}
                     categories={categories}
                  />

                  <button
                     onClick={() => setHide(false)}
                     className="absolute top-5 right-5 hidden max-lg:block"
                  >
                     <IoMdClose color={"red"} size={25} />
                  </button>
               </aside>

               <div className="w-full mb-28 max-xl:mb-24 max-md:mb-14">
                  {!loading ? (
                     products_arr[0] ? (
                        <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-8 max-xl:gap-3 max-md:gap-2 max-xs:gap-1 relative min-h-[200px]">
                           {products_arr.map((item: any) => {
                              return (
                                 <ProductBlock key={item._id} item={item} />
                              );
                           })}
                        </div>
                     ) : (
                        <div className="w-full py-10">
                           <p className="text-3xl max-md:text-2xl text-center">
                              {translation.catalog.noTfound}
                           </p>
                        </div>
                     )
                  ) : (
                     <div className="w-full py-20">
                        <div className="w-16 h-16 m-auto rounded-full border-t-2 border-b-2 border-gray-500 animate-spin"></div>
                     </div>
                  )}

                  <Pagination
                     currentPage={currentPage}
                     totalPages={products_data?.pageCount}
                     onPageChange={handlePageChange}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Catalog;
