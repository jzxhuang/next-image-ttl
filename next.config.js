/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // 10 minutes
    minimumCacheTTL: 600,
    remotePatterns: [{ protocol: "https", hostname: "renderapi.s3.amazonaws.com" }],
  },
}
