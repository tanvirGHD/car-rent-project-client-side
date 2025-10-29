
const Banner = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#F26611]/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Orange Stripes - Enhanced */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-70 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-br from-[#F26611] via-orange-500 to-orange-600 transform rotate-12 translate-x-1/4 -translate-y-16 shadow-2xl"></div>
        <div className="absolute top-20 right-0 w-full h-32 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 transform rotate-12 translate-x-1/4 -translate-y-12 shadow-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge - Enhanced */}
            <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-orange-100 dark:border-gray-700">
              <span className="text-3xl animate-bounce">👍</span>
              <span className="font-bold text-sm md:text-base bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                100% Trusted car rental platform in the World
              </span>
            </div>

            {/* Heading - More Dynamic */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                Find Your Best
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-[#F26611] via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                  Dream Car
                </span>
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                for Rental
              </h2>
            </div>

            {/* Description - Better Styling */}
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Experience the ultimate in comfort, performance, and sophistication with our
              <span className="font-semibold text-[#F26611]"> luxury car rentals</span>.
              From sleek sedans and stylish coupes to spacious SUVs and elegant convertibles,
              we offer a range of premium vehicles to suit your preferences and lifestyle.
            </p>

            {/* CTA Button - More Attractive */}
            <div className="flex gap-4 pt-4">
              <button className="group relative inline-flex items-center gap-3 py-4 px-10 text-lg font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#F26611]/50">
                {/* Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#F26611] via-orange-500 to-orange-600"></span>

                {/* Hover Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-[#F26611] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <a href="/availableCar" className="relative flex items-center gap-3 text-white z-10">
                  View All Cars
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                </a>
              </button>
            </div>

            {/* Stats Section - NEW */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-[#F26611] to-orange-600 bg-clip-text text-transparent">5K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-[#F26611] to-orange-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Premium Cars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-[#F26611] to-orange-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Image - More Dynamic */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Floating Discount Badge */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 z-20 animate-bounce">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl transform rotate-6">
                <div className="text-4xl font-black">30%</div>
                <div className="text-sm font-bold">OFF</div>
              </div>
            </div>

            {/* Car Image with Enhanced Effects */}
            <div className="relative w-full">
              <img
                src="/banner-img/cars.png"
                alt="Premium Luxury Car"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(242,102,17,0.25)] transform hover:scale-110 transition-all duration-700 animate-float"
              />

              {/* Glowing Effect Behind Car */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F26611]/30 via-orange-400/30 to-orange-500/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

            {/* Enhanced Shadow */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-transparent via-[#F26611]/40 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Stripe - Enhanced */}
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-tr from-[#F26611] via-orange-500 to-orange-600 transform -rotate-12 -translate-x-1/4 translate-y-12 shadow-2xl opacity-70 pointer-events-none"></div>

      {/* Add Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;