import { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Context from "@/context/useTranslate";

import ProductBlock from "@/components/children/ProductBlock";
import TitleCon from "@/components/children/TitleCon";
import InfoItem from "@/containers/InfoItem";
import TitlePage from "@/components/children/TitlePage";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { id } = query;

   const products = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
   const product = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/products/${id}`
   );

   return {
      props: {
         product: product.data,
         products: products.data,
      },
   };
};

interface ProductProps {
   product: any;
   products: any;
}
const Product: React.FC<ProductProps> = ({ product, products }) => {
   const translation: any = useContext(Context);
   console.log(products.data);
   console.log(product);

   return (
      <>
         <TitlePage>{product.name}</TitlePage>

         <InfoItem translation={translation} product={product} />
         <section className="custom-container pb-28 max-xl:pb-24 max-md:pb-14">
            <TitleCon>{translation.product.similar}</TitleCon>
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
               {products.data.map((item: any) => {
                  if (product.category._id === item.category._id) {
                     return (
                        <SwiperSlide key={item._id}>
                           <ProductBlock item={item} />
                        </SwiperSlide>
                     );
                  }
               })}
            </Swiper>
         </section>
      </>
   );
};

export default Product;
