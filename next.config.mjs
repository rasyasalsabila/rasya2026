/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/rasya2026", // Tambahkan ini (sesuai nama repository)
  assetPrefix: "/rasya2026", // Tambahkan ini agar CSS & Gambar terbaca benar
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
