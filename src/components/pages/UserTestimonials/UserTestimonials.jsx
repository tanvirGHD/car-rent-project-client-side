import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const UserTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      rating: 5,
      review: "Amazing service and great cars. Highly recommend!",
    },
    {
      name: "Jane Smith",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      rating: 4,
      review: "Fantastic experience! The staff was very helpful and friendly.",
    },
    {
      name: "Sam Wilson",
      image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      rating: 5,
      review: "Excellent service, quick responses, and quality products!",
    },
    {
      name: "Emily Davis",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      rating: 5,
      review: "Truly exceptional! Will definitely be coming back again.",
    },
    {
      name: "Michael Brown",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      rating: 4,
      review: "Great experience and excellent customer support.",
    },
    {
      name: "Sarah Johnson",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      rating: 5,
      review: "Best service I've ever received. Highly recommended!",
    },
  ];

  // Automatically change the testimonial every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back to 0 when reaching the last set of 3
        if (prevIndex + 3 >= testimonials.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16 px-4 bg-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
            User Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-[#F26611] ring-offset-2 dark:ring-offset-gray-800 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#F26611] to-[#e05a0a] rounded-full p-2 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-bold text-xl text-[#F26611] mb-2">
                  {testimonial.name}
                </h3>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                        }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Quote Icon */}
                <div className="mt-4 text-[#F26611] opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                ? "bg-[#F26611] scale-125 shadow-lg"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span className="sr-only">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;