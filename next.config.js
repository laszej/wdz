/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent-waw2-1.xx.fbcdn.net",
      "scontent-waw2-2.xx.fbcdn.net",
      "scontent.fwaw1-1.fna.fbcdn.net",
      "scontent.xx.fbcdn.net",
      "scontent.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
