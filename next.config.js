/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["www.themoviedb.org"],
  env: {
    apiUrl: "https://api.themoviedb.org/3/",
    apiKey: "4f298a53e552283bee957836a529baec",
  },

  //for hot-reloading to work with Next.js and Docker
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

module.exports = nextConfig;
