"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is renewable energy?",
      a: "Renewable energy comes from sources that are naturally replenished such as sunlight, wind, and water.",
    },
    {
      q: "How can I switch to solar?",
      a: "Contact our support team to get a consultation and installation plan customized for your needs.",
    },
    {
      q: "Do you offer maintenance services?",
      a: "Yes! We offer full maintenance packages for solar, wind, and EV infrastructure.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-teal-900 mb-12">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b py-4">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-lg font-medium">{faq.q}</span>
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <p className="mt-3 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
