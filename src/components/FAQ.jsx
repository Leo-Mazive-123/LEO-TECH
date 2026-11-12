"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does LEO-TECH offer?",
    answer:
      "We provide computer and laptop support, networking and connectivity, IT maintenance, printer and office equipment support, cybersecurity, and business IT solutions.",
  },
  {
    question: "Do you provide support to both individuals and businesses?",
    answer:
      "Yes. We support individuals, small businesses, and organisations with reliable technology solutions based on their needs.",
  },
  {
    question: "Do you offer on-site IT support?",
    answer:
      "Yes. On-site support can be arranged depending on your location and the nature of the technical issue.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We are based in Harare, Zimbabwe. Contact us to discuss support availability in your area.",
  },
  {
    question: "Do you provide regular IT maintenance?",
    answer:
      "Yes. We can discuss ongoing IT maintenance and support arrangements to help keep your computers, networks, and other equipment running smoothly.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the service required and the complexity of the work. Contact us with details of your needs so we can discuss a suitable quotation.",
  },
  {
    question: "How can I request IT support?",
    answer:
      "You can reach us through our contact page or WhatsApp. Tell us about the issue or service you need, and our team will get back to you.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative bg-[#080808] py-24 sm:py-28 overflow-hidden">
      <div className="w-[93%] max-w-300 mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="font-(family-name:--font-body) text-neutral-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Got Questions?
          </span>

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-5">
            Frequently Asked Questions
          </h2>

          <p className="font-(family-name:--font-body) text-neutral-400 text-sm sm:text-base leading-7 mt-6">
            Find answers to common questions about our IT support and
            technology solutions.
          </p>
        </motion.div>

        {/* FAQ ACCORDION */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`border rounded-xl transition-colors duration-300 ${
                  isOpen
                    ? "border-white/30 bg-white/5"
                    : "border-white/10 bg-white/2 hover:border-white/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 p-5 sm:p-6 text-left"
                >
                  <span className="font-(family-name:--font-body) text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>

                  <span className="w-8 h-8 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-(family-name:--font-body) text-neutral-400 text-sm leading-7 px-5 sm:px-6 pb-6 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="font-(family-name:--font-body) text-neutral-400 text-sm mb-5">
            Still have questions? We're here to help.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
