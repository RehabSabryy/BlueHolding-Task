import { useState } from "react";

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
    <section id="faqs" className="min-h-screen flex flex-col justify-center items-center relative top-32">
      <h4 className="text-5xl font-bold mb-2">FAQs</h4>
      <p className="text-[#8D8D8D] text-2xl">
        Everything You Need to Know to Dominate the Challenge!
      </p>

      <div className="mt-6 w-1/2 text-left cursor-pointer">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="accordion-shadow border border-gray-200 mb-2 rounded-xl"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 font-semibold text-[#363636] hover:text-blue-600 transition-all duration-200"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-4 h-4 font-semibold transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
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
            </button>
            {openIndex === index && (
              <div className="p-5 border-t border-gray-200 text-gray-500">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
