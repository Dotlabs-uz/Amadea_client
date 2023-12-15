import { useContext } from "react";
import Context from "@/context/useTranslate";

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
                        <input
                           defaultChecked={selectedcategory.includes("all")}
                           name="category"
                           type="radio"
                        />
                        <p>{translation.catalog.all}</p>
                     </label>
                  </li>
                  {categories.data.map((item: any) => {
                     return (
                        <li
                           key={item._id}
                           onClick={() => setSelectedCategory(item._id)}
                        >
                           <label className="flex items-center gap-3 mb-2">
                              <input
                                 type="radio"
                                 name="category"
                                 defaultChecked={selectedcategory.includes(
                                    item._id
                                 )}
                              />
                              <p>{item.name}</p>
                           </label>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Filter;
