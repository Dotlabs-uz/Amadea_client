import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
               <nav className="max-md:hidden">
                  <ul className="flex items-center justify-between gap-20 max-xl:gap-10 ">
                     <li>
                        <Link href={"#"}>Home</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Products</Link>
                     </li>
                     <li>
                        <Link href={"#"}>About us</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Contact us</Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="max-md:hidden">
               <select>
                  <option value="">RU</option>
                  <option value="">UZ</option>
                  <option value="">EN</option>
               </select>
            </div>
            <div className="flex items-center gap-5">
               <div className="">
                  <a
                     href="tel:+998 (99) 999-9999"
                     className="text-[20px] max-lg:text-[18px] font-semibold"
                  >
                     +998 (99) 999-9999
                  </a>
               </div>

               <div className="max-md:block hidden">
                  <button>
                     <GiHamburgerMenu />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
