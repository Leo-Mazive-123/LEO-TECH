"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Send,
  Clock,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team.",
    value: "0773 950 814",
    href: "tel:+263773950814",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send us a message anytime.",
    value: "Chat With Us",
    href: "https://wa.me/263773950814",
  },
  {
    icon: MapPin,
    title: "Our Location",
    description: "Serving individuals and businesses.",
    value: "Harare, Zimbabwe",
    href: null,
  },
];

const benefits = [
  {
    icon: Headphones,
    title: "Personalised Assistance",
    description:
      "We take time to understand your specific technology needs.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Solutions",
    description:
      "We focus on finding solutions that address your actual challenges.",
  },
  {
    icon: Clock,
    title: "Clear Communication",
    description:
      "We keep communication straightforward throughout the process.",
  },
];

// BUSINESS HOURS STATUS - ZIMBABWE TIME
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

  const isOpen =
    (isWeekday && currentTime >= 480 && currentTime < 1020) ||
    (isSaturday && currentTime >= 480 && currentTime < 780);

  return isOpen;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isBusinessOpen, setIsBusinessOpen] = useState(null);

  // AUTOMATICALLY UPDATE BUSINESS STATUS
  useEffect(() => {
    const updateBusinessStatus = () => {
      setIsBusinessOpen(getBusinessStatus());
    };

    updateBusinessStatus();

    const interval = setInterval(updateBusinessStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  // AUTOMATICALLY HIDE SUCCESS MESSAGE AFTER 5 SECONDS
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setError("Please complete all fields before submitting.");
      return;
    }

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjyynqad", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: "New LEO-TECH Website Enquiry",
        }),
      });

      if (response.ok) {
        setSuccess(
          "Your enquiry has been sent successfully. We will get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError(
        "Unable to send your enquiry. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-18">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-white/[0.035] blur-[120px] rounded-full" />
        </div>

        <div className="relative w-[93%] max-w-300 mx-auto">

          {/* HERO CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE - TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-white" />

                <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Get In Touch
                </span>
              </div>

              <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
                Let's Talk
                <span className="block text-neutral-500">
                  Technology.
                </span>
              </h1>

              <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-7 max-w-2xl mt-8">
                Have a technical challenge or need reliable IT support?
                Get in touch with LEO-TECH. We would be happy to understand
                your needs and help you find the right solution.
              </p>
            </motion.div>

            {/* RIGHT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full min-w-0"
            >
              <div className="relative h-70 sm:h-90 lg:h-105 overflow-hidden rounded-lg border border-white/10">

                <Image
                  src="/images/contact.jpg"
                  alt="LEO-TECH customer support and IT assistance"
                  fill
                  priority
                  sizes="(max-width: 1024px) 93vw, 45vw"
                  className="object-cover object-center"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-white" />

                    <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/70">
                      Here To Help
                    </span>
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-xl sm:text-2xl font-semibold">
                    Let's Find The Right Solution.
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                    Reliable support starts with a conversation.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

          {/* HERO BOTTOM INFORMATION */}
          <div className="mt-14 sm:mt-16 border-t border-white/15" />

          <div className="flex flex-wrap justify-between gap-6 pt-7">
            <span className="text-xs text-neutral-500">
              We are here to help you move forward.
            </span>

            <span className="text-xs text-neutral-500">
              Harare, Zimbabwe
            </span>
          </div>

        </div>
      </section>

      {/* CONTACT INFORMATION & FORM */}
      <section className="py-20 bg-[#080808] border-y border-white/10">

        <div className="w-[93%] max-w-300 mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          {/* LEFT SIDE */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white" />

              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                Contact Information
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-semibold leading-tight">
              We'd Love To
              <span className="block text-neutral-500">
                Hear From You.
              </span>
            </h2>

            <p className="text-neutral-400 text-sm leading-7 mt-6 max-w-md">
              Whether you need assistance with your computer, network
              or business technology, reach out to us through any of
              the channels below.
            </p>

            <div className="mt-12 space-y-7">

              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-white/15 rounded-md bg-white/4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs text-neutral-500 mb-2">
                        {item.description}
                      </p>

                      <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );

                return (
                  <div key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}

            </div>

            {/* BUSINESS HOURS */}
            <div className="mt-12 border border-white/10 bg-white/2 rounded-lg p-6">

              <div className="flex items-center justify-between gap-4 mb-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-md bg-white/5">
                    <Clock size={19} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Business Hours
                    </h3>

                    <p className="text-xs text-neutral-500 mt-1">
                      Zimbabwe Time (CAT)
                    </p>
                  </div>
                </div>

                {isBusinessOpen !== null && (
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border ${
                      isBusinessOpen
                        ? "text-green-400 bg-green-400/10 border-green-400/20"
                        : "text-red-400 bg-red-400/10 border-red-400/20"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isBusinessOpen
                          ? "bg-green-400 animate-pulse"
                          : "bg-red-400"
                      }`}
                    />

                    {isBusinessOpen ? "Open Now" : "Closed"}
                  </span>
                )}

              </div>

              <div className="space-y-4">

                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 1:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-neutral-400">
                      {item.day}
                    </span>

                    <span
                      className={`font-medium text-right ${
                        item.hours === "Closed"
                          ? "text-neutral-500"
                          : "text-white"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-neutral-500 leading-5">
                  For enquiries outside business hours, you can still
                  leave us a message and we will respond during our
                  operating hours.
                </p>
              </div>

            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs text-neutral-500 mb-4">
                Prefer a direct conversation?
              </p>

              <a
                href="https://wa.me/263773950814"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-all duration-300"
              >
                <MessageCircle size={17} />
                Chat On WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-white/2 rounded-lg p-6 sm:p-9"
          >

            <div className="mb-8">
              <h2 className="font-(family-name:--font-heading) text-2xl sm:text-3xl font-semibold">
                Send Us An Enquiry
              </h2>

              <p className="text-sm text-neutral-500 mt-3 leading-6">
                Tell us a little about what you need help with.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-neutral-300 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-white/15 rounded-md px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/50 transition-colors"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-neutral-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-black border border-white/15 rounded-md px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/50 transition-colors"
                  required
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-neutral-300 mb-2"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-black border border-white/15 rounded-md px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/50 transition-colors"
                  required
                />
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm text-neutral-300 mb-2"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/15 rounded-md px-4 py-3.5 text-sm text-white outline-none focus:border-white/50 transition-colors"
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Computer & Laptop Support">
                    Computer & Laptop Support
                  </option>

                  <option value="Networking & Connectivity">
                    Networking & Connectivity
                  </option>

                  <option value="IT Maintenance & Support">
                    IT Maintenance & Support
                  </option>

                  <option value="Printer & Office Equipment">
                    Printer & Office Equipment
                  </option>

                  <option value="Business IT Solutions">
                    Business IT Solutions
                  </option>

                  <option value="Cybersecurity & Data Protection">
                    Cybersecurity & Data Protection
                  </option>

                  <option value="Other Enquiry">
                    Other Enquiry
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-neutral-300 mb-2"
                >
                  How Can We Help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about what you need..."
                  className="w-full bg-black border border-white/15 rounded-md px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/50 transition-colors resize-none"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-sm text-green-400">
                  {success}
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}

                {!isSubmitting && (
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-xs text-neutral-600 text-center leading-5">
                Your enquiry will be sent directly to our team. We will get back to you soon.
              </p>

            </form>

          </motion.div>

        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="py-24">

        <div className="w-[93%] max-w-300 mx-auto">

          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white" />

              <span className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                The LEO-TECH Experience
              </span>
            </div>

            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold">
              Support That Starts
              <span className="block text-neutral-500">
                With Understanding.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="border border-white/10 bg-white/2 rounded-lg p-7 hover:border-white/25 transition-all duration-300"
                >

                  <div className="w-12 h-12 flex items-center justify-center border border-white/15 rounded-md bg-white/4 mb-8">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-(family-name:--font-heading) text-lg font-semibold mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-7">
                    {benefit.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-white/10 bg-[#080808]">

        <div className="w-[93%] max-w-300 mx-auto text-center">

          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Your Next Step Starts Here
          </span>

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Let's Make Technology
            <span className="block text-neutral-500">
              Work Better For You.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-6 leading-7">
            Whatever your technology needs may be, we are ready to
            listen, understand and help you move forward.
          </p>

          <a
            href="https://wa.me/263773950814"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-md text-sm font-semibold mt-9 hover:bg-neutral-200 transition-all duration-300 group"
          >
            <MessageCircle size={17} />
            Chat With LEO-TECH

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}