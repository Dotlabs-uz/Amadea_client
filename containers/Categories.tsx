import TitleCoc from "@/components/children/TitleCon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
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
                  {[0, 1, 2, 3, 4].map((item: number) => {
                     return (
                        <SwiperSlide key={item}>
                           <div className="">
                              <div className="">
                                 <img
                                    src={"/images/categories.png"}
                                    alt="categories"
                                 />
                              </div>
                              <div className="">
                                 <p>Наборы для ПЦР</p>
                              </div>
                           </div>
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
