import { useContext } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";

import TitleCoc from "@/components/children/TitleCon";
interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   const translation: any = useContext(Context);
   const arr = [
      {
         id: 0,
         text1: translation.aboutUs.text1,
         text2: translation.aboutUs.text2,
      },
      {
         id: 1,
         text1: translation.aboutUs.text3,
         text2: translation.aboutUs.text4,
      },
   ];

   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <div className="">
               <TitleCoc>{translation.aboutUs.title}</TitleCoc>
            </div>
            <div className="flex flex-col max-lg:gap-8">
               {arr.map((item: any) => {
                  return (
                     <div
                        key={item.id}
                        className={`flex max-lg:flex-col items-center justify-between ${
                           item.id == 1 ? "flex-row-reverse" : ""
                        }`}
                     >
                        <div className="w-[47%] max-lg:w-full">
                           <h3 className="text-xl font-semibold tracking-[-1px]">
                              {item.text1}
                           </h3>
                           <p className="mt-6 max-xl:mt-2 text-[14px] text-[#232536]">
                              {item.text2}
                           </p>
                        </div>
                        <div className="w-1/2 max-md:w-3/5 max-xs:w-full max-lg:mt-5">
                           <Image
                              src={"/images/aboutUs.jpg"}
                              width={1000}
                              height={1000}
                              alt="about Us"
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default AboutUs;
