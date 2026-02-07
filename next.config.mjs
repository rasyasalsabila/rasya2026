/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Otomatis pakai /rasya2026 kalau di-upload ke GitHub, tapi kosong kalau di lokal
  basePath: isProd ? "/rasya2026" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
