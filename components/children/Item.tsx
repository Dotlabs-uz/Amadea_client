import Image from "next/image";
import Link from "next/link";

interface ItemProps {
   item: number;
}

const Item: React.FunctionComponent<ItemProps> = ({ item }) => {
   return (
      <Link
         href={`/catalog/product/${item}`}
         className="max-xs:max-w-xs w-full m-auto flex flex-col items-center p-5 rounded-2xl shadow-[0_8px_23px_#506b5221]"
      >
         <div className="max-w-[100px] w-full mb-6">
            <Image
               className="w-full h-full object-cover"
               src={"/images/medicine.svg"}
               width={1000}
               height={1000}
               alt="photo"
            />
         </div>
         <div className="w-full">
            <p>Neon Pothos</p>
            <p>$ 350</p>

            <button className="w-full py-3 max-md:py-2 text-[20px] max-md:text-[16px] font-bold mt-4 rounded-lg duration-150 ease-in bg-[#50806B] hover:bg-[#568b75] text-white">
               Learn More
            </button>
         </div>
      </Link>
   );
};

export default Item;
