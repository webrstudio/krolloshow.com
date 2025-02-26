/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  generateStaticParams() {
    return {
      "/": { page: "/" },
      "/tienda": {page: '/tienda'}
    };
  },
};

export default nextConfig;
