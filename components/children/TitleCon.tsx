interface TitleCocProps {
   children: string;
}

const TitleCoc: React.FC<TitleCocProps> = ({ children }) => {
   return (
      <div className="mb-10 max-md:mb-6 py-5 border-b border-black">
         <h2 className="text-[56px] max-md:text-[40px] max-sm:text-[36px] font-semibold max-sm:text-center text-[#50806B]">
            {children}
         </h2>
      </div>
   );
};

export default TitleCoc;
