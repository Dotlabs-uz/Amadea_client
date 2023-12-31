/* eslint-disable @next/next/no-img-element */
import Fancybox from "@/components/children/Fancybox";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface InfoItemProps {
   product: any;
   translation: any;
}

const InfoItem: React.FC<InfoItemProps> = ({ product, translation }) => {
   const router = useRouter();
   const { locale } = router;
   const [title, setTitle] = useState("");

   useEffect(() => {
      const text =
         locale === "uz" ? "uzTitle" : locale === "en" ? "engTitle" : "ruTitle";

      setTitle(product.titles[text]);
   }, [locale]);

   return (
      <>
         <section className="custom-container flex max-md:flex-col gap-5 items-center justify-around max-xl:justify-between max-sm:pt-4 py-28 max-xl:py-24 max-md:py-14">
            <div className="max-w-[40%] w-full max-md:hidden flex justify-center">
               <Fancybox
                  options={{
                     Carousel: {
                        infinite: false,
                     },
                  }}
               >
                  <a data-fancybox="gallery" href={product.image}>
                     <img
                        className="max-w-xs max-lg:max-w-[250px] object-cover"
                        src={product.image}
                        alt="product"
                     />
                  </a>
               </Fancybox>
            </div>
            <div className="w-1/2 max-xl:w-[60%] max-md:w-full">
               <p className="text-6xl max-xl:text-5xl max-sm:text-4xl font-semibold mb-5 max-xl:mb-3">
                  {title}
               </p>
               <div className="max-w-full max-md:flex hidden justify-center px-10 mb-4">
                  <Fancybox
                     options={{
                        Carousel: {
                           infinite: false,
                        },
                     }}
                  >
                     <a data-fancybox="gallery" href={product.image}>
                        <img
                           className="object-cover"
                           src={product.image}
                           alt="product"
                        />
                     </a>
                  </Fancybox>
               </div>
               <ul className="mb-6">
                  <li className="py-1 px-2 flex items-center justify-between max-md:text-base max-sm:text-sm bg-gray-200">
                     <p className="font-medium flex-1">Категория:</p>
                     <p>{product?.category?.name}</p>
                  </li>

                  <li className="py-1 px-2 flex items-center justify-between max-md:text-base max-sm:text-sm">
                     <p className="font-medium flex-1">Производитель:</p>
                     <p>{product?.manufacturer}</p>
                  </li>

                  {product?.testCount ? (
                     <li className="py-1 px-2 flex items-center justify-between max-md:text-base max-sm:text-sm bg-gray-200">
                        <p className="font-medium flex-1">Тесты:</p>
                        <p>{product?.testCount}</p>
                     </li>
                  ) : null}
               </ul>

               <p className="text-gray-500 max-md:text-sm mb-5">
                  {product.description}
               </p>

               <Link
                  href={"/contactUs"}
                  className="bg-[#50806B] hover:bg-[#68a98d] text-white text-lg py-3 px-8 duration-75 ease-in"
               >
                  {translation.product.button}
               </Link>
            </div>
         </section>
      </>
   );
};

export default InfoItem;
