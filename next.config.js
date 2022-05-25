/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
}