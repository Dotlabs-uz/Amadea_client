import { useState } from "react";

interface CategoryProps {
   item: any;
   selectedCategories: any;
   setSelectedCategories: any;
}

const Category: React.FC<CategoryProps> = ({
   item,
   setSelectedCategories,
   selectedCategories,
}) => {
   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = (event: {
      target: { checked: boolean | ((prevState: boolean) => boolean) };
   }) => {
      setIsChecked(event.target.checked);
   };

   return (
      <li
         onClick={() => {
            if (isChecked) {
               setSelectedCategories(
                  selectedCategories.filter((el: any) => el !== item._id)
               );
            } else {
               setSelectedCategories([...selectedCategories, item._id]);
            }
         }}
         key={item._id}
      >
         <label className="flex items-center gap-3 mb-2">
            <input
               checked={isChecked}
               onChange={handleCheckboxChange}
               type="checkbox"
               name="category"
            />
            <p>{item.name}</p>
         </label>
      </li>
   );
};

export default Category;
