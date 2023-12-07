/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TitleCoc from "@/components/children/TitleCon";
import { useEffect, useState } from "react";
import axios from "axios";

interface CategoriesProps {
   categories: any;
}

const Categories: React.FC<CategoriesProps> = () => {
   const translation: any = useContext(Context);

   const [categories, setCategories] = useState<any>([]);

   useEffect(() => {
      try {
         axios.get(process.env.NEXT_PUBLIC_API + "/categories").then((res) => {
            setCategories(res.data.data);
         });
      } catch (e) {
         alert("Network error please check the network connection!");
      }
   }, []);

   return (
      <section id="categories" className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <div className="">
               <TitleCoc>{translation.categories.title}</TitleCoc>
            </div>
            <div>
               <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                     },
                     540: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                     },
                     720: {
                        slidesPerView: 4,
                     },
                     960: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                     },
                  }}
               >
                  {categories.map((item: any) => {
                     return (
                        <SwiperSlide key={item._id}>
                           <Link href={"/catalog?category=" + item._id}>
                              <div className="max-w-[200px] w-full h-[180px] max-xs:h-[150px]">
                                 <img
                                    className="w-full h-full object-contain"
                                    src={item.image}
                                    alt="categories"
                                 />
                              </div>
                              <div className="w-full mt-auto">
                                 <p className="text-center mt-2">{item.name}</p>
                              </div>
                           </Link>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default Categories;
