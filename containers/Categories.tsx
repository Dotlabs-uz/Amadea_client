import { useContext } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TitleCoc from "@/components/children/TitleCon";

interface CategoriesProps {
   categories: any;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
   const translation: any = useContext(Context);
   console.log(categories.data);

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
                  {categories.data.map((item: any) => {
                     return (
                        <SwiperSlide key={item._id}>
                           <Link
                              className="flex flex-col justify-center"
                              href={"/catalog"}
                           >
                              <div className="max-w-[200px] w-full h-[180px] max-xs:h-[150px]">
                                 <img
                                    className="w-full h-full object-contain"
                                    src={item.image}
                                    alt="categories"
                                 />
                              </div>
                              <div className="w-full">
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
