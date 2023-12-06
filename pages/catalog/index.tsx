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

const Catalog: React.FC<CatalogProps> = ({ products, categories }) => {
   const translation: any = useContext(Context);
   const [hide, setHide] = useState(false);
   const [value, setValue] = useState("");
   const [search, setSearch] = useState<any>();
   const [selectedCategories, setSelectedCategories] = useState([]);

   useEffect(() => {
      let stringified = selectedCategories.join(",");
      let query = "?category=" + stringified;

      if (stringified.length !== 0) {
         axios
            .get(
               "https://sea-lion-app-p33f7.ondigitalocean.app/products" + query
            )
            .then((res) => console.log({ res }));
      }
   }, [selectedCategories]);

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
                  <Filter
                     categories={categories}
                     selectedCategories={selectedCategories}
                     handleCategoryChange={setSelectedCategories}
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
                     handleCategoryChange={setSelectedCategories}
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
                     {products.data.map((item: any) => {
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
