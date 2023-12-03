import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Item from "@/components/children/Item";
import TitleCon from "@/components/children/TitleCon";
import InfoItem from "@/containers/InfoItem";
import TitlePage from "@/components/children/TitlePage";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
   return (
      <>
         <TitlePage>Product Name</TitlePage>
         
         <InfoItem />
         <section className="bg-[#E8EDDE]">
            <div className="custom-container py-7">
               <div className="mb-5">
                  <h2 className="text-4xl max-md:text-3xl font-medium">
                     Lorem, ipsum dolor.
                  </h2>
               </div>
               <div className="">
                  <p className="text-lg max-lg:text-base max-sm:text-sm">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ipsa illo dolorum culpa, aut alias praesentium pariatur
                     corrupti! Aperiam ullam sapiente voluptatibus itaque, sed
                     soluta harum quia nemo optio tempora iure incidunt
                     veritatis facilis perspiciatis, inventore necessitatibus
                     sunt? Neque iste nemo minima enim sapiente et itaque
                     reprehenderit earum, repudiandae nihil quasi ullam
                     explicabo quibusdam totam necessitatibus repellat veritatis
                     odio? Perferendis vel exercitationem quas quibusdam
                     numquam. Nemo numquam non doloremque nulla vel! Lorem ipsum
                     dolor sit, amet consectetur adipisicing elit. Vel libero ab
                     sit quia. Ex saepe quisquam magni ducimus sequi numquam
                     modi officiis, nostrum nihil quo inventore corrupti
                     mollitia hic esse!
                  </p>
               </div>
            </div>
         </section>
         <section className="custom-container pb-28 max-xl:pb-24 max-md:pb-14">
            <TitleCon>You’ll love these too...</TitleCon>
            <Swiper
               style={{ padding: "0 10px 20px" }}
               spaceBetween={30}
               slidesPerView={4}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                     spaceBetween: 10,
                  },
                  441: {
                     slidesPerView: 2,
                  },
                  541: {
                     slidesPerView: 2,
                     spaceBetween: 15,
                  },
                  960: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                  },
               }}
            >
               {[0, 1, 2, 3].map((item: number) => {
                  return (
                     <SwiperSlide key={item}>
                        <Item item={item} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </section>
      </>
   );
};

export default Product;
