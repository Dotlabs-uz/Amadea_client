/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext, useRef } from "react";
import Fancybox from "@/components/children/Fancybox";
import Link from "next/link";
import { useRouter } from "next/router";
import Context from "@/context/useTranslate";

interface ProductBlockProps {
   item: any;
}
const ProductBlock: React.FC<ProductBlockProps> = ({ item }) => {
   const translation: any = useContext(Context);
   const router = useRouter();
   const { locale } = router;
   const [title, setTitle] = useState("");

   useEffect(() => {
      const text =
         locale === "uz" ? "uzTitle" : locale === "en" ? "engTitle" : "ruTitle";

      setTitle(item.titles[text]);
   }, [locale]);

   return (
      <>
         <div className="max-xs:max-w-xs w-full h-full m-auto flex flex-col items-center rounded-2xl shadow-[0_8px_23px_#506b5221] overflow-hidden">
            <Fancybox>
               <div className="w-full h-[200px] max-xs:h-[150px] overflow-hidden px-2">
                  <a data-fancybox="gallery" href={item.image}>
                     <img
                        src={item.image}
                        className="w-full h-full object-cover"
                        alt="product"
                     />
                  </a>
               </div>
            </Fancybox>
            <div className="w-full mt-auto p-5 max-md:p-3 max-xs:p-2">
               <p className="max-sm:text-sm">{title}</p>

               <Link
                  href={`/catalog/product/${item._id}`}
                  className="w-full block mt-4 py-3 max-md:py-2 text-[20px] max-md:text-[16px] max-xs:text-sm font-bold text-center rounded-lg duration-150 ease-in bg-[#50806B] hover:bg-[#568b75] text-white"
               >
                  {translation.item.more}
               </Link>
            </div>
         </div>
      </>
   );
};

export default ProductBlock;
