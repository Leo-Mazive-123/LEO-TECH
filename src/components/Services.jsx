"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Monitor,
  Network,
  Settings,
  Printer,
  BriefcaseBusiness,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Computer & Laptop Support",
    description:
      "Keeping your devices running smoothly through reliable diagnostics, troubleshooting, repairs and performance optimisation.",
    features: [
      "Hardware diagnostics",
      "Software troubleshooting",
      "System installation",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Networking & Connectivity",
    description:
      "Reliable network solutions that keep your devices connected and your home or business running without interruptions.",
    features: [
      "Network installation",
      "Wi-Fi configuration",
      "Network troubleshooting",
    ],
  },
  {
    number: "03",
    icon: Settings,
    title: "IT Maintenance & Support",
    description:
      "Proactive technical support and maintenance to keep your technology reliable, secure and performing at its best.",
    features: [
      "Routine maintenance",
      "System updates",
      "Technical assistance",
    ],
  },
  {
    number: "04",
    icon: Printer,
    title: "Printer & Office Equipment",
    description:
      "Practical support for printers and essential office equipment, helping your workplace maintain productivity.",
    features: [
      "Printer installation",
      "Printing troubleshooting",
      "Equipment configuration",
    ],
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    title: "Business IT Solutions",
    description:
      "Technology support and practical IT solutions designed to help small businesses work smarter and operate efficiently.",
    features: [
      "Business IT support",
      "Technology setup",
      "IT infrastructure assistance",
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Cybersecurity & Data Protection",
    description:
      "Helping individuals and businesses protect their systems, devices and important information from digital threats.",
    features: [
      "Security configuration",
      "Data protection guidance",
      "System security checks",
    ],
  },
];

export default function Services() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 pb-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-white/[0.035] blur-[120px] rounded-full" />
        </div>

        <div className="relative w-[93%] max-w-300 mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* HERO CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-white" />
                <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  What We Offer
                </span>
              </div>

              <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-[1.08] tracking-tight">
                Technology Support.
                <span className="block text-neutral-500">
                  Without the Complexity.
                </span>
              </h1>

              <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-7 max-w-2xl mt-8">
                From everyday technical challenges to business technology
                needs, LEO-TECH provides reliable IT support and practical
                solutions that keep you connected and productive.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-all duration-300 group"
                >
                  Discuss Your Needs
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <span className="text-xs text-neutral-500">
                  Practical solutions. Reliable support.
                </span>
              </div>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-75 sm:h-100 lg:h-115 overflow-hidden rounded-lg border border-white/10">

                <Image
                  src="/images/services.jpg"
                  alt="Professional laptop hardware repair and IT diagnostics"
                  fill
                  priority
                  sizes="(max-width: 1024px) 93vw, 45vw"
                  className="object-cover object-center"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-px bg-white" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300">
                      Professional IT Support
                    </span>
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-xl sm:text-2xl font-semibold">
                    Technology, handled with care.
                  </h3>
                </div>

              </div>

              {/* Bottom decorative line */}
              <div className="absolute -bottom-3 right-5 w-1/3 h-px bg-white/40" />

            </motion.div>

          </div>

          {/* AUDIENCE STRIP */}
          <div className="mt-20 border-t border-white/15" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {[
              "Individuals",
              "Small Businesses",
              "Growing Organisations",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-neutral-600 text-xs">
                  0{index + 1}
                </span>
                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
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
                Our Services
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              What We Can Do
              <span className="text-neutral-500"> For You.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-6">
              We provide a range of technology services designed to
              address everyday IT challenges and support the needs of
              modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
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
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-7 mb-7">
                    {service.description}
                  </p>

                  <div className="border-t border-white/10 pt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-xs text-neutral-400"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-neutral-500 shrink-0"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="w-[93%] max-w-300 mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white" />
              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                Why LEO-TECH
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              More Than Just
              <span className="block text-neutral-500">
                Technical Support.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-7 mt-7 max-w-xl">
              Technology should make life and business easier. Our
              approach focuses on understanding your challenges,
              providing practical solutions and delivering dependable
              support.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-sm font-medium text-white mt-9 group"
            >
              Learn More About Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Reliable Support",
                text: "Dependable assistance when technical challenges arise.",
              },
              {
                title: "Practical Solutions",
                text: "Solutions focused on your actual needs and challenges.",
              },
              {
                title: "Customer Focus",
                text: "We take time to understand the people we support.",
              },
              {
                title: "Quality Work",
                text: "A commitment to doing things properly and professionally.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border border-white/10 bg-white/2 rounded-lg p-6"
              >
                <span className="text-xs text-neutral-600">
                  0{index + 1}
                </span>

                <h3 className="font-(family-name:--font-heading) text-lg font-semibold mt-6 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-white/10 bg-[#080808]">
        <div className="w-[93%] max-w-300 mx-auto text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Let's Get Started
          </span>

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Let's Solve Your
            <span className="block text-neutral-500">
              Technology Challenges.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-6 leading-7">
            Tell us what you need help with. Let's find the right
            technology solution for you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-md text-sm font-semibold mt-9 hover:bg-neutral-200 transition-all duration-300 group"
          >
            Get In Touch
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