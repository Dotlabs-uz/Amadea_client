import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";

import Hero from "@/containers/Hero";
import Categories from "@/containers/Categories";
import AboutUs from "@/containers/AboutUs";
import Reviews from "@/containers/Reviews";
import Employees from "@/containers/Employees";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   try {
      const categories = await axios.get(
         process.env.NEXT_PUBLIC_API + "/categories"
      );

      return {
         props: {
            categories: categories.data,
         },
      };
   } catch (e) {
      return {
         props: {
            categories: [],
         },
      };
   }
};

export default function Home({ categories }: any) {
   return (
      <>
         {/* <Head>
            <meta charSet="UTF-8" />
            <title>Amadea | Home</title>
            <meta name="author" content="Amadea"></meta>
            <link rel="icon" type="image/x-icon" href="/images/logo.svg"></link>
            <meta
               http-equiv="Content-Type"
               content="text/html; charset=utf-8"
            ></meta>
            <meta http-equiv="content-language" content="ru"></meta>
            <meta
               name="description"
               content="Качественные химические продукты для различных отраслей. Широкий ассортимент и надежное качество. Закажите прямо сейчас."
            ></meta>
            <meta
               name="keywords"
               content="Amadea, химические продукты, промышленные химикаты, лабораторные реактивы, химические реагенты, химическая продукция, химические вещества"
            ></meta>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            ></meta>
         </Head> */}
         <Hero />
         <Categories categories={categories} />
         <AboutUs />
         <Reviews />
         <Employees />
      </>
   );
}
