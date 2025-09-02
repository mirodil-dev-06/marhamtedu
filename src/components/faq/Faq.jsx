import React from "react";

// Reusable FAQ Item
const FAQItem = ({ id, question, answer }) => (
  <div className="overflow-hidden rounded-md text-gray-300 bg-[#3f9cfb]">
    <input type="checkbox" id={id} className="peer hidden" />
    <label
      htmlFor={id}
      className="flex w-full cursor-pointer justify-between p-5"
    >
      <h2 className="font-bold">{question}</h2>
      <svg
        className="transition-transform duration-300 peer-checked:rotate-180"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
    <p className="max-h-0 overflow-hidden px-5 text-[#ffffff] transition-all duration-300 peer-checked:max-h-40 peer-checked:pb-4">
      {answer}
    </p>
  </div>
);

const Faq = () => {
  const faqData = [
    {
      id: "q1",
      question: "What is data encryption?",
      answer:
        "Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.",
    },
    {
      id: "q2",
      question: "How can I keep my passwords secure?",
      answer:
        "Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.",
    },
    {
      id: "q3",
      question: "What should I do if I suspect a security breach?",
      answer:
        "Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.",
    },
    {
      id: "q4",
      question: "Why is regular software updating important?",
      answer:
        "Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible.",
    },
  ];

  return (
    <section
      id="faq"
      className="flex min-h-screen items-center justify-center bg-transparent px-4"
    >
      <div className="w-full max-w-2xl space-y-4">
        {/* Title */}
        <div className="mb-12 flex flex-col items-center space-y-4">
          <span className="px-5 py-1 text-sm font-medium text-[#3f9cfb]">
            FAQ
          </span>
          <h1 className="mx-auto text-center text-4xl font-bold text-gray-100">
            Ko‘p so‘raladigan savollar
          </h1>
        </div>

        {/* FAQ Items */}
        {faqData.map((faq) => (
          <FAQItem key={faq.id} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
