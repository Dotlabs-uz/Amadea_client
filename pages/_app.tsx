import Context from "@/context/useTranslate";
import eng from "@/languages/eng/eng";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import Layout from "@/layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const { locale } = router;
   const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;

   return (
      <Context.Provider value={translation}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </Context.Provider>
   );
}
