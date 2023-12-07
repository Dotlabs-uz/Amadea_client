/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   // images: {
   //    domains: ["storage.cloud.google.com"],
   //    formats: ["image/webp"],
   // },
   i18n: {
      locales: ["uz", "ru", "en"],
      defaultLocale: "ru",
   },
};

module.exports = nextConfig;
