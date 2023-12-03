import Accordion from "./children/Accordion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FilterProps {
   categories: any;
   handleCategoryChange: any;
   selectedCategories: any
}
const Filter: React.FC<FilterProps> = ({
   categories,
   handleCategoryChange,
   selectedCategories,
}) => {
   return (
      <div className="max-lg:max-w-[250px] flex flex-col gap-5">
         <Accordion
            selectedCategories={selectedCategories}
            categories={categories.data}
            handleCategoryChange={handleCategoryChange}
         />
      </div>
   );
};

export default Filter;
