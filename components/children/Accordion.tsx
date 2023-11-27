import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface AccordionProps {
   item: number;
}

const Accordion: React.FC<AccordionProps> = ({ item }) => {
   const [active, setActive] = useState(false);

   return (
      <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white">
         <div
            onClick={() => setActive(!active)}
            className="flex items-center justify-between cursor-pointer"
         >
            <p>All Categories</p>
            <MdOutlineKeyboardArrowDown
               className={active ? "" : "-rotate-90"}
            />
         </div>

         {active ? (
            <div className="pl-5 mt-4">
               <ul>
                  {[0, 1, 2, 3, 4].map((item: number) => {
                     return (
                        <li key={item} className="flex items-center gap-3 mb-2">
                           <input type="checkbox" />
                           <p>Type Script</p>
                        </li>
                     );
                  })}
               </ul>
            </div>
         ) : null}
      </div>
   );
};

export default Accordion;
