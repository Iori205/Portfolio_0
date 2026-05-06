// "use client";

// import type React from "react";
// import type { Variants } from "framer-motion";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// type HeroSectionProps = {
//   fadeInUp: Variants;
//   staggerContainer: Variants;
// };

// export function HeroSection({ fadeInUp, staggerContainer }: HeroSectionProps) {
//   return (
//     <section className="relative min-h-screen overflow-hidden px-6 pb-32 pt-40 lg:pb-40 lg:pt-48">
//       <div className="pointer-events-none absolute inset-0 hero-lighting" />
//       <div className="pointer-events-none absolute inset-0 noise-overlay" />
//       <div className="pointer-events-none absolute inset-0 grid-pattern" />

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="floating-orb floating-orb-4 absolute -left-[20%] top-[10%]" />
//         <div className="floating-orb floating-orb-4 absolute -right-[15%] top-[60%]" />
//         <div className="floating-orb floating-orb-1 absolute -left-32 top-[20%]" />
//         <div className="floating-orb floating-orb-2 absolute -right-24 top-[25%]" />
//         <div className="floating-orb floating-orb-3 absolute bottom-[20%] left-1/2 -translate-x-1/2" />
//         <div className="floating-orb floating-orb-5 absolute left-[10%] bottom-[35%]" />
//         <div className="floating-orb floating-orb-5 absolute right-[15%] top-[45%]" />
//       </div>

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
//           className="floating-card absolute left-[2%] top-[18%] hidden w-56 rotate-[-6deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:left-[5%]"
//           style={{ "--rotate": "-6deg" } as React.CSSProperties}
//         >
//           <div className="aspect-[4/3] bg-gradient-to-br from-red-500/90 to-red-600/90 p-4">
//             <div className="flex h-full flex-col justify-end">
//               <p className="text-xs font-medium text-white/80">Venture capital for</p>
//               <p className="text-sm font-semibold text-white">
//                 the <span className="text-orange-200">human</span> future.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
//           className="floating-card absolute bottom-[20%] left-[3%] hidden w-48 rotate-[3deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:left-[8%]"
//           style={{ "--rotate": "3deg", animationDelay: "3s" } as React.CSSProperties}
//         >
//           <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-4">
//             <p className="font-mono text-lg font-bold tracking-tight text-white">INTELLIGENCE AT</p>
//             <p className="font-mono text-lg font-bold tracking-tight text-amber-400">YOUR FINGERTIPS</p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
//           className="floating-card absolute right-[2%] top-[15%] hidden w-52 rotate-[5deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:right-[5%]"
//           style={{ "--rotate": "5deg", animationDelay: "2s" } as React.CSSProperties}
//         >
//           <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-700 p-4">
//             <p className="text-xl font-bold uppercase tracking-wider text-white">BOSTON</p>
//             <p className="text-xl font-bold uppercase tracking-wider text-white">HURRICANES</p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
//           className="floating-card absolute bottom-[25%] right-[3%] hidden w-44 rotate-[-4deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:right-[8%]"
//           style={{ "--rotate": "-4deg", animationDelay: "4s" } as React.CSSProperties}
//         >
//           <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 p-4">
//             <p className="text-xs font-medium text-orange-800">Your health is your</p>
//             <p className="text-sm font-semibold text-orange-900">power.</p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 0.6, scale: 1 }}
//           transition={{ duration: 1.5, delay: 1.3 }}
//           className="absolute left-[15%] top-[45%] hidden h-3 w-3 rounded-full bg-primary/40 lg:block"
//           style={{ animationDelay: "1s" }}
//         />
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 0.4, scale: 1 }}
//           transition={{ duration: 1.5, delay: 1.5 }}
//           className="absolute right-[18%] top-[60%] hidden h-2 w-2 rounded-full bg-primary/30 lg:block"
//         />
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 0.5, scale: 1 }}
//           transition={{ duration: 1.5, delay: 1.7 }}
//           className="absolute left-[20%] bottom-[30%] hidden h-4 w-4 rounded-full border border-primary/20 lg:block"
//         />
//       </div>

//       <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mb-10 flex justify-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
//             </span>
//             <span className="text-sm font-medium text-primary">Available June 2026</span>
//           </div>
//         </motion.div>

