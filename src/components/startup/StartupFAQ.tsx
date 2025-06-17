
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const StartupFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How is this different from hiring a development team?",
      answer: "Hiring a development team typically costs £80k-150k+ annually, plus recruitment time and management overhead. Our model gives you the same quality results for a fraction of the cost, with no long-term commitments or management headaches."
    },
    {
      question: "What if I need changes after my MVP is delivered?",
      answer: "Our project-based maintenance model means you only pay when you need updates. Minor changes start at £99, new features from £499, and major upgrades from £999. No monthly fees or contracts required."
    },
    {
      question: "How do you ensure the quality without breaking my budget?",
      answer: "We use proven frameworks, reusable components, and efficient development processes. Our team has built 100+ startups, so we know exactly what works and what doesn't, eliminating costly trial-and-error."
    },
    {
      question: "Can my MVP scale as my startup grows?",
      answer: "Absolutely. Every MVP we build uses scalable architecture and modern technologies. We plan for growth from day one, so your platform can handle increased users and features as you scale."
    },
    {
      question: "What technologies do you use?",
      answer: "We use React, Node.js, TypeScript, and other modern technologies that ensure your app is fast, reliable, and maintainable. All code is delivered to you, so you're never locked in."
    },
    {
      question: "How involved will I be in the development process?",
      answer: "Very involved, but not overwhelmed. We provide weekly updates, demos, and gather your feedback at key milestones. You focus on your business while we handle the technical execution."
    },
    {
      question: "What if I'm not technical - will I understand what's being built?",
      answer: "Absolutely. We explain everything in business terms, provide regular demos, and ensure you understand exactly what you're getting. No technical jargon, just clear communication."
    },
    {
      question: "Do you help with getting investment?",
      answer: "While we're not investors, we've helped many clients create impressive demos and MVPs that have secured funding. We can provide technical documentation and support materials for investor presentations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about building your startup with Bernof Co.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="mailto:info@bernofco.com"
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Email us at info@bernofco.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupFAQ;
