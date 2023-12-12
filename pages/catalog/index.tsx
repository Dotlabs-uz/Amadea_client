import { useContext, useState, useEffect } from "react";
import Context from "@/context/useTranslate";
import { GetServerSideProps } from "next";
import axios from "axios";

import TitlePage from "@/components/children/TitlePage";
import Filter from "@/components/Filter";
import ProductBlock from "@/components/children/ProductBlock";

import { IoMdClose } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const categories = await axios.get(
			process.env.NEXT_PUBLIC_API + "/categories"
		);

		return {
			props: {
				categories: categories.data,
			},
		};
	} catch (e) {
		return {
			props: {
				categories: [],
			},
		};
	}
};

interface CatalogProps {
	categories: any;
}

const Catalog: React.FC<CatalogProps> = ({ categories }) => {
	const router = useRouter();
	const translation: any = useContext(Context);
	const [hide, setHide] = useState(false);
	let initVal = router?.query["category"] ?? "all";
	const [selectedcategory, setSelectedCategory] = useState(initVal);
	const [products_arr, setProducts] = useState([]);
	const [products_data, setProductsData] = useState<any>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		let query = `?page=${currentPage}&categories=${selectedcategory}`;

		if (selectedcategory === "all") {
			console.log("zapros all");
			axios.get(process.env.NEXT_PUBLIC_API + `/products?page=${currentPage}`).then((res) => {
				setProducts(res?.data?.data);
				setProductsData(res?.data);
				setLoading(false)
			});
		} else {
			if (selectedcategory.length !== 0) {
				axios
					.get(process.env.NEXT_PUBLIC_API + "/products" + query)
					.then((res) => {
						setProducts(res?.data?.data);
						setProductsData(res?.data);
						setLoading(false)
					});
			}
		}
	}, [selectedcategory, currentPage]);

	function searchProducts(value:string) {
		try {
			let val = value.length > 0 ? `?name=${value}` : "";
			axios
				.get(process.env.NEXT_PUBLIC_API + "/products" + val)
				.then((res) => {
					console.log({ searchRes: res });
					setProducts(res?.data?.data);
					setProductsData(res?.data);
				})
				.catch((err) => console.log(err));
		} catch(e) {
			console.log('error');
		}
	}

	return (
		<>
			<section id="start">
				<div className="mb-32 max-xl:mb-24 max-lg:mb-14 max-sm:mb-7">
					<TitlePage>{translation.catalog.title}</TitlePage>
				</div>
			</section>

			<div className="w-full sticky top-0 z-50 mb-5 shadow-sm bg-white">
				<div className="custom-container flex justify-end max-lg:justify-between mb-10 pt-5 max-lg:pt-3 pb-3">
					<div className="lg:hidden">
						<button
							onClick={() => setHide(!hide)}
							className="bg-[#568b75] p-2 rounded-lg"
						>
							<TbFilterSearch size={25} color={"fff"} />
						</button>
					</div>

					<div
						className={`absolute top-14 left-14 max-md:left-5 ${
							hide ? "max-lg:block" : "hidden"
						}`}
					>
						<Filter
							selectedcategory={selectedcategory}
							setSelectedCategory={setSelectedCategory}
							categories={categories}
						/>
					</div>

					<div className="max-w-xs max-md:max-w-[200px] w-full">
						<input
							onChange={(e) => searchProducts(e.target.value)}
							className="w-full border p-3 max-lg:py-2 max-sm:p-2 rounded-lg"
							placeholder={translation.catalog.search}
							type="search"
						/>
					</div>
				</div>
			</div>
			<div className="custom-container max-sm:px-2">
				<div className="flex gap-20 max-xl:gap-10">
					<aside
						className={`max-w-[250px] max-2xl:max-w-[200px] max-lg:max-w-full h-full w-full max-lg:fixed max-lg:z-50 max-lg:top-0 max-lg:left-0 max-lg:p-5 lg:sticky top-24 max-lg:overflow-x-auto max-lg:hidden max-lg:bg-white ${
							hide ? "block" : "max-lg:hidden"
						}`}
					>
						<Filter
							selectedcategory={selectedcategory}
							setSelectedCategory={setSelectedCategory}
							categories={categories}
						/>

						<button
							onClick={() => setHide(false)}
							className="absolute top-5 right-5 hidden max-lg:block"
						>
							<IoMdClose color={"red"} size={25} />
						</button>
					</aside>

					<div className="w-full mb-28 max-xl:mb-24 max-md:mb-14">
						{!loading ? (
							products_arr[0] ? (
								<div className="grid grid-cols-3 max-xl:grid-cols-2 gap-8 max-xl:gap-3 max-md:gap-2 max-xs:gap-1 relative min-h-[200px]">
									{products_arr.map((item: any) => {
										return (
											<ProductBlock
												key={item._id}
												item={item}
											/>
										);
									})}
								</div>
							) : (
								<div className="w-full absolute flex flex-col items-center py-5">
									<div className="w-40 max-lg:w-28">
										<svg
											className="w-full h-full"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="280 280 520 520"
											preserveAspectRatio="xMidYMid meet"
										>
											<defs>
												<clipPath id="__lottie_element_2">
													<rect
														width="1080"
														height="1080"
														x="0"
														y="0"
													></rect>
												</clipPath>
												<radialGradient
													id="__lottie_element_6"
													spreadMethod="pad"
													gradientUnits="userSpaceOnUse"
													cx="0"
													cy="-50"
													r="111.80339887498948"
													fx="0"
													fy="-50"
												>
													<stop
														offset="0%"
														stop-color="rgb(255,215,145)"
													></stop>
													<stop
														offset="25%"
														stop-color="rgb(255,203,72)"
													></stop>
													<stop
														offset="50%"
														stop-color="rgb(255,191,0)"
													></stop>
													<stop
														offset="75%"
														stop-color="rgb(215,164,33)"
													></stop>
													<stop
														offset="100%"
														stop-color="rgb(175,136,67)"
													></stop>
												</radialGradient>
											</defs>
											<g clip-path="url(#__lottie_element_2)">
												<g
													transform="matrix(3,0,0,3,283.5,282.5)"
													opacity="1"
												>
													<g
														opacity="1"
														transform="matrix(1,0,0,0.9982665181159973,0,0.2938079833984375)"
													>
														<g
															opacity="1"
															transform="matrix(1,0,0,1,85.48600006103516,85.48600006103516)"
														>
															<path
																fill="url(#__lottie_element_6)"
																fill-opacity="1"
																d=" M-85.23600006103516,0 C-85.23600006103516,-47.07500076293945 -47.07400131225586,-85.23600006103516 0,-85.23600006103516 C47.07500076293945,-85.23600006103516 85.23600006103516,-47.07500076293945 85.23600006103516,0 C85.23600006103516,47.07500076293945 47.07500076293945,85.23600006103516 0,85.23600006103516 C-47.07400131225586,85.23600006103516 -85.23600006103516,47.07500076293945 -85.23600006103516,0z"
															></path>
														</g>
														<g
															opacity="1"
															transform="matrix(0.9982665181159973,0,0.0030254905577749014,1,-0.6317062377929688,0.47088623046875)"
														>
															<g
																opacity="1"
																transform="matrix(1,0,0,1,54.08399963378906,64.80699920654297)"
															>
																<path
																	fill="rgb(35,35,35)"
																	fill-opacity="1"
																	d=" M6.281000137329102,0 C6.281000137329102,5.8460001945495605 3.4679999351501465,10.586000442504883 0,10.586000442504883 C-3.4690001010894775,10.586000442504883 -6.281000137329102,5.8460001945495605 -6.281000137329102,0 C-6.281000137329102,-5.8470001220703125 -3.4690001010894775,-10.586000442504883 0,-10.586000442504883 C3.4679999351501465,-10.586000442504883 6.281000137329102,-5.8470001220703125 6.281000137329102,0z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(1,0,0,1,116.88800048828125,64.80699920654297)"
															>
																<path
																	fill="rgb(35,35,35)"
																	fill-opacity="1"
																	d=" M6.281000137329102,0 C6.281000137329102,5.8460001945495605 3.4679999351501465,10.586000442504883 0,10.586000442504883 C-3.4690001010894775,10.586000442504883 -6.281000137329102,5.8460001945495605 -6.281000137329102,0 C-6.281000137329102,-5.8470001220703125 -3.4690001010894775,-10.586000442504883 0,-10.586000442504883 C3.4679999351501465,-10.586000442504883 6.281000137329102,-5.8470001220703125 6.281000137329102,0z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(0.01733473129570484,0,0,0.01733473129570484,121.6510009765625,30.18097496032715)"
															>
																<path
																	fill="rgb(35,35,35)"
																	fill-opacity="1"
																	d=" M14.184000015258789,6.498000144958496 C13.267000198364258,6.230000019073486 12.37399959564209,5.980999946594238 11.503000259399414,5.736999988555908 C9.588000297546387,5.201000213623047 7.7789998054504395,4.695000171661377 6.031000137329102,4.0879998207092285 C3.4189999103546143,3.2049999237060547 1.069000005722046,2.2070000171661377 -1.1510000228881836,1.034999966621399 C-3.486999988555908,-0.20100000500679016 -5.611000061035156,-1.5779999494552612 -7.64300012588501,-3.177000045776367 C-9.86299991607666,-4.900000095367432 -11.92300033569336,-6.915999889373779 -13.819999694824219,-8.838000297546387 C-13.927000045776367,-8.946999549865723 -14.090999603271484,-8.979000091552734 -14.232000350952148,-8.916999816894531 C-14.373000144958496,-8.854999542236328 -14.460000038146973,-8.713000297546387 -14.45300006866455,-8.5600004196167 C-14.310999870300293,-5.650000095367432 -13.15999984741211,-2.6419999599456787 -11.123000144958496,0.14100000262260437 C-9.26099967956543,2.6579999923706055 -6.767000198364258,4.7789998054504395 -3.9119999408721924,6.2729997634887695 C-1.2259999513626099,7.686999797821045 1.7769999504089355,8.550000190734863 4.798999786376953,8.777999877929688 C4.915999889373779,8.786999702453613 5.033999919891357,8.793999671936035 5.151000022888184,8.800999641418457 C8.536999702453613,8.979000091552734 11.593000411987305,8.435999870300293 14.237000465393066,7.188000202178955 C14.37600040435791,7.123000144958496 14.461000442504883,6.978000164031982 14.449999809265137,6.823999881744385 C14.437000274658203,6.671000003814697 14.331999778747559,6.540999889373779 14.184000015258789,6.498000144958496z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(0.01733473129570484,0,0,0.01733473129570484,49.321998596191406,30.18097496032715)"
															>
																<path
																	fill="rgb(35,35,35)"
																	fill-opacity="1"
																	d=" M-14.182999610900879,6.498000144958496 C-13.265999794006348,6.230000019073486 -12.37399959564209,5.980999946594238 -11.503000259399414,5.736999988555908 C-9.588000297546387,5.201000213623047 -7.7789998054504395,4.695000171661377 -6.031000137329102,4.0879998207092285 C-3.4189999103546143,3.2049999237060547 -1.069000005722046,2.2070000171661377 1.1510000228881836,1.034999966621399 C3.486999988555908,-0.20100000500679016 5.611000061035156,-1.5779999494552612 7.64300012588501,-3.177000045776367 C9.86299991607666,-4.900000095367432 11.92300033569336,-6.915999889373779 13.819999694824219,-8.838000297546387 C13.927000045776367,-8.946999549865723 14.090999603271484,-8.979000091552734 14.232000350952148,-8.916999816894531 C14.373000144958496,-8.854999542236328 14.460000038146973,-8.713000297546387 14.45300006866455,-8.5600004196167 C14.310999870300293,-5.650000095367432 13.15999984741211,-2.6419999599456787 11.123000144958496,0.14100000262260437 C9.26099967956543,2.6579999923706055 6.767000198364258,4.7789998054504395 3.9119999408721924,6.2729997634887695 C1.2259999513626099,7.686999797821045 -1.7769999504089355,8.550000190734863 -4.798999786376953,8.777999877929688 C-4.915999889373779,8.786999702453613 -5.033999919891357,8.793999671936035 -5.151000022888184,8.800999641418457 C-8.536999702453613,8.979000091552734 -11.593000411987305,8.435999870300293 -14.237000465393066,7.188000202178955 C-14.37600040435791,7.123000144958496 -14.460000038146973,6.978000164031982 -14.447999954223633,6.823999881744385 C-14.435999870300293,6.671000003814697 -14.329999923706055,6.540999889373779 -14.182999610900879,6.498000144958496z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(1,0,0,1,85.48799896240234,104.22599792480469)"
															>
																<path
																	fill="rgb(35,35,35)"
																	fill-opacity="1"
																	d=" M17.993000030517578,-5.815000057220459 C13.142999649047852,-10.017000198364258 6.570000171661377,-12.38599967956543 -0.004999999888241291,-12.26099967956543 C-6.4710001945495605,-12.236000061035156 -12.984000205993652,-9.875 -17.882999420166016,-5.7779998779296875 C-20.354999542236328,-3.684000015258789 -22.41900062561035,-1.1330000162124634 -23.863000869750977,1.621000051498413 C-25.382999420166016,4.614999771118164 -26.170000076293945,7.630000114440918 -26.20199966430664,10.581999778747559 C-26.209999084472656,11.288999557495117 -25.764999389648438,11.920999526977539 -25.097999572753906,12.152999877929688 C-24.429000854492188,12.38599967956543 -23.68899917602539,12.163999557495117 -23.256999969482422,11.605999946594238 C-21.492000579833984,9.321999549865723 -19.816999435424805,7.507999897003174 -18.145999908447266,6.066999912261963 C-16.34600067138672,4.540999889373779 -14.432999610900879,3.265000104904175 -12.461999893188477,2.2739999294281006 C-8.53600025177002,0.3109999895095825 -4.201000213623047,-0.7360000014305115 0.07900000363588333,-0.7540000081062317 C4.4720001220703125,-0.7879999876022339 8.633000373840332,0.20000000298023224 12.468999862670898,2.193000078201294 C16.42099952697754,4.2179999351501465 20.047000885009766,7.380000114440918 23.246000289916992,11.593999862670898 C23.562000274658203,12.01200008392334 24.051000595092773,12.244000434875488 24.55500030517578,12.244000434875488 C24.733999252319336,12.244000434875488 24.915000915527344,12.21500015258789 25.090999603271484,12.154000282287598 C25.76300048828125,11.92199993133545 26.209999084472656,11.28499984741211 26.198999404907227,10.574999809265137 C26.107999801635742,4.630000114440918 23.03700065612793,-1.5 17.993000030517578,-5.815000057220459z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(0,0,0,0,47.165000915527344,80.75199890136719)"
															>
																<path
																	fill="rgb(123,196,232)"
																	fill-opacity="1"
																	d=" M0,-33.94200134277344 C-25.25,-5.065000057220459 -22.44700050354004,11.494000434875488 -22.44700050354004,11.494000434875488 C-22.44700050354004,23.892000198364258 -12.397000312805176,33.94200134277344 0,33.94200134277344 C12.397000312805176,33.94200134277344 22.44700050354004,23.892000198364258 22.44700050354004,11.494000434875488 C22.44700050354004,11.494000434875488 25.25,-5.065000057220459 0,-33.94200134277344z"
																></path>
															</g>
															<g
																opacity="1"
																transform="matrix(0,0,0,0,124.16500091552734,80.75199890136719)"
															>
																<path
																	fill="rgb(123,196,232)"
																	fill-opacity="1"
																	d=" M0,-33.94200134277344 C-25.25,-5.065000057220459 -22.44700050354004,11.494000434875488 -22.44700050354004,11.494000434875488 C-22.44700050354004,23.892000198364258 -12.397000312805176,33.94200134277344 0,33.94200134277344 C12.397000312805176,33.94200134277344 22.44700050354004,23.892000198364258 22.44700050354004,11.494000434875488 C22.44700050354004,11.494000434875488 25.25,-5.065000057220459 0,-33.94200134277344z"
																></path>
															</g>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</div>
									<div className="mt-5">
										<p className="text-3xl max-md:text-lg">
											{translation.catalog.noTfound}
										</p>
									</div>
								</div>
							)
						) : (
							<div className="w-full py-20">
								<div className="w-16 h-16 m-auto rounded-full border-t-2 border-b-2 border-gray-500 animate-spin"></div>
							</div>
						)}

						<Pagination
							currentPage={currentPage}
							totalPages={products_data?.pageCount}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Catalog;
