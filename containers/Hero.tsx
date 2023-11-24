interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <section className="bg-[url('/images/house.jpg')] bg-no-repeat bg-cover mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="w-full h-7 max-lg:h-5 bg-[#50806B]"></div>
         <div className="custom-container max-sm:p-0 flex justify-center">
            <div className="max-w-xl max-sm:max-w-full w-full min-h-[730px] max-2xl:min-h-[500px] flex flex-col items-center justify-center px-7 max-md:px-5 bg-[#50806b33] backdrop-blur-[20px]">
               <h1 className="text-[80px] max-xl:text-[60px] max-md:text-[50px] font-semibold leading-[80px] max-md:leading-[50px] tracking-[2.4px] text-center text-white">
                  Plants are our Passion
               </h1>
               <h3 className="mt-5 text-[22px] max-md:text-[18px] text-center text-white">
                  Even if you don’t have a green thumb, you can still have a
                  green home.
               </h3>
               <button className="mt-14 py-4 px-14 rounded-2xl text-[22px] max-md:text-[18px] font-semibold uppercase bg-white">
                  Get Planting
               </button>
            </div>
         </div>
         <div className="w-full h-7 max-lg:h-5 bg-[#50806B]"></div>
      </section>
   );
};

export default Hero;
