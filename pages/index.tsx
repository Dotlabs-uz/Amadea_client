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
         <Hero />
         <Categories />
         <AboutUs />
         <Reviews />
         <Employees />
      </>
   );
}
