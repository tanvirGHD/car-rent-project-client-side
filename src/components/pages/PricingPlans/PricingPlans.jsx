import React from 'react';

const PricingPlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$30/day",
            features: ["✔ 100 KM Free", "✔ Basic Insurance", "✔ 24/7 Support"],
            bgColor: "from-blue-100 to-blue-200",
            hoverBgColor: "from-blue-200 to-blue-300",
        },
        {
            name: "Standard Plan",
            price: "$50/day",
            features: ["✔ 200 KM Free", "✔ Full Insurance", "✔ Roadside Assistance"],
            bgColor: "from-green-100 to-green-200",
            hoverBgColor: "from-green-200 to-green-300",
        },
        {
            name: "Premium Plan",
            price: "$80/day",
            features: ["✔ Unlimited KM", "✔ VIP Support", "✔ Free Fuel Refill"],
            bgColor: "from-purple-100 to-purple-200",
            hoverBgColor: "from-purple-200 to-purple-300",
        },
    ];

    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-b ${plan.bgColor} border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    >
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
                            className={`w-full bg-gradient-to-r ${plan.hoverBgColor} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300`}
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