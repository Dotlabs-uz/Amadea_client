import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";
import Link from "next/link";

import TitlePage from "@/components/children/TitlePage";

interface ConactUsProps {}

const ConactUs: React.FC<ConactUsProps> = () => {
   const translation: any = useContext(Context);

   return (
      <>
         <TitlePage>{translation.conactUs.title}</TitlePage>
         <div className="custom-container flex max-lg:flex-col-reverse gap-20 max-xl:gap-10 pb-24 max-lg:pb-14 max-sm:pb-5 max-sm:mt-5">
            <div className="w-2/5 max-lg:w-full">
               <iframe
                  className="w-full h-80"
                  src="https://yandex.uz/map-widget/v1/?ll=68.355710%2C39.806249&z=7"
               ></iframe>
            </div>
            <div className="w-3/5 max-lg:w-full">
               <div className="max-w-[100px] max-md:max-w-[70px] mb-10 max-md:mb-4">
                  <Image
                     src={"/images/logo.svg"}
                     width={1000}
                     height={1000}
                     alt="logo"
                  />
               </div>
               <div className="w-full flex max-sm:flex-wrap justify-between gap-5 max-sm:gap-2">
                  <div className="flex flex-col gap-2">
                     <div className="">
                        <h3 className="text-xl font-semibold">
                           {translation.conactUs.сontact}
                        </h3>
                     </div>
                     <div className="">
                        <p>998(99)999-9999</p>
                        <p>998(99)999-9999</p>
                     </div>
                  </div>
                  <div className="max-w-[160px] w-full flex flex-col gap-2">
                     <div className="">
                        <h3 className="text-xl font-semibold">
                           {translation.conactUs.address}
                        </h3>
                     </div>
                     <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                     </div>
                  </div>
                  <div className=" flex flex-col gap-2">
                     <div className="">
                        <h3 className="text-xl font-semibold">
                           {translation.conactUs.social}
                        </h3>
                     </div>
                     <div className="">
                        <ul>
                           <li className="hover:underline underline-offset-2">
                              <Link href={"#"}>Instagram</Link>
                           </li>
                           <li className="hover:underline underline-offset-2">
                              <Link href={"#"}>Telegram</Link>
                           </li>
                           <li className="hover:underline underline-offset-2">
                              <Link href={"#"}>Facebook</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ConactUs;
