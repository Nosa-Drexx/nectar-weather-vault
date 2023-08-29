/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    WEATHER_KEY: process.env.WEATHER_KEY,
  },
};

module.exports = nextConfig;
