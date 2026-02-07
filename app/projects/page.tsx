"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const quicksand = localFont({ src: "../fonts/Quicksand-Regular.ttf" });

const DomeGallery = dynamic(() => import("../components/DomeGallery"), {
  ssr: false,
});

// Menghasilkan otomatis 22 project dengan deskripsi
const projects = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/portfolio/${i + 1}.jpg`,
  // Tambahkan deskripsi spesifik di sini
  alt: `Project Highlight #${i + 1} - Visual Design Concept 2026`,
}));

export default function ProjectsPage() {
  return (
    <main className="relative w-full h-screen bg-[#33528e] overflow-hidden">
      {/* UI Navigation */}
      <div className="absolute top-10 left-10 z-50">
        <Link
          href="/"
          className={`group flex items-center gap-4 text-orange-400 hover:text-white transition-all duration-300 ${quicksand.className}`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-400 group-hover:bg-orange-400 group-hover:text-[#33528e] transition-all font-bold">
            ←
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.3em] font-bold text-xs">
              Go Back
            </span>
            <span className="text-white text-lg font-light">Home</span>
          </div>
        </Link>
      </div>

      <div className="w-full h-full">
        <DomeGallery
          images={projects}
          fit={0.95} // Memperluas jangkauan kamera galeri
          minRadius={450}
          maxVerticalRotationDeg={10}
          segments={35}
          dragDampening={2}
          grayscale={false}
          /* UKURAN GAMBAR SAAT DIKLIK (LEBIH BESAR) */
          openedImageWidth="90vw" // Menggunakan 90% lebar layar
          openedImageHeight="85vh" // Menggunakan 85% tinggi layar
          imageBorderRadius="20px"
          openedImageBorderRadius="12px"
        />
      </div>

      {/* Deskripsi Overlay (Petunjuk) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <p
          className={`text-white/40 text-[10px] uppercase tracking-[0.6em] text-center ${quicksand.className}`}
        >
          Click any project to expand & see details
        </p>
      </div>
    </main>
  );
}
