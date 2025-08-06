// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "cdn.pixabay.com",
      "starship-ent.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ], // 필요한 도메인 추가
  },
};

module.exports = nextConfig;
