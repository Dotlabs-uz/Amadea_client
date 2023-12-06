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
         <Hero />
         <Categories categories={categories} />
         <AboutUs />
         <Reviews />
         <Employees />
      </>
   );
}
