/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface InfoItemProps {
   product: any;
}

const InfoItem: React.FC<InfoItemProps> = ({ product }) => {
   const router = useRouter();
    const { locale } = router;
    const [title, setTitle] = useState("");

    useEffect(() => {
        const text = locale === "uz"
                ? "uzTitle"
                : locale === "en"
                ? "engTitle"
                : "ruTitle";

        setTitle(product.titles[text])
       
    }, [locale]);
   return (
      <section className="custom-container flex max-md:flex-col gap-5 items-center justify-around max-xl:justify-between max-sm:pt-4 pb-28 max-xl:pb-24 max-md:pb-14">
         <div className="max-w-[40%] w-full max-md:hidden flex justify-center">
            <img
               className="max-w-xs max-lg:max-w-[250px] object-cover"
               src={product.image}
               alt="product"
            />
            {/* <Image
               className="max-w-[200px]"
               src={"/images/medicine.svg"}
               width={1000}
               height={1000}
               alt="product"
            /> */}
         </div>
         <div className="w-1/2 max-xl:w-[60%] max-md:w-full">
            <p className="text-6xl max-xl:text-5xl max-sm:text-4xl font-semibold mb-5 max-xl:mb-3">
               {title}
            </p>
            <p className="mb-7 max-xl:mb-5">{product.price}$</p>
            <div className="max-w-full max-md:flex hidden justify-center px-10 mb-4">
               <img
                  className="max-w-[250px] min-h-[320px] object-cover"
                  src={product.image}
                  alt="product"
               />
               {/* <Image
                  src={product.image}
                  width={1000}
                  height={1000}
                  alt="product"
               /> */}
            </div>
            <ul className="mb-6">
               {[0, 1, 2].map((item: number) => {
                  return (
                     <li
                        key={item}
                        style={item === 1 ? { background: "#fff" } : {}}
                        className="py-1 px-2 flex items-center justify-between max-md:text-base max-sm:text-sm bg-gray-200"
                     >
                        <p className="font-medium flex-1">category:</p>
                        <p>{product.category.name}</p>
                     </li>
                  );
               })}
            </ul>

            <p className="text-gray-500 max-md:text-sm mb-5">
               {product.description}
            </p>

            <button className="bg-[#50806B] hover:bg-[#68a98d] text-white text-lg py-3 px-8 duration-75 ease-in">
               Where can I buy ?
            </button>
         </div>
      </section>
   );
};

export default InfoItem;
