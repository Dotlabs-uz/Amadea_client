/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

interface ProductBlockProps {
   item: any;
}

const ProductBlock: React.FC<ProductBlockProps> = ({ item }) => {
   return (
      <div className="max-xs:max-w-xs w-full min-h-[440px] max-sm:min-h-[300px] h-full m-auto flex flex-col items-center p-5 max-md:p-3 max-xs:p-2 rounded-2xl shadow-[0_8px_23px_#506b5221]">
         <div className="w-full h-full max-sm:h-[220px] overflow-hidden mb-6 max-md:mb-2">
            <img
               src={item.image}
               alt="product"
               className="w-full h-full object-cover"
            />
            {/* <Image
               className="w-full h-full object-cover"
               src={item.image}
               width={1000}
               height={1000}
               alt="photo"
            /> */}
         </div>
         <div className="w-full mt-auto">
            <p>{item.name}</p>
            <p>$ {item.price}</p>

            <Link
               href={`/catalog/product/${item._id}`}
               className="w-full block mt-4 py-3 max-md:py-2 text-[20px] max-md:text-[16px] font-bold text-center rounded-lg duration-150 ease-in bg-[#50806B] hover:bg-[#568b75] text-white"
            >
               Learn More
            </Link>
         </div>
      </div>
   );
};

export default ProductBlock;
