import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface AccordionProps {
   categories: any;
   handleCategoryChange: any;
   selectedCategories: any;
}

const Accordion: React.FC<AccordionProps> = ({
   categories,
   handleCategoryChange,
   selectedCategories,
}) => {
   const translation: any = useContext(Context);


   return (
      <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white">
         <div className="flex items-center justify-between cursor-pointer">
            <p>{translation.catalog.allCategories}</p>
         </div>

         <div className="pl-5 mt-4">
            <ul>
               <li
                  onClick={() => {
                     if (selectedCategories.includes("All")) {
                        handleCategoryChange(
                           selectedCategories.filter(
                              (item: any) => item !== "All"
                           )
                        );
                     } else {
                        handleCategoryChange([...selectedCategories, "All"]);
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
                           if (selectedCategories.includes(item._id)) {
                              handleCategoryChange(
                                 selectedCategories.filter(
                                    (el: any) => el !== item._id
                                 )
                              );
                           } else {
                              handleCategoryChange([
                                 ...selectedCategories,
                                 item._id,
                              ]);
                           }
                        }}
                     >
                        <label className="flex items-center gap-3 mb-2">
                           <input type="checkbox" name="category" />
                           <p>{item.name}</p>
                        </label>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default Accordion;
