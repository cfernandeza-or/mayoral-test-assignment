/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['media.mayoral.com']
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = config;
