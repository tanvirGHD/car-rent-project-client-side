import React, { useState } from "react";
import faqAnimation from "../../../assets/Animation - 1736444496484.json";
import Lottie from "lottie-react"; // Assuming you're using Lottie React

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
      title: "How old do I have to be to rent a car ?",
      description:
        "For most car rental companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70, you might have to pay an additional fee.",
    },
    {
      title: "Can I book a rental car for someone else ?",
      description:
        "Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.",
    },
    {
      title: "Are all fees included in the rental price?",
      description:
        "The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You'll pay for any ‘extras' when you pick your car up, along with any young driver, additional driver or one-way fees – but we'll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div>
        <h1 className="text-3xl font-bold my-10 text-[#034833] ">Frequently Asked Questions</h1>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
      {/* Animation Section */}
      <div className="w-full md:w-1/2 order-last md:order-first flex justify-center">
        <Lottie
          animationData={faqAnimation}
          className="w-full h-[250px] md:h-[400px]"
        />
      </div>

      {/* FAQ Section */}
      <div className="flex w-full justify-center">
        <div className=" max-w-[550px] cursor-pointer space-y-6">
          {/* mapping each accordion  */}
          {dataArr.map((data, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="flex size-16 select-none items-center justify-center rounded-md bg-[#89b918] text-2xl font-semibold text-white">
                <span>0{idx + 1}</span>
              </div>

              <div className="relative h-[2px] w-10 bg-[#89b918]">
                <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#079268]  bg-[#89b918]"></span>
                <span className="h-1 w-10  bg-[#89b918]"></span>
                <span
                  className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${
                    isOpen === idx
                      ? "border-zinc-700  bg-[#76D7A5] delay-100"
                      : "border-transparent"
                  }`}
                ></span>
              </div>

              {/* main accordion div  */}
              <div className="text-center">
                <div className="relative max-w-[450px] border-t-[12px] border-[#89b918] bg-sky-50 p-3 shadow-md">
                  <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#89b918]"></span>
                  <h1 className="select-none text-lg text-[#034833]">
                    {data.title}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden bg-[#034833] transition-all duration-300 ease-in-out ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-[450px]  bg-[#034833] p-6 text-sm text-white">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
