import Link from "next/link";

import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer>
         <div className="custom-container">
            <nav className="max-w-xl w-full m-auto mb-10">
               <ul className="flex max-sm:flex-col items-center md:justify-between max-md:justify-center gap-20 max-xl:gap-10 max-md:gap-5">
                  <li className="font-medium">
                     <Link href={"#"}>Home</Link>
                  </li>
                  <li className="font-medium">
                     <Link href={"#"}>Products</Link>
                  </li>
                  <li className="font-medium">
                     <Link href={"#"}>About us</Link>
                  </li>
                  <li className="font-medium">
                     <Link href={"#"}>Contact us</Link>
                  </li>
               </ul>
            </nav>
            <ul className="max-w-xs w-full m-auto flex items-center justify-around gap-10 max-md:gap-5 max-xs:gap-0 mb-10">
               <li>
                  <Link href={"#"}>
                     <BsInstagram size={25} />
                  </Link>
               </li>
               <li>
                  <Link href={"#"}>
                     <FaTelegramPlane size={25} />
                  </Link>
               </li>
               <li>
                  <Link href={"#"}>
                     <BsInstagram size={25} />
                  </Link>
               </li>
               <li>
                  <Link href={"#"}>
                     <FaTelegramPlane size={25} />
                  </Link>
               </li>
            </ul>
         </div>
         <div className="py-2 bg-[#50806B]">
            <p className="max-sm:text-sm font-medium text-center text-white">
               Copyright Green thumb. All Rights Reserved
            </p>
         </div>
      </footer>
   );
};

export default Footer;
