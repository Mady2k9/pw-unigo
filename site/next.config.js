module.exports = {
  reactStrictMode: true,
  basePath: '/sip',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [],
  },
}
