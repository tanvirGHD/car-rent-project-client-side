import Lottie from "lottie-react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqAnimation from "../../../assets/Animation - 1736444496484.json";

const Faq = () => {
  const dataArr = [
    {
      title: "What do I need to rent a car?",
      description:
        "To book your car, all you need is a credit or debit card. When you pick the car up, you'll need: " +
        "Your voucher / eVoucher, to show that you've paid for the car. " +
        "The main driver's credit / debit card, with enough available funds for the car's deposit. " +
        "Each driver's full, valid driving licence, which they've held for at least 12 months (often 24). " +
        "Your passport and any other ID the car hire company needs to see.",
    },
    {
      title: "How old do I have to be to rent a car?",
      description:
        "For most car rental companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70, you might have to pay an additional fee.",
    },
    {
      title: "Can I book a rental car for someone else?",
      description:
        "Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.",
    },
    {
      title: "Are all fees included in the rental price?",
      description:
        "The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You'll pay for any 'extras' when you pick your car up, along with any young driver, additional driver or one-way fees – but we'll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="py-16 px-4 bg-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our car rental services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Animation Section */}
          <div className="w-full lg:w-1/2 order-last lg:order-first flex justify-center">
            <Lottie
              animationData={faqAnimation}
              className="w-full max-w-md h-[300px] md:h-[400px]"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {dataArr.map((data, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Number Badge */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] text-white font-bold text-lg shadow-lg flex-shrink-0">
                        {idx + 1}
                      </div>

                      {/* Question Title */}
                      <h3 className="text-lg font-bold text-[#034833] dark:text-[#F26611] pr-4">
                        {data.title}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`text-[#F26611] text-xl transition-transform duration-300 ${isOpen === idx ? 'rotate-180' : ''}`}>
                      <FaChevronDown />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 mt-2">
                        {data.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;