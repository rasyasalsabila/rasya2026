"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Suspense, useMemo, useEffect, useState } from "react";
import LogoLoop from "./components/LogoLoop";
import CardSwap, { Card } from "./components/CardSwap";
import Link from "next/link";
import LightRays from "./components/LightRays";
import GooeyNav from "./components/GooeyNav";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig() || {};

const TiltedCard = dynamic(() => import("./components/TiltedCard"), {
  ssr: false,
});

const chocobold = localFont({
  src: "./fonts/Chocobold.ttf",
  weight: "700",
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

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/rasya2026" : "";

const techLogos = [
  { src: `${basePath}/images/logo/aarti.png`, alt: "Aarti" },
  { src: `${basePath}/images/logo/onsei.png`, alt: "Onsei" },
  { src: `${basePath}/images/logo/judydoll.png`, alt: "judydoll" },
  { src: `${basePath}/images/logo/hairum.png`, alt: "Hairum" },
  { src: `${basePath}/images/logo/sea-makeup.png`, alt: "Sea Makeup" },
  { src: `${basePath}/images/logo/acnaway.png`, alt: "acnaway" },
  { src: `${basePath}/images/logo/mr.png`, alt: "mr" },
  { src: `${basePath}/images/logo/w.png`, alt: "w" },
  { src: `${basePath}/images/logo/s.png`, alt: "s" },
  { src: `${basePath}/images/logo/b.png`, alt: "b" },
];

const projects = [
  { id: 1, src: `${basePath}/portfolio/9.jpg` },
  { id: 2, src: `${basePath}/portfolio/10.jpg` },
  { id: 3, src: `${basePath}/portfolio/14.jpg` },
  { id: 4, src: `${basePath}/portfolio/15.jpg` },
  { id: 5, src: `${basePath}/portfolio/16.jpg` },
  { id: 6, src: `${basePath}/portfolio/18.jpg` },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "CONTACT", href: "#contact" },
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
    ${Gerhaus.className} 
    text-[30px] sm:text-[45px] md:text-[65px]
    text-white normal-case
    drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
    [webkit-text-stroke:1px_#33528e]
  `;

  return (
    <main
      className={`relative w-full bg-[#3b5ba5] text-white ${chocobold.className} antialiased`}
    >
      {mounted && (
        <nav
          className={`fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 ${Gerhaus.className}`}
        >
          <div className="relative w-full max-w-[400px]">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-hidden">
              <div className="h-14 flex items-center justify-around px-2">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="relative px-3 py-2 text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <Suspense fallback={null}>
          <LiquidEther {...liquidProps} />
        </Suspense>
      </div>

      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4"
      >
        <div className="relative z-10 w-full flex flex-col justify-center items-center select-none pointer-events-none">
          <h1 className="flex flex-col leading-[0.7] tracking-[-0.05em] uppercase text-center">
            <span className="text-[18vw] sm:text-[22vw] md:text-[200px] opacity-90">
              Graphic
            </span>
            <span className="text-[18vw] sm:text-[22vw] md:text-[200px] opacity-90">
              Designer
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-[70px] sm:bottom-[90px] md:bottom-[150px] z-20 pointer-events-none px-4">
          <Suspense fallback={null}>
            <CurvedLoop
              marqueeText="Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦"
              speed={1.5}
              curveAmount={8}
              direction="right"
              interactive={false}
              className={portfolioTextClass}
            />
          </Suspense>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-[#3b5ba5] to-transparent z-25 pointer-events-none" />
      </section>

      <section
        id="about"
        className="relative min-h-auto w-full bg-[#3b5ba5] flex flex-col items-center justify-start p-4 sm:p-6 md:p-10 z-40"
      >
        <div className="relative z-50 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-5 -mt-[15vh] sm:-mt-[25vh] md:-mt-[35vh] mb-16 sm:mb-24 px-2">
          <TiltedCard
            imageSrc="/rasya2026/images/r1.jpg"
            altText="Project 1"
            captionText="Hello"
            containerHeight="300px"
            containerWidth="220px"
            imageHeight="300px"
            imageWidth="220px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />

          <TiltedCard
            imageSrc="/rasya2026/images/r2.jpg"
            altText="Project 2"
            captionText="I'm"
            containerHeight="300px"
            containerWidth="220px"
            imageHeight="300px"
            imageWidth="220px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />

          <TiltedCard
            imageSrc="/rasya2026/images/r3.jpg"
            altText="Project 3"
            captionText="Rasya"
            containerHeight="300px"
            containerWidth="220px"
            imageHeight="300px"
            imageWidth="220px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
          />
        </div>

        <div className="max-w-4xl text-center mb-12 sm:mb-16 px-4">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 uppercase ${Gerhaus.className}`}
          >
            About Me
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed opacity-80 ${quicksand.className}`}
          >
            A Graphic Designer with a strong foundation in Visual Communication
            <br className="hidden sm:block" />
            Design academic background. Throughout my career, I have worked on
            <br className="hidden sm:block" />
            <b className="text-orange-400 font-bold opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Social Media, Brand Identity, Packaging, and Illustration.
            </b>
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4">
            <h3
              className={`uppercase tracking-widest text-xs sm:text-sm font-bold ${quicksand.className}`}
            >
              Toolset Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <div className="group relative">
                <Image
                  src="/rasya2026/images/logo/photoshop.png"
                  alt="Photoshop"
                  width={40}
                  height={40}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="group relative">
                <Image
                  src="/rasya2026/images/logo/illustrator.png"
                  alt="Illustrator"
                  width={40}
                  height={40}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="group relative">
                <Image
                  src="/rasya2026/images/logo/figma.png"
                  alt="Figma"
                  width={40}
                  height={40}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="group relative">
                <Image
                  src="/rasya2026/images/logo/canva.png"
                  alt="Canva"
                  width={40}
                  height={40}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="group relative">
                <Image
                  src="/rasya2026/images/logo/premiere.png"
                  alt="Premiere Pro"
                  width={40}
                  height={40}
                  className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 drop-shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative min-h-auto w-full bg-[#3b5ba5] flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-40"
      >
        <div className="max-w-6xl w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter ${Gerhaus.className} text-center sm:text-left`}
            >
              Work Experience
            </h2>
            <div className="h-[2px] w-full sm:w-0 sm:flex-grow bg-gradient-to-r from-orange-400 to-transparent hidden sm:block" />
          </div>

          <div className="relative border-l-2 border-dashed border-orange-400/50 ml-3 sm:ml-4 md:ml-8 pl-4 sm:pl-6 md:pl-12 space-y-8 sm:space-y-12">
            <div className="relative group">
              <div className="absolute -left-[29px] sm:-left-[33px] md:-left-[57px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-400 border-3 sm:border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/10 backdrop-blur-xl border border-orange-400/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 ring-1 ring-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-400">
                      Graphic Designer
                    </h3>
                    <span className="bg-orange-400/20 text-orange-300 text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full border border-orange-400/30 uppercase tracking-widest">
                      Current
                    </span>
                  </div>
                  <span
                    className={`text-xs sm:text-sm opacity-60 ${quicksand.className}`}
                  >
                    2025 - Present
                  </span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white/90">
                  at UPartners Venture Studio
                </h4>
                <ul
                  className={`space-y-1 sm:space-y-2 opacity-80 text-sm sm:text-base md:text-lg ${quicksand.className} list-disc list-inside pl-2`}
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

            <div className="relative group">
              <div className="absolute -left-[29px] sm:-left-[33px] md:-left-[57px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-400 border-3 sm:border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-400">
                    Graphic Designer
                  </h3>
                  <span
                    className={`text-xs sm:text-sm opacity-60 ${quicksand.className}`}
                  >
                    May 2025 - Present
                  </span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white/90">
                  at Judydoll Indonesia
                </h4>
                <ul
                  className={`space-y-1 sm:space-y-2 opacity-80 text-sm sm:text-base md:text-lg ${quicksand.className} list-disc list-inside pl-2`}
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

            <div className="relative group">
              <div className="absolute -left-[29px] sm:-left-[33px] md:-left-[57px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-400 border-3 sm:border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-400">
                    Graphic Designer
                  </h3>
                  <span
                    className={`text-xs sm:text-sm opacity-60 ${quicksand.className}`}
                  >
                    Dec 2023 - Present
                  </span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white/90">
                  at Hairum
                </h4>
                <ul
                  className={`space-y-1 sm:space-y-2 opacity-80 text-sm sm:text-base md:text-lg ${quicksand.className} list-disc list-inside pl-2`}
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

            <div className="relative group">
              <div className="absolute -left-[29px] sm:-left-[33px] md:-left-[57px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-400 border-3 sm:border-4 border-[#3b5ba5] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-400">
                    Graphic Designer Intern
                  </h3>
                  <span
                    className={`text-xs sm:text-sm opacity-60 ${quicksand.className}`}
                  >
                    Jan 2025 - May 2025
                  </span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white/90">
                  at PT Good Sale Tech
                </h4>
                <ul
                  className={`space-y-1 sm:space-y-2 opacity-80 text-sm sm:text-base md:text-lg ${quicksand.className} list-disc list-inside pl-2`}
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

      <section className="relative min-h-auto w-auto bg-[#3b5ba5] flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-10 z-40">
        <div className="w-full max-w-5xl h-[180px] sm:h-[200px] md:h-[230px] relative overflow-hidden">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl text-white justify-center flex mb-4 sm:mb-6 uppercase tracking-wider z-10 relative ${Gerhaus.className}`}
          >
            BRAND HANDLED
          </h1>
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={40}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#3b5ba5"
          />
        </div>
      </section>

      <section
        id="portfolio"
        className="relative min-h-screen w-full bg-[#33528e] flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 z-40 overflow-hidden"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="flex flex-col space-y-4 sm:space-y-6 text-center md:text-left md:w-1/2">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter text-orange-400 ${Gerhaus.className} leading-[0.9]`}
            >
              FEATURED
              <br />
              PROJECTS
            </h2>

            <div className="h-[2px] w-16 sm:w-20 md:w-24 bg-white/30 hidden md:block" />

            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-md ${quicksand.className} mt-4`}
            >
              A curated selection of my most impactful works, ranging from{" "}
              <b className="text-white">Brand Identity</b> to{" "}
              <b className="text-white">Motion Graphics</b>. Each project is
              crafted with precision to deliver unique visual experiences.
            </p>

            <Link href="/projects">
              <button
                className={`
                  group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange-400 text-blue-900 font-bold rounded-full 
                  overflow-hidden transition-all duration-300 hover:pr-10 sm:hover:pr-12 active:scale-95
                  ${quicksand.className} text-sm sm:text-base mt-6 w-fit mx-auto md:mx-0
                `}
              >
                <span className="relative z-10">View All Projects</span>
                <span className="absolute right-3 sm:right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center items-center md:w-1/2">
            <div className="absolute inset-0 bg-orange-400/10 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

            <div
              className="relative z-10"
              style={{
                height: "400px",
                width: "100%",
                maxWidth: "300px",
                top: "70px",
              }}
            >
              <CardSwap
                cardDistance={40}
                verticalDistance={50}
                delay={5000}
                pauseOnHover={false}
              >
                {projects.map((project) => (
                  <Card key={project.id}>
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-white/10">
                      <Image
                        src={project.src}
                        alt={`Project ${project.id}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                        priority={project.id <= 2}
                      />
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative min-h-screen w-full bg-[#2a4375] flex flex-col items-center justify-between py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-40 overflow-hidden"
        style={{
          ["--brand-magenta" as any]: "#d03a92",
        }}
      >
        <style jsx>{`
          section::selection {
            background: #d03a92;
            color: white;
          }
        `}</style>

        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <LightRays
            raysOrigin="top-center"
            raysColor="#d03a92"
            raysSpeed={0.8}
            lightSpread={0.6}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.05}
            className="custom-rays"
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[150%] h-[300px] sm:h-[400px] md:h-[500px] bg-[#d03a92]/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 text-center flex flex-col items-center mt-auto mb-auto">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl uppercase tracking-tighter mb-3 sm:mb-4 transition-all duration-700 ${Gerhaus.className}`}
          >
            Let's{" "}
            <span
              style={{
                color: "#d03a92",
                textShadow: "0 0 20px rgba(208, 58, 146, 0.4)",
              }}
            >
              Talk
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl opacity-60 max-w-xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4 ${quicksand.className}`}
          >
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-16 ${Gerhaus.className} text-lg sm:text-xl md:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em] px-4`}
          >
            {[
              {
                name: "Instagram",
                href: "https://www.instagram.com/rasya.sals/",
              },
              {
                name: "Behance",
                href: "https://www.behance.net/rasyasalsabila",
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/rasya-salsabila-haffaf/",
              },
              { name: "Gmail", href: "mailto:rasyasalsabila253@gmail.com" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group transition-all duration-300 hover:scale-105 sm:hover:scale-110"
              >
                <span className="group-hover:text-[#d03a92] transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                  {link.name}
                </span>

                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-[1px] sm:h-[2px] bg-[#d03a92] transition-all duration-300 group-hover:w-full shadow-[0_0_4px_#d03a92] sm:shadow-[0_0_8px_#d03a92]" />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`relative z-10 w-full max-w-7xl border-t border-white/10 pt-6 sm:pt-8 md:pt-10 mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center opacity-40 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] px-4 ${quicksand.className}`}
        >
          <p className="mb-2 md:mb-0">
            © 2026 Rasya Salsabila. All Rights Reserved.
          </p>
          <p className="hover:opacity-100 transition-opacity cursor-default">
            Handcrafted with Passion
          </p>
        </div>
      </section>
    </main>
  );
}
