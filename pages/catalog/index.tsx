import TitlePage from "@/components/children/TitlePage";
import Filter from "@/components/Filter";
import { IoMdClose } from "react-icons/io";

import { TbFilterSearch } from "react-icons/tb";
import Item from "@/components/children/Item";
import { useState } from "react";

interface CatalogProps {}
const Catalog: React.FC<CatalogProps> = () => {
   const [hide, setHide] = useState(false);

   return (
      <>
         <section>
            <div className="mb-32 max-xl:mb-24 max-lg:mb-14 max-sm:mb-7">
               <TitlePage>Catalog</TitlePage>
            </div>
         </section>

         <div className="w-full sticky top-0 z-50 mb-5 shadow-sm bg-white">
            <div className="custom-container flex justify-end max-lg:justify-between mb-10 pt-5 max-lg:pt-3 pb-3">
               <div className="lg:hidden">
                  <button
                     onClick={() => setHide(true)}
                     className="bg-[#568b75] p-2 rounded-lg"
                  >
                     <TbFilterSearch size={25} color={"fff"} />
                  </button>
               </div>

               <div className="max-w-xs max-md:max-w-[200px] w-full">
                  <input
                     className="w-full border p-3 max-lg:py-2 max-sm:p-2 rounded-lg"
                     placeholder="Search"
                     type="search"
                  />
               </div>
            </div>
         </div>
         <div className="custom-container">
            <div className="flex gap-20 max-xl:gap-10">
               <aside
                  className={`max-w-[250px] max-2xl:max-w-[200px] max-lg:max-w-full h-full w-full max-lg:fixed max-lg:z-50 max-lg:top-0 max-lg:left-0 max-lg:p-5 lg:sticky top-24 max-lg:overflow-x-auto max-lg:bg-white ${
                     hide ? "block" : "max-lg:hidden"
                  }`}
               >
                  <Filter />
                  
                  <button
                     onClick={() => setHide(false)}
                     className="absolute top-5 right-5 hidden max-lg:block"
                  >
                     <IoMdClose color={"red"} size={25} />
                  </button>
               </aside>

               <div className="w-full mb-28 max-xl:mb-24 max-md:mb-14">
                  <div className="grid grid-cols-3 max-xl:grid-cols-2 max-xs:grid-cols-1 gap-8 max-xl:gap-3 max-md:gap-2">
                     {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
                        <Item key={item} item={item} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Catalog;
