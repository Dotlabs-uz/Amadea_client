import { useContext } from "react";
import Image from "next/image";

import Context from "@/context/useTranslate";

import TitlePage from "@/components/children/TitlePage";

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
      <>
         <TitlePage>About Us</TitlePage>
         <section className="custom-container">
            {arr.map((item: { id: number; text1: string; text2: string }) => {
               return (
                  <div key={item.id} className="mb-6">
                     <h2 className="text-4xl max-lg:text-3xl font-semibold mb-6 max-md:mb-3">
                        {item.text1}
                     </h2>
                     <p className="mb-4 max-md:mb-1">{item.text2}</p>
                  </div>
               );
            })}
            <div className="mb-10 max-md:mb-5">
               <div className="max-w-xs h-96 bg-gray-400">
                  {/* <Image src={""} width={1000} height={1000} alt="document" > */}
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutUs;
