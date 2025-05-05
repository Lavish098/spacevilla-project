import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react"; // Import icons
import { assets } from "../../assets/assets";

const FAQData = [
  {
    question: "What is the Spacevilla B2B about?",
    answer:
      "Spacevilla B2B is our business-to-business service, offering tailored solutions for real estate companies.",
  },
  {
    question:
      "What is the due diligence processing timeline on the Spacevilla App?",
    answer:
      "Due diligence processing typically takes 5-7 business days, but may vary depending on the complexity of the case.",
  },
  {
    question: "How can I refer my friends?",
    answer:
      "You can refer your friends by sharing your unique referral code, found in your account settings.",
  },
  {
    question: "How do I get started using the Spacevilla App?",
    answer:
      "You can start by downloading the app on the Google Play Store or iOS App Store and creating an account. Once you are logged into the app, you will be able to see the services we offer and choose whichever you are interested in using.",
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <img src={assets.icon} alt="" className="w-5 h-5" />
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              ~ Curious about what we really do?
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="space-y-4">
          {FAQData.map((item, index) => (
            <div
              key={index}
              className="  overflow-hidden border-b border-gray-700"
            >
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <button onClick={() => toggleQuestion(index)}>
                  {openQuestion === index ? (
                    <Minus className="h-6 w-6 text-gray-600" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, css: true }}
                    className="px-6 pb-6 bg-gray-50"
                  >
                    <p className="text-gray-700">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center flex justify-center items-center">
          <button className="bg-green-500 flex justify-center items-center hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200">
            <img
              src={assets.phone}
              alt=""
              className="mr-3"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
