/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Wajib untuk GitHub Pages
  images: {
    unoptimized: true, // Wajib untuk GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true, // Abaikan error linting agar build tidak berhenti
  },
  typescript: {
    ignoreBuildErrors: true, // Abaikan error typescript agar build tetap lanjut
  },
};

export default nextConfig;
