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
  }
