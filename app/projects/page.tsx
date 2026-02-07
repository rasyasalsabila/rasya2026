"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const quicksand = localFont({ src: "../fonts/Quicksand-Regular.ttf" });

const DomeGallery = dynamic(() => import("../components/DomeGallery"), {
  ssr: false,
});

const projects = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/portfolio/${i + 1}.jpg`,
  alt: `Project Highlight #${i + 1} - Visual Design Concept 2026`,
}));

export default function ProjectsPage() {
  return (
    <main className="relative w-full h-screen bg-[#33528e] overflow-hidden">
      <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 z-50">
        <Link
          href="/"
          className={`group flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 ${quicksand.className}`}
          style={{ color: "#d03a92" }}
        >
          <div
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 transition-all font-bold group-hover:bg-[#d03a92] group-hover:text-white text-sm sm:text-base md:text-lg"
            style={{ borderColor: "#d03a92" }}
          >
            ←
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[10px] xs:text-xs">
              Go Back
            </span>
            <span className="text-white text-sm sm:text-base md:text-lg font-light group-hover:text-[#d03a92] transition-colors">
              Home
            </span>
          </div>
        </Link>
      </div>

      <div className="w-full h-full">
        <DomeGallery
          images={projects}
          fit={0.95}
          minRadius={450}
          maxVerticalRotationDeg={10}
          segments={35}
          dragDampening={2}
          grayscale={false}
          openedImageWidth="90vw"
          openedImageHeight="85vh"
          imageBorderRadius="20px"
          openedImageBorderRadius="12px"
        />
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-4">
        <p
          className={`text-white/40 text-[8px] xs:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-center ${quicksand.className} whitespace-nowrap`}
        >
          Click any project to expand & see details
        </p>
      </div>
    </main>
  );
}
