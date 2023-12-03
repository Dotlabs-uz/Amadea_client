interface TitleConProps {
   children: string;
}

const TitleCon: React.FC<TitleConProps> = ({ children }) => {
   return (
      <div className="mb-10 max-md:mb-6 py-5 border-b border-black">
         <h2 className="text-[56px] max-md:text-[40px] max-sm:text-4xl font-semibold max-sm:text-center text-[#50806B]">
            {children}
         </h2>
      </div>
   );
};

export default TitleCon;
