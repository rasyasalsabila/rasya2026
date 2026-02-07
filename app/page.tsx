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

const quicksand = localFont({
  src: "./fonts/Quicksand-Regular.ttf",
  display: "swap",
});

const Gerhaus = localFont({
  src: "./fonts/Gerhaus-Regular.ttf",
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
          {/* Perhatikan penggunaan backtick dan kurung kurawal di bawah ini */}
          <div
            className={`max-w-fit bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-2 py-1 shadow-lg ${Gerhaus.className}`}
          >
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
          <h2 className={`text-5xl mb-8 uppercase ${Gerhaus.className}`}>
            About Me
          </h2>
          <p
            className={`text-xl leading-relaxed opacity-80 ${quicksand.className}`}
          >
            A Graphic Designer with a strong foundation in Visual Communication
            <br />
            Design academic background. Throughout my career, I have worked on
            <br />
            <b className="text-orange-400 font-bold opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Social Media, Brand Identity, Packaging, and Illustration.
            </b>
          </p>

          {/* TOOLSET SKILLS SECTION - Sesuai Gambar Referensi */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <h3
              className={`uppercase tracking-widest text-sm font-bold ${quicksand.className}`}
            >
              Toolset Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Icon Photoshop */}
              <div className="group relative">
                <Image
                  src="/images/logo/photoshop.png"
                  alt="Photoshop"
                  width={50}
                  height={50}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              {/* Icon Illustrator */}
              <div className="group relative">
                <Image
                  src="/images/logo/illustrator.png"
                  alt="Illustrator"
                  width={50}
                  height={50}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              {/* Icon Figma */}
              <div className="group relative">
                <Image
                  src="/images/logo/figma.png"
                  alt="Figma"
                  width={50}
                  height={50}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              {/* Icon Canva */}
              <div className="group relative">
                <Image
                  src="/images/logo/canva.png"
                  alt="Canva"
                  width={50}
                  height={50}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              {/* Icon Premiere */}
              <div className="group relative">
                <Image
                  src="/images/logo/premiere.png"
                  alt="Premiere Pro"
                  width={50}
                  height={50}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 WORK EXPERIENCE SECTION */}
      <section
        id="experience"
        className="relative min-h-screen w-full bg-[#3b5ba5] flex flex-col items-center py-20 px-6 z-40"
      >
        <div className="max-w-6xl w-full">
          {/* Header Section dengan Aksen Garis */}

          <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
            <h2
              className={`text-5xl uppercase tracking-tighter ${Gerhaus.className}`}
            >
              Work Experience
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-orange-400 to-transparent hidden md:block" />
          </div>

          <div className="relative border-l-2 border-dashed border-orange-400/50 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {/* NEW: UPartners Venture Studio */}
            <div className="relative group">
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-orange-400 border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_20px_rgba(251,146,60,1)]" />

              <div className="bg-white/10 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 ring-1 ring-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl text-orange-400">
                      Graphic Designer
                    </h3>
                    <span className="bg-orange-400/20 text-orange-300 text-[10px] px-2 py-0.5 rounded-full border border-orange-400/30 uppercase tracking-widest">
                      Current
                    </span>
                  </div>
                  <span className={`text-sm opacity-60 ${quicksand.className}`}>
                    2025 - Present
                  </span>
                </div>
                <h4 className="text-xl mb-4 text-white/90">
                  at UPartners Venture Studio
                </h4>
                <ul
                  className={`space-y-2 opacity-80 text-lg ${quicksand.className} list-disc list-inside`}
                >
                  <li>
                    Visual identity and creative direction for venture-backed
                    startups.
                  </li>
                  <li>
                    Designing high-converting marketing collateral and digital
                    assets.
                  </li>
                  <li>
                    Collaborating with cross-functional teams to build impactful
                    brand experiences.
                  </li>
                  <li>
                    Developing comprehensive design systems for scalable product
                    growth.
                  </li>
                </ul>
              </div>
            </div>
            {/* 1. Judydoll Indonesia */}
            <div className="relative group">
              {/* Dot Timeline */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-orange-400 border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-3xl text-orange-400">Graphic Designer</h3>
                  <span className={`text-sm opacity-60 ${quicksand.className}`}>
                    May 2025 - Present
                  </span>
                </div>
                <h4 className="text-xl mb-4 text-white/90">
                  at Judydoll Indonesia
                </h4>
                <ul
                  className={`space-y-2 opacity-80 text-lg ${quicksand.className} list-disc list-inside`}
                >
                  <li>Photo editing for color grading and skin correction.</li>
                  <li>
                    Produced 25 to 30 meticulously crafted Instagram feeds
                    monthly.
                  </li>
                  <li>
                    Created over 10 motion designs for Daily Content & TikTok
                    Ads.
                  </li>
                  <li>
                    Produced Judydoll design posters for Jakarta X Beauty 2025.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Hairum */}
            <div className="relative group">
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-orange-400 border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-3xl text-orange-400">Graphic Designer</h3>
                  <span className={`text-sm opacity-60 ${quicksand.className}`}>
                    Dec 2023 - Present
                  </span>
                </div>
                <h4 className="text-xl mb-4 text-white/90">at Hairum</h4>
                <ul
                  className={`space-y-2 opacity-80 text-lg ${quicksand.className} list-disc list-inside`}
                >
                  <li>
                    Designed 10 distinctive Shopee e-commerce covers monthly.
                  </li>
                  <li>
                    Developed packaging designs for upcoming product launches.
                  </li>
                  <li>
                    Produced 5 brand collateral materials for Jakarta X Beauty.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. PT Good Sale Tech */}
            <div className="relative group">
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-orange-400 border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-3xl text-orange-400">
                    Graphic Designer Intern
                  </h3>
                  <span className={`text-sm opacity-60 ${quicksand.className}`}>
                    Jan 2025 - May 2025
                  </span>
                </div>
                <h4 className="text-xl mb-4 text-white/90">
                  at PT Good Sale Tech
                </h4>
                <ul
                  className={`space-y-2 opacity-80 text-lg ${quicksand.className} list-disc list-inside`}
                >
                  <li>
                    Designed content for 4 in-house brands (Sea Makeup, Acnaway,
                    GoSmile, MilkRecipe).
                  </li>
                  <li>
                    Created 10+ social media assets monthly aligning with
                    regional trends.
                  </li>
                  <li>
                    Collaborated cross-functionally with marketing and brand
                    teams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full bg-[#3b5ba5] flex flex-col items-center justify-center gap-10 p-10 z-40">
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
