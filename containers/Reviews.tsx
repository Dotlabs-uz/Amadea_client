import { useContext } from "react";
import { useRouter } from "next/router";
import Context from "@/context/useTranslate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ReviewsProps {}

const reviews = [
   {
      id: 1,
      commentru: "Спасибо за быструю доставку, приятно с вами работать.",
      commenten:
         "Thank you for the fast delivery, it's a pleasure working with you.",
      commentuz:
         "Tez yetkazib berganingiz uchun rahmat, siz bilan ishlashdan mamnunman.",
      rate: "*****",
   },
   {
      id: 2,
      commentru: '"AMADEA" хороший сервис, низкие цены.',
      commenten: '"AMADEA" good service, low prices.',
      commentuz: '"AMADEA" yaxshi xizmat, arzon narxlar.',
      rate: "*****",
   },
   {
      id: 3,
      commentru: "Очень хороший ассортимент и обслуживание, спасибо девочкам.",
      commenten: "Very good selection and service, thanks to the girls.",
      commentuz: "Juda yaxshi tanlov va xizmat, qizlarga rahmat.",
      rate: "*****",
   },
];

const Reviews: React.FC<ReviewsProps> = () => {
   const translation: any = useContext(Context);
   const router = useRouter();
   const { locale } = router;

   return (
      <section className="mb-28 max-xl:mb-24 max-md:mb-14 bg-[#E8EDDE]">
         <div className="custom-container py-20">
            <div className="mb-10 font-medium">
               <h2 className="text-[56px] max-md:text-[40px] text-center">
                  {translation.reviews.title}
               </h2>
            </div>
            <div className="">
               <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  breakpoints={{
                     0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                     },
                     540: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                     },
                     720: {
                        slidesPerView: 1.6,
                     },
                     960: {
                        slidesPerView: 2.4,
                     },
                     1170: {
                        slidesPerView: 3.4,
                     },
                  }}
               >
                  {reviews.map(
                     (item: {
                        id: number;
                        rate: string;
                        commentru: string;
                        commenten: string;
                        commentuz: string;
                     }) => {
                        return (
                           <SwiperSlide key={item.id}>
                              <div className="h-full flex flex-col items-center py-8 max-lg:py-6 max-md:py-4 px-10 max-lg:px-8 max-md:px-3 bg-white">
                                 <div className="">
                                    <p className="text-[39px] text-center text-[#56B280]">
                                       {item.rate}
                                    </p>
                                 </div>
                                 <div className="">
                                    <p className="text-[18px] max-md:text-base font-medium text-center text-[#1D293F]">
                                       {locale === "ru"
                                          ? item.commentru
                                          : locale === "en"
                                          ? item.commenten
                                          : item.commentuz}
                                    </p>
                                 </div>
                              </div>
                           </SwiperSlide>
                        );
                     }
                  )}
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default Reviews;
