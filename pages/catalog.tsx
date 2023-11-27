import Image from "next/image";

import TitlePage from "@/components/children/TitlePage";
import Filter from "@/components/Filter";

import { TbFilterSearch } from "react-icons/tb";

interface CatalogProps {}
const Catalog: React.FC<CatalogProps> = () => {
   return (
      <>
         <section>
            <div className="mb-32 max-xl:mb-24 max-lg:mb-14 max-sm:mb-7">
               <TitlePage>Catalog</TitlePage>
            </div>
         </section>

         <div className="w-full sticky top-0 z-50 mb-5 shadow-sm bg-white">
            <div className="custom-container flex justify-end max-lg:justify-between mb-10 pt-5 pb-3">
               <div className="lg:hidden">
                  <button className="bg-[#568b75] p-2 rounded-lg">
                     <TbFilterSearch size={25} color={"fff"} />
                  </button>
               </div>

               <div className="max-w-xs max-md:max-w-[200px] w-full">
                  <input
                     className="w-full border p-3 max-sm:p-2 rounded-lg"
                     placeholder="Search"
                     type="search"
                  />
               </div>
            </div>
         </div>
         <div className="custom-container">
            <div className="flex gap-20 max-xl:gap-10">
               <aside className="max-w-[250px] max-2xl:max-w-[200px] w-full max-lg:hidden">
                  <Filter />
               </aside>

               <div className="w-full mb-28 max-xl:mb-24 max-md:mb-14">
                  <div className="grid grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 gap-8 max-xl:gap-3 max-md:gap-2">
                     {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => {
                        return (
                           <div
                              className="max-xs:max-w-xs w-full m-auto flex flex-col items-center p-5 rounded-2xl shadow-[0_8px_23px_#506b5221]"
                              key={item}
                           >
                              <div className="max-w-[100px] w-full mb-6">
                                 <Image
                                    className="w-full h-full object-cover"
                                    src={"/images/medicine.svg"}
                                    width={1000}
                                    height={1000}
                                    alt="photo"
                                 />
                              </div>
                              <div className="w-full">
                                 <p>Neon Pothos</p>
                                 <p>$ 350</p>

                                 <button className="w-full py-3 max-md:py-2 text-[20px] max-md:text-[16px] font-bold mt-4 rounded-lg duration-150 ease-in bg-[#50806B] hover:bg-[#568b75] text-white">
                                    Learn More
                                 </button>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Catalog;
