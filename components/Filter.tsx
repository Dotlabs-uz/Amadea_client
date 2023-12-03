import Accordion from "./children/Accordion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FilterProps {}
const Filter: React.FC<FilterProps> = () => {
   return (
      <div className="max-lg:max-w-[250px] flex flex-col gap-5">
         {[0, 1, 2].map((item: number) => (
            <Accordion key={item} item={item} />
         ))}
      </div>
   );
};

export default Filter;
