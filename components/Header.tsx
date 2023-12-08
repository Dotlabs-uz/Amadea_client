import { useContext, useState } from "react";
import Context from "@/context/useTranslate";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const translation: any = useContext(Context);
   const [hide, setHide] = useState(false);
   const router = useRouter();
   const { locale } = router;
   const [localeValue, setLocaleValue] = useState<any>(locale);

   const changeLang = (e: any) => {
      const locale = e.target.value;

      router.push(
         { pathname: router.pathname, query: router.query },
         router.asPath,
         { locale }
      );
      setLocaleValue(locale);
   };

   return (
      <header className="shadow-md">
         <div className="custom-container flex items-center justify-between py-5">
            <div className="w-16 max-lg:w-16">
               <Link href={"/"}>
                  <Image
                     src={"/images/logo.svg"}
                     width={1000}
                     height={1000}
                     alt="logo"
                  />
               </Link>
            </div>
            <div className=" flex justify-between">
               <nav
                  className={`${
                     hide
                        ? "w-full h-full max-md:fixed z-[60] top-0 left-0 block bg-white"
                        : "max-md:hidden"
                  }`}
               >
                  <button
                     className="max-md:block hidden absolute top-5 right-5"
                     onClick={() => setHide(false)}
                  >
                     <IoMdClose size={25} color="red" />
                  </button>
                  <ul className="flex max-md:flex-col items-center max-md:items-start justify-between gap-20 max-xl:gap-10 max-md:gap-5 max-md:p-5">
                     <li
                        onClick={() => setHide(false)}
                        className="max-md:text-lg"
                     >
                        <Link href={"/"}>{translation.header.nav1}</Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="max-md:text-lg"
                     >
                        <Link href={"/catalog"}>{translation.header.nav2}</Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="max-md:text-lg"
                     >
                        <Link href={"/aboutUs"}>{translation.header.nav3}</Link>
                     </li>
                     <li
                        onClick={() => setHide(false)}
                        className="max-md:text-lg"
                     >
                        <Link href={"/contactUs"}>
                           {translation.header.nav4}
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="max-md:hidden">
               <select
                  title="Change Language"
                  onChange={(e: any) => changeLang(e)}
                  defaultValue={locale}
               >
                  <option value="ru">RU</option>
                  <option value="uz">UZ</option>
                  <option value="en">EN</option>
               </select>
            </div>
            <div className="flex items-center gap-5">
               <div className="">
                  <a
                     href="tel:+998955001522"
                     className="text-[20px] max-lg:text-[18px] max-sm:text-base font-semibold"
                  >
                     +998 (95) 500-15-22
                  </a>
               </div>

               <div className="max-md:block hidden">
                  <button onClick={() => setHide(true)}>
                     <GiHamburgerMenu />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
