import Image from "next/image";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
   return (
      <div className="w-full h-screen flex items-center justify-center p-10">
         <div className="max-w-[170px] w-full">
            <Image
               className="w-full h-full animate-pulse"
               src={"/images/logo.svg"}
               width={1000}
               height={1000}
               alt="loader"
            />
         </div>
      </div>
   );
};

export default Loader;
