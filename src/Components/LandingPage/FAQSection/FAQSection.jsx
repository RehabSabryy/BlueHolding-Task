import { useState } from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I join the game?",
      answer:
        "You can join the game by signing up and following the instructions in your dashboard.",
    },
    {
      question: "When will the next level be available?",
      answer:
        "Next levels are released weekly. Keep an eye on your email and the dashboard notifications.",
    },
    {
      question: "How is the leaderboard calculated?",
      answer:
        "The leaderboard is based on your challenge completion time and accuracy compared to others.",
    },
  ];

  return (
    <section
      id="faqs"
      className="min-h-screen flex flex-col justify-center items-center relative top-32"
    >
      <SectionTitle
        sectionH4="FAQs"
        sectionParagraph="Everything You Need to Know to Dominate the Challenge!"
      />
      <div className="mt-6 w-3/4 md:w-1/2 text-left cursor-pointer">
      {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="accordion-shadow border border-gray-200 mb-2 rounded-xl overflow-hidden"
            initial={false}
            animate={{ 
              backgroundColor: openIndex === index ? "#f9fafb" : "#ffffff"
            }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 font-semibold text-[#363636] cursor-pointer hover:text-blue-600 transition-all duration-200"
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-4 h-4 font-semibold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.1 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-5 border-t border-gray-200 text-gray-500">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
