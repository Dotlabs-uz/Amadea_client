import Image from "next/image";

import Hero from "@/containers/Hero";
import Categories from "@/containers/Categories";
import AboutUs from "@/containers/AboutUs";
import Reviews from "@/containers/Reviews";
import Employees from "@/containers/Employees";

import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <title>Amadea | Home</title>
            <link rel="icon" type="image/x-icon" href="/images/logo.svg"></link>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="" />
            <meta name="keywords" content="Amadea" />
            <meta name="author" content="Amadea" />
         </Head>
         <Hero />
         <Categories />
         <AboutUs />
         <Reviews />
         <Employees />
      </>
   );
}
