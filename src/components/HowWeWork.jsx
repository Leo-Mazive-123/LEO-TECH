"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  MessageSquare,
  Search,
  Lightbulb,
  Wrench,
  Headset,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand",
    description:
      "We start by listening. We take time to understand your needs, challenges and what you want to achieve.",
    detail: "Understanding your needs",
  },
  {
    number: "02",
    icon: Search,
    title: "Assess",
    description:
      "We examine the issue, identify possible causes and evaluate the best way to address the challenge.",
    detail: "Identifying the problem",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Recommend",
    description:
      "We explain the available options and recommend a practical solution that suits your requirements.",
    detail: "Finding the right solution",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Implement",
    description:
      "Once the approach is agreed upon, we carry out the necessary work with attention to quality and detail.",
    detail: "Putting solutions into action",
  },
  {
    number: "05",
    icon: Headset,
    title: "Support",
    description:
      "Our relationship does not end with the solution. We provide guidance and assistance where needed.",
    detail: "Keeping you supported",
  },
];

const expectations = [
  {
    title: "Clear Communication",
    description:
      "We explain technical issues and solutions in a way that is easy to understand.",
  },
  {
    title: "Practical Solutions",
    description:
      "We focus on solutions that address your actual needs rather than unnecessary complexity.",
  },
  {
    title: "Professional Service",
    description:
      "We approach every task with care, attention to detail and a commitment to quality.",
  },
  {
    title: "Ongoing Support",
    description:
      "We value long-term relationships and helping clients keep their technology running smoothly.",
  },
];

export default function HowWeWork() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-40 pb-18">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-white/[0.035] blur-[120px] rounded-full" />
        </div>

        <div className="relative w-[93%] max-w-300 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-white" />

              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                How We Work
              </span>
            </div>

            <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
              A Clear Process.
              <span className="block text-neutral-500">
                Reliable Results.
              </span>
            </h1>

            <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-7 max-w-2xl mt-8">
              We believe technology support should be straightforward.
              Our approach focuses on understanding your needs,
              identifying the right solutions and delivering reliable
              technical support every step of the way.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-md text-sm font-semibold mt-9 hover:bg-neutral-200 transition-all duration-300 group"
            >
              Let's Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          <div className="mt-20 border-t border-white/15" />

          <div className="flex flex-wrap justify-between gap-6 pt-8">
            <span className="text-xs text-neutral-500">
              A thoughtful approach to every challenge.
            </span>

            <span className="text-xs text-neutral-500">
              Dream. Build. Inspire.
            </span>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-[#080808] border-y border-white/10">

        <div className="w-[93%] max-w-300 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white" />

              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                Our Process
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              From Challenge
              <span className="text-neutral-500"> To Solution.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-6">
              Every successful solution starts with understanding the
              problem. Here is how we approach every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative border border-white/10 bg-white/2 p-7 sm:p-8 rounded-lg hover:bg-white/4.5 hover:border-white/25 transition-all duration-500"
                >

                  <div className="flex items-center justify-between mb-10">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/15 rounded-md bg-white/4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <span className="text-xs text-neutral-600 tracking-widest">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-xl font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-500 mb-5">
                    {step.detail}
                  </p>

                  <p className="text-sm text-neutral-400 leading-7">
                    {step.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500" />

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24">

        <div className="w-[93%] max-w-300 mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white" />

              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                The LEO-TECH Approach
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Technology Support
              <span className="block text-neutral-500">
                Built Around You.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-7 max-w-xl">
              We understand that every client has different needs.
              Whether you need help with a personal device or technology
              support for your business, we aim to make the process
              simple, transparent and effective.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-sm font-medium text-white mt-9 group"
            >
              Explore Our Services
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="space-y-4">

            {expectations.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 border border-white/10 bg-white/2 p-6 rounded-lg"
              >
                <CheckCircle2
                  size={20}
                  className="text-neutral-400 shrink-0 mt-1"
                />

                <div>
                  <h3 className="font-(family-name:--font-heading) text-base font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-white/10 bg-[#080808]">

        <div className="w-[93%] max-w-300 mx-auto text-center">

          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Start With A Conversation
          </span>

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Have a Technical
            <span className="block text-neutral-500">
              Challenge?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-6 leading-7">
            Tell us what you are experiencing. We will work with you
            to understand your needs and find a practical way forward.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-md text-sm font-semibold mt-9 hover:bg-neutral-200 transition-all duration-300 group"
          >
            Contact LEO-TECH
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}