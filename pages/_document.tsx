import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<title>Amadea</title>
				<link
					rel="icon"
					type="image/x-icon"
					href="/images/logo.svg"
				></link>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="description" content="" />
				<meta name="keywords" content="Amadea" />
				<meta name="author" content="Amadea" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
