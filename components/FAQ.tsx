"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "Pricing depends on project scope, pages, and requirements. Most business websites start from ₹10,000.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes. I handle domain purchase guidance, DNS configuration, SSL setup, hosting deployment, and website launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. Existing websites can be redesigned for better performance, modern design, and improved user experience.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. Website maintenance includes updates, backups, monitoring, and content modifications.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most business websites are completed within 1–3 weeks depending on complexity and content availability.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {active === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}