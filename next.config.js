/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["sv-SE", "en-GB"],
    defaultLocale: "sv-SE",
  },
}