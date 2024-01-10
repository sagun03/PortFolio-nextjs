/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/about-me',
          permanent: true,
        },
      ]
    },
    env: {
      NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN,
    },
  }