//         <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
//           <motion.h1
//             variants={fadeInUp}
//             className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
//           >
//             I build modern web applications that{" "}
//             <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
//               scale with your business
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="mx-auto mt-10 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
//           >
//             Full-stack developer specializing in React, Next.js, and Node.js. Code that solves real problems.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center justify-center gap-4">
//             <Link href="/contact">
//               <button className="cta-button flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium">
//                 Get in touch
//                 <ArrowUpRight className="h-4 w-4" />
//               </button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type HeroSectionProps = {
  fadeInUp: Variants;
  staggerContainer: Variants;
};

const logos = ["FRAMER", "AGENCY PARTNER", "CONTRA TOP", "INDEPENDENT"];

const cards = [
  // Top row (navbar доор “тасарсан” мэт харагдах байрлал)
  {
    key: "top-left",
    className: "left-[29%] top-[12%] w-[150px] h-[94px] rotate-[-2deg]",
    imgSrc: "/hero/hero.png",
    label: "",
  },
  {
    key: "top-right",
    className: "right-[29%] top-[6%] w-[150px] h-[94px] rotate-[2deg]",
    imgSrc: "/hero/hero1.png",
    label: "",
  },

  // Mid row (headline-ийн хоёр тал)
  {
    key: "mid-left",
    className: "left-[13%] top-[48%] w-[150px] h-[94px] rotate-[-2deg]",
    imgSrc: "/hero/hero.png",
    label: "",
  },
  {
    key: "mid-right",
    className: "right-[14%] top-[48%] w-[150px] h-[94px] rotate-[2deg]",
    imgSrc: "/images/card-case-study.jpg",
    label: "",
  },

  // Bottom row
  {
    key: "bottom-left",
    className: "left-[25%] bottom-[3.5%] w-[150px] h-[94px] rotate-[-2deg]",
    imgSrc: "/hero/hero1.png",
    label: "",
  },
  {
    key: "bottom-right",
    className: "right-[28%] bottom-[-1%] w-[150px] h-[94px] rotate-[2deg]",
    imgSrc: "/images/card-apply.jpg",
    label: "",
  },
];

export function HeroSection({ fadeInUp, staggerContainer }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-transparent overflow-hidden px-6 pt-10">
      {/* Floating Cards */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {cards.map((card, i) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
              scale: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
              y: {
                duration: 5.5,
                delay: 0.6 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            className={`absolute ${card.className} overflow-hidden rounded-[18px] border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.10)]`}
          >
            {/* Зургийг /public дотроос татна, байхгүй бол bg-color fallback */}
            <div
              className="h-full w-full relative flex flex-col justify-end p-4"
              style={{
                backgroundImage: `url(${card.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Доод хэсэгт label харагдахын тулд зөөлөн gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="relative text-[9px] font-bold uppercase tracking-[0.14em] text-white/80 leading-tight drop-shadow-sm">
                {card.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center Content - max-w нарийсгаж картуудтай давхарлахгүй болгов */}
      <div className="relative z-10 mx-auto flex max-w-[626px] flex-col items-center text-center">
        {/* Available Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-transparent px-4 py-2 shadow-sm">
            <span className="h-[6px] w-[6px] rounded-full bg-[#32d583]" />
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#19191D]">
              Available June 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Headline - эх хувилбар шиг жижиг, нягт */}
          <motion.h1 variants={fadeInUp}>
            <p className="leading-none tracking-[-0.04em] text-[#19191D] sm:text-[26px] md:text-[46px]">
              {" "}
              We build high-converting websites that turn attention into
            </p>

            <span className="text-[#797996] sm:text-[26px] md:text-[46px] leading-none tracking-[-0.04em]">
              sign-ups and sales
            </span>
          </motion.h1>

          {/* Logo Bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-9 flex items-center justify-center gap-5 opacity-[0.18]"
          >
            {logos.map((logo, index) => (
              <React.Fragment key={logo}>
                <span className="text-[9.5px] font-black tracking-[0.15em]">
                  {logo}
                </span>
                {index < logos.length - 1 && (
                  <span className="text-[11px] leading-none">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeInUp} className="mt-12">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 rounded-[16px] bg-[#ee5d3e] px-8 py-[14px] text-[14px] font-bold text-white shadow-[0_10px_28px_rgba(238,93,62,0.22)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Schedule a call
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-9 w-[18px] rounded-full border border-black/10 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1.5 bg-black rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
