import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import Category from "./children/Category";

interface FilterProps {
   categories: any;
   selectedcategory: any;
   setSelectedCategory: any;
}

const Filter: React.FC<FilterProps> = ({
   categories,
   selectedcategory,
   setSelectedCategory,
}) => {
   const translation: any = useContext(Context);

   return (
      <div className="max-lg:max-w-[250px] flex flex-col gap-5">
         <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white">
            <div className="flex items-center justify-between cursor-pointer">
               <p>{translation.catalog.allCategories}</p>
            </div>

            <div className="pl-5 mt-4">
               <ul>
                  <li onClick={() => setSelectedCategory("all")}>
                     <label className="flex items-center gap-3 mb-2">
                        <input name="category" type="radio" />
                        <p>{translation.catalog.all}</p>
                     </label>
                  </li>
                  {categories.data.map((item: any) => (
                     <Category
                        key={item._id}
                        item={item}
                        selectedcategory={selectedcategory}
                        setSelectedCategory={setSelectedCategory}
                     />
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Filter;
