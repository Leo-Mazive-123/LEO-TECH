"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Wifi,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Computer Support",
    description: "Diagnostics & troubleshooting",
  },
  {
    icon: Wifi,
    title: "Networking",
    description: "Connectivity & infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "IT Security",
    description: "Protection & maintenance",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080808] flex items-center overflow-hidden pt-36 pb-12 sm:pt-40 sm:pb-16 lg:pt-36 lg:pb-16"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 sm:w-125 sm:h-125 bg-white/3.5 blur-[120px] sm:blur-[150px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-[93%] max-w-300 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          {/* LABEL */}
          <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 mb-9">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse shrink-0" />

            <span className="font-(family-name:--font-body) text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-200">
              IT Support & Technology Solutions
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="font-(family-name:--font-heading) text-[clamp(2.8rem,6vw,5rem)] leading-[1.06] font-bold tracking-[-0.045em] text-white">
            Your Technology.

            <span className="block text-neutral-500 mt-3">
              Our Expertise.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="font-(family-name:--font-body) text-neutral-300 text-base sm:text-lg leading-8 mt-8 max-w-xl">
            Reliable IT support and technology solutions for
            individuals and businesses. We help you solve
            technical challenges and keep your technology
            running smoothly.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-11 sm:mt-12">

            <Link
              href="/services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg font-(family-name:--font-body) text-sm font-semibold shadow-lg shadow-white/5 hover:bg-neutral-200 hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Services

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/20 bg-white/4 text-white px-6 py-3.5 rounded-lg font-(family-name:--font-body) text-sm font-semibold hover:bg-white hover:text-black hover:border-white hover:-translate-y-1 transition-all duration-300"
            >
              Get IT Support

              <MessageCircle
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

          </div>

          {/* BRAND MESSAGE */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-white/15">

            <p className="font-(family-name:--font-heading) text-white font-semibold text-sm tracking-wide">
              Dream. Build. Inspire.
            </p>

            <p className="font-(family-name:--font-body) text-neutral-400 text-xs mt-2">
              Technology with purpose.
            </p>

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-w-0 lg:-translate-y-10"
        >

          {/* MAIN IMAGE */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40">

            <Image
              src="/images/it-repair.jpg"
              alt="IT technician repairing computer hardware"
              fill
              priority
              sizes="(max-width: 1024px) 93vw, 45vw"
              className="object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-black/10" />

            {/* IMAGE LABEL */}
            <div className="absolute top-5 left-5 flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-md rounded-full px-3 py-2">

              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />

              <span className="font-(family-name:--font-body) text-[9px] sm:text-[10px] text-white uppercase tracking-[0.15em] font-semibold">
                Professional IT Support
              </span>

            </div>

            {/* IMAGE BOTTOM TEXT */}
            <div className="absolute bottom-5 left-5 right-5">

              <p className="font-(family-name:--font-heading) text-white text-xl sm:text-2xl font-semibold">
                Technology, handled with care.
              </p>

              <p className="font-(family-name:--font-body) text-neutral-300 text-xs sm:text-sm mt-2">
                Reliable solutions for your everyday technology needs.
              </p>

            </div>

          </div>

          {/* FLOATING SERVICES CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative sm:absolute sm:-bottom-13 sm:-left-5 sm:right-5 mt-5 sm:mt-0 z-10"
          >

            <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/15 rounded-xl p-4 sm:p-5 shadow-2xl shadow-black/50">

              {/* CARD HEADER */}
              <div className="flex items-center justify-between mb-4">

                <p className="font-(family-name:--font-body) text-[10px] font-semibold text-neutral-400 tracking-[0.16em] uppercase">
                  Our Core Services
                </p>

                <span className="text-[9px] text-neutral-500 font-(family-name:--font-body)">
                  LEO-TECH
                </span>

              </div>

              {/* SERVICES */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">

                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors duration-300"
                    >

                      <Icon
                        size={21}
                        strokeWidth={1.5}
                        className="text-white"
                      />

                      <span className="font-(family-name:--font-body) text-[9px] sm:text-[10px] text-neutral-200 font-medium leading-tight">
                        {service.title}
                      </span>

                    </div>
                  );
                })}

              </div>

              {/* CARD FOOTER */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">

                <CheckCircle2 size={14} className="text-neutral-300" />

                <p className="font-(family-name:--font-body) text-[10px] text-neutral-400">
                  Keeping your technology running smoothly.
                </p>

              </div>

            </div>

          </motion.div>

          {/* RELIABLE IT SUPPORT BADGE */}
          {/* RELIABLE IT SUPPORT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 1 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className="absolute -top-5 -right-3 sm:-right-5 z-20"
          >

            <div className="flex items-center gap-3 bg-white text-black px-3 sm:px-4 py-3 rounded-xl shadow-xl shadow-black/30 border border-neutral-200">

              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-black rounded-lg shrink-0">

                <ShieldCheck size={21} className="text-white" />

                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-black rounded-full" />

              </div>

              <div>
                <p className="font-(family-name:--font-heading) font-bold text-xs sm:text-sm leading-tight">
                  Reliable IT Support
                </p>

                <p className="font-(family-name:--font-body) text-[10px] sm:text-xs text-neutral-500 mt-1">
                  Solutions that work.
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* HERO BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/15" />

    </section>
  );
}