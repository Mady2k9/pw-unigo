module.exports = {
  reactStrictMode: true,
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: '/about-us',
        destination: '/about',
      },
    ]
  },
}
