import { FaCar, FaCheck, FaGasPump, FaHeadset, FaRoad, FaShieldAlt, FaStar } from 'react-icons/fa';

const PricingPlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$30",
            period: "day",
            description: "Perfect for short trips",
            features: [
                { icon: <FaRoad />, text: "100 KM Free" },
                { icon: <FaShieldAlt />, text: "Basic Insurance" },
                { icon: <FaHeadset />, text: "24/7 Support" },
            ],
            badge: null,
            gradient: "from-blue-500 to-blue-600",
            iconColor: "text-blue-500",
        },
        {
            name: "Standard Plan",
            price: "$50",
            period: "day",
            description: "Most popular choice",
            features: [
                { icon: <FaRoad />, text: "200 KM Free" },
                { icon: <FaShieldAlt />, text: "Full Insurance" },
                { icon: <FaCar />, text: "Roadside Assistance" },
            ],
            badge: "Popular",
            gradient: "from-[#F26611] to-[#e05a0a]",
            iconColor: "text-[#F26611]",
        },
        {
            name: "Premium Plan",
            price: "$80",
            period: "day",
            description: "Ultimate luxury experience",
            features: [
                { icon: <FaStar />, text: "Unlimited KM" },
                { icon: <FaHeadset />, text: "VIP Support" },
                { icon: <FaGasPump />, text: "Free Fuel Refill" },
            ],
            badge: "Best Value",
            gradient: "from-purple-500 to-purple-600",
            iconColor: "text-purple-500",
        },
    ];

    return (
        <div className="py-16 px-4 bg-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
                        Our Pricing Plans
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect plan that suits your travel needs and budget
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${plan.badge ? 'transform md:scale-105 ring-2 ring-[#F26611]' : 'hover:scale-105'
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className={`inline-block bg-gradient-to-r ${plan.gradient} text-white text-sm font-bold py-2 px-6 rounded-full shadow-lg`}>
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="text-center mb-6 mt-4">
                                <h3 className="text-2xl font-bold text-[#034833] dark:text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-8">
                                <div className="flex items-end justify-center gap-1">
                                    <span className={`text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400 text-lg mb-2">
                                        /{plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${plan.gradient} text-white flex-shrink-0 shadow-md`}>
                                            <FaCheck className="text-sm" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={plan.iconColor}>{feature.icon}</span>
                                            <span className="font-medium">{feature.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full bg-gradient-to-r ${plan.gradient} text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                            >
                                Choose Plan
                            </button>

                            {/* Decorative Element */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;