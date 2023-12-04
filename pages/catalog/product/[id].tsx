import Link from "next/link";
import { GetServerSideProps } from "next";
import axios from "axios";

import ProductBlock from "@/components/children/ProductBlock";
import TitleCon from "@/components/children/TitleCon";
import InfoItem from "@/containers/InfoItem";
import TitlePage from "@/components/children/TitlePage";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;

    const products = await axios.get(
        "https://sea-lion-app-p33f7.ondigitalocean.app/products"
    );
    const product = await axios.get(
        `https://sea-lion-app-p33f7.ondigitalocean.app/products/${id}`
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
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Amadea | Catalog</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/images/logo.svg"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={product?.description} />
                <meta name="keywords" content={product?.name} />
                <meta name="author" content="Amadea" />
            </Head>
            <TitlePage>{product.name}</TitlePage>

            <InfoItem product={product} />
            <section className="bg-[#E8EDDE]">
                <div className="custom-container py-7">
                    <div className="mb-5">
                        <h2 className="text-4xl max-md:text-3xl font-medium">
                            Lorem, ipsum dolor.
                        </h2>
                    </div>
                    <div className="">
                        <p className="text-lg max-lg:text-base max-sm:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa illo dolorum culpa, aut alias praesentium
                            pariatur corrupti! Aperiam ullam sapiente
                            voluptatibus itaque, sed soluta harum quia nemo
                            optio tempora iure incidunt veritatis facilis
                            perspiciatis, inventore necessitatibus sunt? Neque
                            iste nemo minima enim sapiente et itaque
                            reprehenderit earum, repudiandae nihil quasi ullam
                            explicabo quibusdam totam necessitatibus repellat
                            veritatis odio? Perferendis vel exercitationem quas
                            quibusdam numquam. Nemo numquam non doloremque nulla
                            vel! Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Vel libero ab sit quia. Ex saepe
                            quisquam magni ducimus sequi numquam modi officiis,
                            nostrum nihil quo inventore corrupti mollitia hic
                            esse!
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
                    {products.data.map((item: any) => {
                        if (item.category.name === product.category.name) {
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
