/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  ...nextTranslate()
}