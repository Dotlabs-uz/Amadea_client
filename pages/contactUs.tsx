import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";
import Link from "next/link";

import TitlePage from "@/components/children/TitlePage";
import Map from "@/components/Map";

const arr = [
   {
      id: 0,
      address: "Самраканд головной офис",
      street: "улица Мир Саид Барака, 34",
      coordinates:
         "66.944541%2C39.652366&mode=whatshere&whatshere%5Bpoint%5D=66.944308%2C39.652319&whatshere%5Bzoom%5D=19.15141&z=19",
      numbers: [
         {
            id: 0,
            number: "+998 95 500 15 22",
         },
         {
            id: 1,
            number: "+998 90 251 15 22",
         },
      ],
   },
   {
      id: 1,
      address: "Тошкент филиал",
      street: "улица Сайрам, 39А Мирзо-Улугбекский район",
      coordinates:
         "69.325883%2C41.328070&mode=whatshere&whatshere%5Bpoint%5D=69.326090%2C41.328373&whatshere%5Bzoom%5D=16.502928&z=16",
      numbers: [
         {
            id: 0,
            number: "+998 97 747 75 77",
         },
      ],
   },
   {
      id: 2,
      address: "Андижон филиал",
      street: "",
      coordinates:
         "72.362020%2C40.770756&mode=whatshere&whatshere%5Bpoint%5D=72.361927%2C40.771127&whatshere%5Bzoom%5D=18.460846&z=18",
      numbers: [
         {
            id: 0,
            number: "+998 99 526 00 11",
         },
         {
            id: 1,
            number: "+998 90 606 27 94",
         },
      ],
   },
   {
      id: 3,
      address: "Бухоро филиал",
      street: "Bahovuddin Naqshband 309/2",
      coordinates:
         "64.434057%2C39.772853&mode=whatshere&whatshere%5Bpoint%5D=64.433925%2C39.772874&whatshere%5Bzoom%5D=17.683895&z=17",
      numbers: [
         {
            id: 0,
            number: "+998 91 522 00 11",
         },
      ],
   },
   {
      id: 4,
      address: "Навоий филиал",
      street: "3-й микрорайон, 18 Зарафшан, Навоийская область",
      coordinates:
         "64.202143%2C41.572253&mode=whatshere&whatshere%5Bpoint%5D=64.202143%2C41.572253&whatshere%5Bzoom%5D=16.64704&z=16",
      numbers: [
         {
            id: 0,
            number: "+998 90 606 27 92",
         },
      ],
   },
   {
      id: 5,
      address: "Сурхандарья филиал",
      street: "4Р100 Сурхандарьинская область",
      coordinates:
         "67.284296%2C37.267485&mode=whatshere&whatshere%5Bpoint%5D=67.283526%2C37.268094&whatshere%5Bzoom%5D=16.84852&z=16",
      numbers: [
         {
            id: 0,
            number: "+998 90 000 73 07",
         },
      ],
   },
   {
      id: 5,
      address: "Каракалпакстан филиал",
      street: "61-й квартал, 11 Нукус, Республика Каракалпакстан",
      coordinates:
         "59.617680%2C42.471068&mode=whatshere&whatshere%5Bpoint%5D=59.617505%2C42.471180&whatshere%5Bzoom%5D=17.54237&z=17",
      numbers: [
         {
            id: 0,
            number: "+998 90 000 73 07",
         },
      ],
   },
];

interface ConactUsProps {}
const ConactUs: React.FC<ConactUsProps> = () => {
   const translation: any = useContext(Context);
   const [location, setLocation] = useState(
      "66.944541%2C39.652366&mode=whatshere&whatshere%5Bpoint%5D=66.944308%2C39.652319&whatshere%5Bzoom%5D=19.15141&z=19"
   );

   return (
      <>
         <TitlePage>{translation.conactUs.title}</TitlePage>
         <div className="custom-container">
            <div className="">
               <div className="mb-5">
                  <h2 className="text-3xl font-semibold underline underline-offset-8">
                     ГДЕ КУПИТЬ?
                  </h2>
               </div>
               <div className="flex justify-between text-lg">
                  <ul className="w-1/2">
                     <li className="flex items-center gap-3 mb-1">
                        <p className="font-medium">Производитель:</p>
                        <p className="">ООО &laquo;Amadea&raquo;</p>
                     </li>
                     <li className="flex items-center gap-3">
                        <p className="font-medium">Телефоны:</p>
                        <p className="hover:underline underline-offset-2 cursor-pointer">
                           +998 95 500 15 22
                        </p>
                     </li>
                  </ul>
                  <ul className="w-1/2">
                     <li className="flex items-center gap-3 mb-1">
                        <p className="font-medium">E-mail:</p>
                        <p className="hover:underline underline-offset-2 cursor-pointer">
                           you@gmail.com
                        </p>
                     </li>
                     <li className="flex items-center gap-3">
                        <p className="font-medium">Web-site:</p>
                        <p className="hover:underline underline-offset-2 cursor-pointer">
                           www.amadea.uz
                        </p>
                     </li>
                  </ul>
               </div>

               <div className="mt-10">
                  <div className="">
                     <h2 className="text-2xl font-bold">
                        Дистрибьюторы Amadea
                     </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-10 mt-5">
                     {arr.map((item: any) => {
                        return (
                           <div key={item.id} className="">
                              <div className=" py-5 border-b-2 border-[#50806B]">
                                 <Link
                                    href={"#map"}
                                    onClick={() =>
                                       setLocation(item.coordinates)
                                    }
                                 >
                                    <p className="w-fit text-xl font-medium hover:underline underline-offset-2 cursor-pointer">
                                       {item.address}{" "} 
                                       <span className="text-sm" >(Показать на карте)</span>
                                    </p>
                                 </Link>
                              </div>
                              <ul className="flex flex-col mt-3 pl-5">
                                 <li>{item.street}</li>
                                 {item.numbers.map(
                                    (number: {
                                       id: number;
                                       number: string;
                                    }) => {
                                       return (
                                          <li
                                             className="font-bold"
                                             key={number.id}
                                          >
                                             <Link
                                                href={`tel:${number.number}`}
                                             >
                                                {number.number}
                                             </Link>
                                          </li>
                                       );
                                    }
                                 )}
                              </ul>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full min-h-[300px] my-10">
            <Map location={location} />
         </div>
      </>
   );
};

export default ConactUs;
