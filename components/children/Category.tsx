import { useState } from "react";

interface CategoryProps {
   item: any;
   selectedcategory: any;
   setSelectedCategory: any;
}

const Category: React.FC<CategoryProps> = ({
   item,
   selectedcategory,
   setSelectedCategory,
}) => {
   const [isChecked, setIsChecked] = useState(false);

   return (
      <li onClick={() => setSelectedCategory(item._id)}>
         <label className="flex items-center gap-3 mb-2">
            <input type="radio" name="category" />
            <p>{item.name}</p>
         </label>
      </li>
   );
};

export default Category;
