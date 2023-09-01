/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    disable: false,
    skipWaiting: true,
  }),
  experimental: {
    appDir: true,
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    WEATHER_KEY: process.env.WEATHER_KEY,
  },
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
