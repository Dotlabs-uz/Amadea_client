import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Categories from "@/containers/Categories";
import AboutUs from "@/containers/AboutUs";

import { Inter } from "next/font/google";
import Reviews from "@/containers/Reviews";
import Employees from "@/containers/Employees";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <Hero />
            <Categories />
            <AboutUs />
            <Reviews />
            <Employees />
         </main>
         <Footer />
      </>
   );
}
