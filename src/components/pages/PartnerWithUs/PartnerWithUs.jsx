import { FaArrowRight, FaCar, FaCheck, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const PartnerWithUs = () => {
    const benefits = [
        {
            icon: <FaCar />,
            title: "List Your Car",
            description: "Easily register your vehicle and get it listed on our platform.",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure & Verified",
            description: "We verify all renters and provide insurance coverage for safety.",
            gradient: "from-[#F26611] to-[#e05a0a]",
        },
        {
            icon: <FaDollarSign />,
            title: "Earn Regularly",
            description: "Set your own pricing and earn money whenever your car is rented.",
            gradient: "from-green-500 to-green-600",
        },
    ];

    return (
        <div className="py-16 px-4 bg-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
                        Partner With Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Earn money by renting out your car! Join our platform and turn your vehicle into a profitable asset.
                    </p>
                </div>

                {/* Benefits Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
                        >
                            {/* Icon Circle */}
                            <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${benefit.gradient} text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>

                            {/* Title with Check Icon */}
                            <h3 className="text-2xl font-bold text-[#034833] dark:text-[#F26611] mb-4 flex items-center gap-2">
                                <FaCheck className="text-green-500 text-lg" />
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>

                            {/* Decorative Element */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-[#F26611] to-[#e05a0a] rounded-2xl p-10 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Earning?
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Join thousands of car owners who are already making money with their vehicles. It's easy, secure, and profitable!
                    </p>
                    <button className="group inline-flex items-center gap-3 bg-white text-[#F26611] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Become a Partner
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="text-4xl font-extrabold text-[#F26611] mb-2">5000+</div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Active Partners</p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="text-4xl font-extrabold text-[#F26611] mb-2">$2M+</div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Earned by Partners</p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="text-4xl font-extrabold text-[#F26611] mb-2">98%</div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUs;