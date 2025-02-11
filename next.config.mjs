/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/intensive",
        destination: "/",
        permanent: false, // false означает временный редирект (302), true — постоянный (308)
      },
    ];
  },
};

export default nextConfig;
