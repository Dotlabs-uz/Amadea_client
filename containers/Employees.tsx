import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import TitleCon from "@/components/children/TitleCon";
import Image from "next/image";

import Marquee from "react-fast-marquee";

interface EmployeesProps {}
const Employees: React.FC<EmployeesProps> = () => {
   const translation: any = useContext(Context);

   const arr = [
      {
         id: 0,
         img: "employee1.jpg",
      },
      {
         id: 1,
         img: "employee2.png",
      },
      {
         id: 2,
         img: "employee3.png",
      },
      {
         id: 3,
         img: "employee4.jpg",
      },
      {
         id: 4,
         img: "employee5.png",
      },
      {
         id: 5,
         img: "employee6.png",
      },
      {
         id: 6,
         img: "employee7.png",
      },
      {
         id: 7,
         img: "employee8.png",
      },
   ];

   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <TitleCon>{translation.employees.title}</TitleCon>
         </div>
         <Marquee direction={"right"} speed={15}>
            <div className="w-full flex items-center justify-between mb-5 max-sm:mb-3">
               {arr.map((item: any) => {
                  return (
                     <div
                        key={item.id}
                        className="max-w-[250px] max-sm:max-w-[200px] w-full mr-5 max-sm:mr-3"
                     >
                        <Image
                           src={`/images/employees/${item.img}`}
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
               {arr.map((item: any) => {
                  return (
                     <div
                        key={item.img}
                        className="max-w-[250px] max-sm:max-w-[200px] w-full mr-5 max-sm:mr-3"
                     >
                        <Image
                           src={`/images/employees/${item.img}`}
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
