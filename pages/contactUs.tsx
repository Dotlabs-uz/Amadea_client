import { useContext, useState } from "react";
import Link from "next/link";
import Context from "@/context/useTranslate";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import TitlePage from "@/components/children/TitlePage";

interface ConactUsProps {}
const ConactUs: React.FC<ConactUsProps> = () => {
   const translation: any = useContext(Context);
   const arr = [
      {
         id: 0,
         address: translation.conactUs.samarkand,
         street: translation.conactUs.street1,
         coordinates: [39.652319, 66.944308],
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
         address: translation.conactUs.tashkent,
         street: translation.conactUs.street2,
         coordinates: [41.328373, 69.32609],
         numbers: [
            {
               id: 0,
               number: "+998 97 747 75 77",
            },
         ],
      },
      {
         id: 2,
         address: translation.conactUs.andijan,
         street: "",
         coordinates: [40.771127, 72.361927],
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
         address: translation.conactUs.bukhara,
         street: translation.conactUs.street4,
         coordinates: [39.772874, 64.433925],
         numbers: [
            {
               id: 0,
               number: "+998 91 522 00 11",
            },
         ],
      },
      {
         id: 4,
         address: translation.conactUs.navoiy,
         street: translation.conactUs.street5,
         coordinates: [41.572253, 64.202143],
         numbers: [
            {
               id: 0,
               number: "+998 90 606 27 92",
            },
         ],
      },
      {
         id: 5,
         address: translation.conactUs.surkhandarya,
         street: translation.conactUs.street6,
         coordinates: [37.268094, 67.283526],
         numbers: [
            {
               id: 0,
               number: "+998 90 000 73 07",
            },
         ],
      },
      {
         id: 6,
         address: translation.conactUs.karakalpakstan,
         street: translation.conactUs.street7,
         coordinates: [42.47118, 59.617505],
         numbers: [
            {
               id: 0,
               number: "+998 90 000 73 07",
            },
         ],
      },
   ];
   const [location, setLocation] = useState([39.652319, 66.944308]);

   const defaultState = {
      center: location,
      zoom: 5,
   };

   return (
      <>
         <TitlePage>{translation.conactUs.title}</TitlePage>
         <div className="custom-container pt-5">
            <div className="">
               <div className="mb-5">
                  <h2 className="text-3xl max-md:text-2xl font-semibold underline underline-offset-8">
                     {translation.conactUs.buy}
                  </h2>
               </div>
               <div className="flex max-sm:flex-col justify-between text-lg">
                  <ul className="w-1/2 max-sm:w-full">
                     <li className="flex items-center gap-3 mb-1">
                        <p className="font-medium max-xl:text-lg max-lg:text-base">
                           {translation.conactUs.manufacturer}:
                        </p>
                        <p className="max-xl:text-lg max-lg:text-base">
                           ООО &laquo;Amadea&raquo;
                        </p>
                     </li>
                     <li className="flex items-center gap-3">
                        <p className="font-medium max-xl:text-lg max-lg:text-base">
                           {translation.conactUs.phones}:
                        </p>
                        <p className="hover:underline underline-offset-2 cursor-pointer max-xl:text-lg max-lg:text-base">
                           +998 95 500 15 22
                        </p>
                     </li>
                  </ul>
                  <ul className="w-1/2 max-sm:w-full">
                     <li className="flex items-center gap-3 mb-1">
                        <p className="font-medium max-xl:text-lg max-lg:text-base">
                           {translation.conactUs.gmail}:
                        </p>

                        <p className="hover:underline underline-offset-2 cursor-pointer max-xl:text-lg max-lg:text-base">
                           hulkaroya@gmail.com
                        </p>
                     </li>
                     <li className="flex items-center gap-3">
                        <p className="font-medium max-xl:text-lg max-lg:text-base">
                           {translation.conactUs.website}:
                        </p>
                        <p className="hover:underline underline-offset-2 cursor-pointer max-xl:text-lg max-lg:text-base">
                           www.amadea.uz
                        </p>
                     </li>
                  </ul>
               </div>

               <div className="mt-10 max-md:mt-5">
                  <div className="">
                     <h2 className="text-2xl font-bold">
                        {translation.conactUs.distributors}
                     </h2>
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-5 mt-5">
                     {arr.map((item: any) => {
                        return (
                           <div key={item.id} className="">
                              <div className="py-5 max-md:py-2 border-b-2 border-[#50806B]">
                                 <Link
                                    href={"#map"}
                                    onClick={() =>
                                       setLocation(item.coordinates)
                                    }
                                 >
                                    <p className="w-fit text-xl max-xl:text-lg max-lg:text-base font-medium hover:underline underline-offset-2 cursor-pointer">
                                       {item.address}
                                       <span className="text-sm ml-1">
                                          ({translation.conactUs.show})
                                       </span>
                                    </p>
                                 </Link>
                              </div>
                              <ul className="flex flex-col mt-3 max-xs:mt-2 pl-5">
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
         <div
            id="map"
            className="relative w-full h-[450px] max-lg:h-[400px] max-md:h-80 my-16"
         >
            <YMaps
               query={{
                  apikey: process.env.NEXT_PUBLIC_YANDEX_API_KEY,
               }}
            >
               <Map defaultState={defaultState} className="w-full h-full">
                  <Placemark className="w-full h-full" geometry={location} />
               </Map>
            </YMaps>
         </div>
      </>
   );
};

export default ConactUs;
