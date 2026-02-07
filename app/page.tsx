"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Suspense, useMemo, useEffect, useState } from "react";
import LogoLoop from "./components/LogoLoop";
import { Color } from "three";

const TiltedCard = dynamic(() => import("./components/TiltedCard"), {
  ssr: false,
});

const chocobold = localFont({
  src: "./fonts/Chocobold.ttf",
  weight: "700",
  display: "swap",
});

const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  display: "swap",
});

const LiquidEther = dynamic(() => import("./components/LiquidEther"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#3b5ba5]" />,
});

const CurvedLoop = dynamic(() => import("./components/CurvedLoop"), {
  ssr: false,
});

const GooeyNav = dynamic(() => import("./components/GooeyNav"), {
  ssr: false,
});

const techLogos = [
  { src: "/images/logo/aarti.png", alt: "Aarti" },
  { src: "/images/logo/onsei.png", alt: "Onsei" },
  { src: "/images/logo/judydoll.png", alt: "judydoll" },
  { src: "/images/logo/hairum.png", alt: "Hairum" },
  { src: "/images/logo/Sea Makeup.png", alt: "Sea Makeup" },
  { src: "/images/logo/acnaway.png", alt: "acnaway" },
  { src: "/images/logo/mr.png", alt: "mr" },
  { src: "/images/logo/w.png", alt: "w" },
  { src: "/images/logo/s.png", alt: "s" },
  { src: "/images/logo/b.png", alt: "b" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const liquidProps = useMemo(
    () => ({
      colors: ["#5227FF", "#FF9FFC", "#B19EEF"],
      mouseForce: 12,
      autoDemo: true,
      pixelRatio: 1,
    }),
    [],
  );

  const portfolioTextClass = `
    ${breathing.className} 
    text-[45px] md:text-[65px] 
    text-white normal-case
    drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
    [webkit-text-stroke:1px_#33528e]
  `;

  return (
    <main
      className={`relative w-full bg-[#3b5ba5] text-white ${chocobold.className} antialiased`}
    >
      {/* 1. NAVIGATION SECTION */}
      {mounted && (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto">
          <div className="max-w-fit bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-2 py-1 shadow-lg">
            <GooeyNav items={items} />
          </div>
        </nav>
      )}

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center"
      >
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <Suspense fallback={null}>
            <LiquidEther {...liquidProps} />
          </Suspense>
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center items-center select-none pointer-events-none">
          <h1 className="flex flex-col leading-[0.7] tracking-[-0.05em] uppercase text-center">
            <span className="text-[22vw] md:text-[200px] opacity-90">
              Graphic
            </span>
            <span className="text-[22vw] md:text-[200px] opacity-90">
              Designer
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-[90px] md:bottom-[150px] z-20 pointer-events-none">
          <Suspense fallback={null}>
            <CurvedLoop
              marqueeText="Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦"
              speed={1.5}
              curveAmount={12}
              direction="right"
              interactive={false}
              className={portfolioTextClass}
            />
          </Suspense>
        </div>

        {/* Gradasi halus untuk menyatukan transisi */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#3b5ba5] to-transparent z-25 pointer-events-none" />
      </section>

      {/* 3. ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-screen w-full bg-[#3b5ba5] flex flex-col items-center justify-start p-10 z-40"
      >
        {/* CONTAINER TILTED CARD YANG MENEMBUS KE ATAS (HOME) */}
        <div className="relative z-50 flex flex-row justify-center items-center gap-6 md:gap-5 -mt-[25vh] md:-mt-[35vh] mb-24 px-4">
          {/* Foto 1 */}
          <TiltedCard
            imageSrc="/images/r1.jpg"
            altText="Project 1"
            captionText="Hallo"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />

          {/* Foto 2 */}
          <TiltedCard
            imageSrc="/images/r2.jpg"
            altText="Project 2"
            captionText="Gue"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />

          {/* Foto 3 */}
          <TiltedCard
            imageSrc="/images/r3.jpg"
            altText="Project 3"
            captionText="Rasya"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />
        </div>

        {/* KONTEN ABOUT ME */}
        <div className="max-w-4xl text-center mb-16">
          <h2 className="text-5xl mb-8 uppercase">About Me</h2>
          <p className="text-xl leading-relaxed font-sans opacity-80">
            Insert your professional bio or description here.
          </p>
        </div>

        <div className="w-full max-w-5xl h-[150px] relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={80}
            gap={60}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#3b5ba5"
          />
        </div>
      </section>

      {/* 4. PORTFOLIO SECTION */}
      <section
        id="portfolio"
        className="relative min-h-screen w-full bg-[#33528e] flex items-center justify-center p-10 z-40"
      >
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-5xl mb-12 uppercase">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
            <div className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
            <div className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section
        id="contact"
        className="relative h-[60vh] w-full bg-[#2a4375] flex items-center justify-center z-40"
      >
        <div className="text-center">
          <h2 className="text-5xl mb-4 uppercase">Get In Touch</h2>
          <p className="text-lg opacity-70 mb-8">Email: your@email.com</p>
          <div className="flex gap-6 justify-center">
            <span className="cursor-pointer hover:text-[#FF9FFC]">
              Instagram
            </span>
            <span className="cursor-pointer hover:text-[#FF9FFC]">Behance</span>
          </div>
        </div>
      </section>
    </main>
  );
}
