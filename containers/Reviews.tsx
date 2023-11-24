import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

interface ReviewsProps {}
const Reviews: React.FC<ReviewsProps> = () => {
   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14 bg-[#E8EDDE]">
         <div className="custom-container py-20">
            <div className="mb-10 font-medium">
               <h2 className="text-[56px] max-md:text-[40px] text-center">
                  Testimonials
               </h2>
            </div>
            <div className="">
               <Swiper
                  spaceBetween={30}
                  slidesPerView={3.4}
                  centeredSlides
                  loop
                  breakpoints={{
                     0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                     },
                     540: {
                        slidesPerView: 2.4,
                        spaceBetween: 20,
                     },
                     960: {
                        slidesPerView: 2.4,
                     },
                     1170: {
                        slidesPerView: 3.4,
                     },
                  }}
               >
                  {[0, 1, 2, 3, 4].map((item: number) => {
                     return (
                        <SwiperSlide key={item}>
                           <div className="flex flex-col items-center justify-center py-8 px-16 max-lg:px-10 max-md:px-5 bg-white">
                              <div className="">
                                 <div className="w-40 rounded-full overflow-hidden">
                                    <Image
                                       src={"/images/woman.jpg"}
                                       width={1000}
                                       height={1000}
                                       alt="people"
                                    />
                                 </div>
                                 <div className="">
                                    <p className="text-[20px] text-center text-[#56B280]">
                                       ★★★★★
                                    </p>
                                 </div>
                              </div>
                              <div className="">
                                 <p className="text-[22px] font-medium text-center text-[#1D293F]">
                                    “Healthy, happy plants”
                                 </p>
                              </div>
                              <div className="">
                                 <p className="text-[18px] text-[#7C8087]">
                                    Luisa
                                 </p>
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

export default Reviews;