import React from 'react';

const PricingPlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$30/day",
            features: ["✔ 100 KM Free", "✔ Basic Insurance", "✔ 24/7 Support"],
            bgColor: "rgba(96, 165, 250, 0.1)", // Light blue with transparency
            borderColor: "rgba(96, 165, 250, 0.3)", // Light blue border
            hoverBgColor: "rgba(96, 165, 250, 0.2)", // Slightly darker on hover
        },
        {
            name: "Standard Plan",
            price: "$50/day",
            features: ["✔ 200 KM Free", "✔ Full Insurance", "✔ Roadside Assistance"],
            bgColor: "rgba(52, 211, 153, 0.1)", // Light green with transparency
            borderColor: "rgba(52, 211, 153, 0.3)", // Light green border
            hoverBgColor: "rgba(52, 211, 153, 0.2)", // Slightly darker on hover
        },
        {
            name: "Premium Plan",
            price: "$80/day",
            features: ["✔ Unlimited KM", "✔ VIP Support", "✔ Free Fuel Refill"],
            bgColor: "rgba(168, 85, 247, 0.1)", // Light purple with transparency
            borderColor: "rgba(168, 85, 247, 0.3)", // Light purple border
            hoverBgColor: "rgba(168, 85, 247, 0.2)", // Slightly darker on hover
        },
    ];

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold my-10 text-[#034833] dark:text-[#F59E0B]">
                Our Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative p-8 rounded-2xl backdrop-blur-sm border border-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{
                            backgroundColor: plan.bgColor,
                            borderColor: plan.borderColor,
                        }}
                    >
                        {/* Glow Effect */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(circle at 50% 50%, ${plan.borderColor}, transparent)`,
                            }}
                        ></div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                        <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>
                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-700 flex items-center">
                                    <span className="mr-2">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="w-full bg-white bg-opacity-20 text-gray-800 font-semibold py-3 px-6 rounded-lg border border-opacity-20 hover:bg-opacity-40 hover:border-opacity-40 transition-all duration-300"
                        >
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;