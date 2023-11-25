import TitleCon from "@/components/children/TitleCon";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface EmployeesProps {}
const Employees: React.FC<EmployeesProps> = () => {
   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <TitleCon>Our Employees</TitleCon>
         </div>
         <Marquee direction={"right"} speed={15}>
            <div className="w-full flex items-center justify-between mb-5 max-sm:mb-3">
               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => {
                  return (
                     <div
                        key={item}
                        className="max-w-xs max-md:max-w-[250px] max-sm:max-w-[200px] w-full mr-5 max-sm:mr-3"
                     >
                        <Image
                           src={"/images/labs.jpg"}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </div>
                  );
               })}
            </div>
         </Marquee>
         <Marquee direction={"left"} speed={15}>
            <div className="w-full flex items-center justify-between">
               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => {
                  return (
                     <div
                        key={item}
                        className="max-w-xs max-md:max-w-[250px] max-sm:max-w-[200px] w-full mr-5 max-sm:mr-3"
                     >
                        <Image
                           src={"/images/labs.jpg"}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </div>
                  );
               })}
            </div>
         </Marquee>
      </section>
   );
};

export default Employees;
