import React from 'react';

const PricingPlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$30/day",
            features: ["✔ 100 KM Free", "✔ Basic Insurance", "✔ 24/7 Support"],
        },
        {
            name: "Standard Plan",
            price: "$50/day",
            features: ["✔ 200 KM Free", "✔ Full Insurance", "✔ Roadside Assistance"],
        },
        {
            name: "Premium Plan",
            price: "$80/day",
            features: ["✔ Unlimited KM", "✔ VIP Support", "✔ Free Fuel Refill"],
        },
    ];

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-6 w-11/12 mx-auto">
                {plans.map((plan, index) => (
                    <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p className="text-2xl font-bold my-2">{plan.price}</p>
                        <ul className="mt-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;
