interface TitlePageProps {
   children: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ children }) => {
   return (
      <>
         <div className="bg-[#E8EDDE] mb-5">
            <div className="custom-container py-12 max-xl:py-8 max-md:py-4 max-xs:py-2">
               <h2 className="text-[80px] max-lg:text-[60px] max-md:text-[50px] max-xs:text-[40px] tracking-[1.6px]">
                  {children}
               </h2>
            </div>
         </div>
         <div className="custom-container ">
            <p className="text-gray-400 mb-28 max-xl:mb-24 max-md:mb-14 cursor-pointer">
               Back to Search
            </p>
         </div>
      </>
   );
};

export default TitlePage;
