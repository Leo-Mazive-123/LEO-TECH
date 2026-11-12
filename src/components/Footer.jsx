"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/process" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Computer & Laptop Support",
  "Networking & Connectivity",
  "IT Maintenance & Support",
  "Printer & Office Equipment",
  "Business IT Solutions",
  "Cybersecurity & Data Protection",
];

const getBusinessStatus = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Harare",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday").value;
  const hour = Number(parts.find((part) => part.type === "hour").value);
  const minute = Number(parts.find((part) => part.type === "minute").value);

  const currentTime = hour * 60 + minute;

  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
  const isSaturday = weekday === "Sat";

  return (
    (isWeekday && currentTime >= 480 && currentTime < 1020) ||
    (isSaturday && currentTime >= 480 && currentTime < 780)
  );
};

export default function Footer() {
  const [isBusinessOpen, setIsBusinessOpen] = useState(null);
  const [phoneCopied, setPhoneCopied] = useState(false);

  // COPY PHONE NUMBER
  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("0773 950 814");

      setPhoneCopied(true);

      setTimeout(() => {
        setPhoneCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy phone number:", error);
    }
  };

  // UPDATE BUSINESS STATUS
  useEffect(() => {
    const updateBusinessStatus = () => {
      setIsBusinessOpen(getBusinessStatus());
    };

    updateBusinessStatus();

    const interval = setInterval(updateBusinessStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#080808] text-white border-t border-white/15">

      {/* MAIN FOOTER */}
      <div className="w-[93%] max-w-300 mx-auto pt-16 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/Resized.png"
                alt="LEO-TECH Logo"
                width={100}
                height={50}
                loading="eager"
                className="w-20 md:w-17 h-auto object-contain"
              />
            </Link>

            <p className="text-neutral-400 text-sm leading-7 mt-5 max-w-xs">
              Reliable IT support and technology solutions for
              individuals and businesses. We help keep your
              technology working smoothly.
            </p>

            <p className="text-white text-sm font-semibold mt-5 tracking-wide">
              Dream. Build. Inspire.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-neutral-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Get in Touch
            </h3>

            <p className="text-neutral-400 text-sm leading-7 mb-6">
              Have a technical challenge or need reliable IT support?
              Let's find the right solution.
            </p>

            <div className="space-y-5">

              {/* PHONE */}
              <button
                type="button"
                onClick={copyPhoneNumber}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <Phone
                  size={17}
                  className="text-white shrink-0 group-hover:text-green-400 transition-colors duration-300"
                />

                <span className="text-sm">
                  {phoneCopied ? "Phone number copied!" : "0773 950 814"}
                </span>
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/263773950814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-green-500 transition-colors duration-300 group"
              >
                <MessageCircle
                  size={17}
                  className="text-white shrink-0 group-hover:text-green-500 transition-colors duration-300"
                />

                <span className="text-sm">
                  Chat with us on WhatsApp
                </span>

                <ArrowUpRight
                  size={14}
                  className="ml-auto transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={17} className="text-white shrink-0" />
                <span className="text-sm">Harare, Zimbabwe</span>
              </div>

            </div>
          </div>

        </div>

        {/* BUSINESS HOURS STRIP */}
        <div className="mt-5 pt-4 border-t border-white/10">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* TITLE AND STATUS */}
            <div className="flex items-center gap-4 shrink-0">

              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/3">
                <Clock size={17} className="text-neutral-300" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Business Hours
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-neutral-500">
                    Zimbabwe Time (CAT)
                  </span>

                  {isBusinessOpen !== null && (
                    <>
                      <span className="text-neutral-700">·</span>

                      <span
                        className={`flex items-center gap-1.5 text-xs ${
                          isBusinessOpen
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isBusinessOpen
                              ? "bg-green-400"
                              : "bg-red-400"
                          }`}
                        />

                        {isBusinessOpen ? "Open Now" : "Closed"}
                      </span>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* HOURS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Monday – Friday
                </p>
                <p className="text-sm text-neutral-200">
                  8:00 AM – 5:00 PM
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Saturday
                </p>
                <p className="text-sm text-neutral-200">
                  8:00 AM – 1:00 PM
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  Sunday
                </p>
                <p className="text-sm text-neutral-400">
                  Closed
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/15">
        <div className="w-[93%] max-w-300 mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} LEO-TECH. All rights reserved.
          </p>

          <p className="text-neutral-500 text-xs">
            Dream. Build. Inspire.
          </p>

        </div>
      </div>

    </footer>
  );
}