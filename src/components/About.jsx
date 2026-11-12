"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Network,
  Headset,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We believe technology should work when you need it. We focus on dependable solutions and consistent support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace practical technology and continuously explore better ways to solve everyday technical challenges.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Every individual and business has different needs. We take time to understand those needs and provide suitable solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Quality",
    description:
      "We value attention to detail, professional service and solutions that deliver real value.",
  },
];

const capabilities = [
  "Computer and laptop support",
  "Network setup and connectivity",
  "IT maintenance and troubleshooting",
  "Printer and office equipment support",
  "Business technology solutions",
  "Cybersecurity and data protection",
];

export default function About() {
  return (
    <main className="bg-[#080808] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-80 h-80 bg-white/3.5 blur-[140px] rounded-full" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="w-[93%] max-w-300 mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />

              <span className="font-(family-name:--font-body) text-xs uppercase tracking-[0.2em] text-neutral-300">
                About LEO-TECH
              </span>
            </div>

            <h1 className="font-(family-name:--font-heading) text-[clamp(2.8rem,6vw,5rem)] leading-[1.08] font-bold tracking-[-0.045em] max-w-4xl">
              Technology should work
              <span className="block text-neutral-500 mt-2">
                for everyone.
              </span>
            </h1>

            <p className="font-(family-name:--font-body) text-neutral-400 text-base sm:text-lg leading-8 max-w-2xl mt-8">
              At LEO-TECH, we provide IT support and technology solutions
              that help individuals and businesses overcome technical
              challenges and get more from their technology.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-semibold mt-10 hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              Work With Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-28 border-t border-white/10">

        <div className="w-[93%] max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Who We Are
            </span>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mt-5">
              Making technology
              <span className="block text-neutral-400">
                easier to work with.
              </span>
            </h2>

            <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-8 mt-7">
              LEO-TECH is an IT support and technology solutions
              business based in Harare, Zimbabwe. We focus on helping
              individuals and businesses manage their technology
              through reliable technical support and practical solutions.
            </p>

            <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-8 mt-5">
              From computer troubleshooting and network connectivity
              to IT maintenance and business technology solutions,
              our goal is to make technology simpler, more reliable
              and easier to manage.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Practical technology solutions",
                "Support for individuals and businesses",
                "A focus on reliability and quality",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-white shrink-0"
                  />
                  <span className="text-neutral-300 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-[#111111] border border-white/15 rounded-2xl p-7 sm:p-10">

              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-xs text-neutral-400 tracking-widest">
                  LEO-TECH / OUR APPROACH
                </span>

                <span className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="py-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white flex items-center justify-center">
                  <Monitor size={38} className="text-black" />
                </div>

                <h3 className="font-(family-name:--font-heading) text-2xl font-bold mt-6">
                  Technology With Purpose
                </h3>

                <p className="text-neutral-400 text-sm leading-7 max-w-sm mx-auto mt-3">
                  Helping people and businesses get the best
                  from their technology.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="border border-white/10 bg-white/2.5 rounded-xl p-4">
                  <Network size={21} className="text-white mb-3" />
                  <p className="text-sm font-semibold">Connectivity</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Connected systems
                  </p>
                </div>

                <div className="border border-white/10 bg-white/2.5 rounded-xl p-4">
                  <Headset size={21} className="text-white mb-3" />
                  <p className="text-sm font-semibold">IT Support</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Practical assistance
                  </p>
                </div>

              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex justify-between text-xs text-neutral-500">
                <span>LEO-TECH</span>
                <span>Dream. Build. Inspire.</span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-28 bg-[#101010] border-y border-white/10">

        <div className="w-[93%] max-w-300 mx-auto">

          <div className="max-w-2xl mb-14">
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Our Direction
            </span>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold mt-5">
              What drives us forward.
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-5">
              Our mission and vision guide the way we approach
              technology, service and the people we work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* MISSION */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-white/15 rounded-2xl p-8 sm:p-10 bg-white/2.5 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Target size={23} className="text-black" />
              </div>

              <h3 className="font-(family-name:--font-heading) text-2xl font-bold mt-7">
                Our Mission
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-8 mt-5">
                To provide reliable, accessible and practical IT
                support and technology solutions that help individuals
                and businesses solve technical challenges and work
                more efficiently.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-white/15 rounded-2xl p-8 sm:p-10 bg-white/2.5 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Eye size={23} className="text-black" />
              </div>

              <h3 className="font-(family-name:--font-heading) text-2xl font-bold mt-7">
                Our Vision
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-8 mt-5">
                To become a trusted technology solutions provider,
                helping individuals and businesses embrace technology
                with confidence and build a more connected and
                digitally capable future.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 sm:py-28">

        <div className="w-[93%] max-w-300 mx-auto">

          <div className="max-w-2xl mb-14">
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
              What We Believe In
            </span>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold mt-5">
              The values behind our work.
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-5">
              Good technology solutions start with the right
              approach. These are the principles that guide us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group border border-white/10 rounded-xl p-6 bg-[#101010] hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white transition-colors duration-300">
                    <Icon
                      size={21}
                      className="text-white group-hover:text-black transition-colors duration-300"
                    />
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-lg font-semibold mt-6">
                    {value.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-7 mt-3">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 sm:py-28 bg-[#101010] border-y border-white/10">

        <div className="w-[93%] max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          <div>
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
              What We Do
            </span>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold leading-tight mt-5">
              Technology solutions
              <span className="block text-neutral-400">
                that make a difference.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-8 mt-6">
              We offer a range of IT support and technology services
              designed to help individuals and businesses keep their
              systems running and their technology working effectively.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold mt-8 hover:text-neutral-400 transition-colors group"
            >
              Explore Our Services
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="space-y-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-4 border border-white/10 rounded-xl p-4 sm:p-5 bg-white/2.5 hover:bg-white/5 transition-colors duration-300"
              >
                <CheckCircle2
                  size={19}
                  className="text-white shrink-0"
                />

                <span className="text-neutral-300 text-sm sm:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 sm:py-32">

        <div className="w-[93%] max-w-300 mx-auto text-center">

          <span className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em]">
            Let's Work Together
          </span>

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-6">
            Let's make technology
            <span className="block text-neutral-400 mt-2">
              work for you.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-8 max-w-xl mx-auto mt-7">
            Whether you need technical assistance or technology
            solutions for your business, LEO-TECH is ready to help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-7 py-4 rounded-lg text-sm font-semibold mt-10 hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-300 group"
          >
            Get in Touch
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <p className="text-neutral-500 text-xs mt-10 tracking-widest">
            DREAM. BUILD. INSPIRE.
          </p>

        </div>
      </section>

    </main>
  );
}