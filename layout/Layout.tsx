import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

type Layout = {
   children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
   const [loader, setLoader] = useState(true);

   useEffect(() => {
      window.addEventListener("load", () => {
         setLoader(false);
      });
      const timeout = setTimeout(() => {
         setLoader(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return (
      <>
         {loader ? (
            <Loader />
         ) : (
            <>
               <Header />
               <main>{children}</main>
               <Footer />
            </>
         )}
      </>
   );
};

export default Layout;
