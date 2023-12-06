import { useContext } from "react";
import Context from "@/context/useTranslate";
import Link from "next/link";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
   const translation: any = useContext(Context);

   return (
      <section className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="w-full h-7 max-lg:h-5 bg-[#50806B]"></div>
         <div className="custom-container max-sm:p-0 flex justify-center">
            <div className="max-w-xl max-sm:max-w-full w-full min-h-[730px] max-2xl:min-h-[500px] flex flex-col items-center justify-center px-7 max-md:px-5 sm:bg-[#50806b33] max-sm:bg-black/50 sm:backdrop-blur-[20px] max-sm:">
               <h1 className="text-5xl max-xs:text-4xl font-semibold tracking-[2.4px] text-center text-white">
                  {translation.hero.title}
               </h1>
               <h3 className="mt-5 text-xl max-md:text-lg text-center text-white">
                  {translation.hero.subtitle}
               </h3>
               <Link
                  href={"#categories"}
                  className="mt-14 py-4 px-14 rounded-2xl text-[22px] max-md:text-[18px] font-semibold uppercase bg-white"
               >
                  {translation.hero.button}
               </Link>
            </div>
         </div>
         <div className="w-full h-7 max-lg:h-5 bg-[#50806B]"></div>
      </section>
   );
};

export default Hero;
