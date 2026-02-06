"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Suspense, useMemo } from "react";

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

export default function Home() {
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
      className={`relative h-screen w-full overflow-hidden bg-[#3b5ba5] text-white ${chocobold.className} antialiased`}
    >
      <div className="fixed inset-0 z-0 opacity-20">
        <Suspense fallback={null}>
          <LiquidEther {...liquidProps} />
        </Suspense>
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center select-none pointer-events-none">
        <h1 className="flex flex-col leading-[0.7] tracking-[-0.05em] uppercase text-center">
          <span className="text-[22vw] md:text-[200px] opacity-90">
            Graphic
          </span>
          <span className="text-[22vw] md:text-[200px] opacity-90">
            Designer
          </span>
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-[81px] md:bottom-[150px] z-20 pointer-events-none">
        <Suspense fallback={null}>
          <CurvedLoop
            marqueeText="Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦ Portfolio ✦ Rasya ✦"
            speed={1.5}
            curveAmount={12}
            direction="right"
            interactive={false}
            className={portfolioTextClass}
          />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-30 flex items-end justify-center pointer-events-none">
        <div className="relative w-full h-[45vh] md:w-[600px] md:h-[75vh]">
          <Image
            src="/images/picturestar.png"
            alt="Rasya Portfolio"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
            priority
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#3b5ba5] to-transparent z-15 pointer-events-none" />
    </main>
  );
}
