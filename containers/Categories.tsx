import TitleCoc from "@/components/children/TitleCon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
   const [categories, setCategories] = useState<any>([]);

   useEffect(() => {
      try {
         axios.get(process.env.NEXT_PUBLIC_API + "/categories")
            .then(res => {
               setCategories(res.data.data)
            })
      } catch(e) {
         alert('Network error please check the network connection!')
      }
   }, []);
   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14">
         <div className="custom-container">
            <div className="">
               <TitleCoc>Product Categories</TitleCoc>
            </div>
            <div>
               <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                     },
                     540: {
                        slidesPerView: 3,
                     },
                     720: {
                        slidesPerView: 4,
                     },
                     960: {
                        slidesPerView: 5,
                     },
                  }}
               >
                  {categories.map((item: any) => {
                     return (
                        <SwiperSlide key={item}>
                           <Link href={"/catalog?category=" + item._id}>
                              <div className="flex flex-col items-center bg-whtite" >
                                 <img
                                    className="max-h-[200px] object-cover"
                                    src={item.image}
                                    alt="categories"
                                 />
                              </div>
                              <div className="text-center">
                                 <p>{item.name}</p>
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
