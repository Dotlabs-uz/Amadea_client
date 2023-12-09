import Link from "next/link";

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   totalPages,
   onPageChange,
}) => {
   const handlePageChange = (pageNumber: number) => {
      onPageChange(pageNumber);
   };

   const renderPages = () => {
      const pages = [];

      for (let i = 1; i <= totalPages; i++) {
         pages.push(
            <li
               key={i}
               className={`${
                  i === currentPage
                     ? "bg-[#3a5f4e]"
                     : "bg-[#50806B] hover:bg-[#3a5f4e]"
               } duration-75 ease-in`}
               onClick={() => handlePageChange(i)}
            >
               <Link
                  href={"#start"}
                  className="text-white text-xl font-semibold px-5 py-2 block"
               >
                  {i}
               </Link>
            </li>
         );
      }

      return pages;
   };

   // console.log(renderPages().length);

   return (
      <div className="w-full">
         <ul className="bg-[#50806B] w-fit flex items-center m-auto mt-16">
            {renderPages()}
         </ul>
      </div>
   );
};

export default Pagination;
