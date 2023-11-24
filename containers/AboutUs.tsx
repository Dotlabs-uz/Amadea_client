import TitleCoc from "@/components/children/TitleCon";
import Image from "next/image";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <div className="">
               <TitleCoc>About Us</TitleCoc>
            </div>
            <div className="flex flex-col max-md:gap-8">
               {[0, 1].map((item: number) => {
                  return (
                     <div
                        key={item}
                        className={`flex max-lg:flex-col items-center justify-between ${
                           item == 1 ? "flex-row-reverse" : ""
                        }`}
                     >
                        <div className="w-[47%] max-lg:w-full">
                           <p className="text-[24px] max-2xl:text-[20px]  font-semibold">
                              Technical <br /> Support
                           </p>
                           <h3 className="text-[36px] max-2xl:text-[32px] max-xl:text-[28px] max-lg:text-[24px] leading-[45px] max-xl:leading-[30px] font-semibold tracking-[-1px]">
                              Best in class tech support for your company. We
                              become your tech backbone.
                           </h3>
                           <p className="mt-6 max-lg:mt-2 max-2xl:text-[14px] text-[#232536]">
                              Through True Rich Attended does no end it his
                              mother since real had half every him case in
                              packages enquire we up ecstatic unsatiable saw his
                              giving Remain expense you position concluded.
                              Through True Rich Attended does no end it his
                              mother since real had half every.
                           </p>
                        </div>
                        <div className="w-1/2 max-xs:w-full max-lg:mt-5">
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
