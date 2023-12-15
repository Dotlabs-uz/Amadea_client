/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext, useRef } from "react";
import Image from "next/image";
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
	const [showDialog, setShowDialog] = useState<boolean>(false);
	const [dialogImage, setDialogImage] = useState<string>('');

	useEffect(() => {
		const text =
			locale === "uz"
				? "uzTitle"
				: locale === "en"
				? "engTitle"
				: "ruTitle";

		setTitle(item.titles[text]);
	}, [locale]);

   console.log(dialogImage);
   

	return (
		<>
			{showDialog && (
				<Dialog image={dialogImage} setOpen={setShowDialog} />
			)}
			<div className="max-xs:max-w-xs w-full h-full m-auto flex flex-col items-center rounded-2xl shadow-[0_8px_23px_#506b5221] overflow-hidden">
				<div className="w-full h-[200px] max-xs:h-[150px] overflow-hidden mb-6 max-md:mb-2">
					<img
						src={item.image}
						alt="product"
						className="w-full h-full object-cover object-center"
						onClick={() => {
                     setDialogImage(item.image)
                     setShowDialog(true)
                  }}
					/>
				</div>
				<div className="w-full mt-auto p-5 max-md:p-3 max-xs:p-2">
					<p>{title}</p>
					{/* <p>$ {item.price}</p> */}

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

const Dialog = ({ image, setOpen }: any) => {
   
	return (
		<div
         onClick={() => {
            setOpen(false)
         }} 
         className="fixed top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-screen z-[1000] flex justify-center items-center" >

			<div className="w-[100%] max-h-[500px] h-[500px]">
				<img src={image} alt="" className="w-full h-full  object-contain" />
			</div>
		</div>
	);
};

export default ProductBlock;
