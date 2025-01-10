import React, { useEffect, useState } from "react";

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

  // Automatically change the testimonial every 2 seconds (faster speed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Increased speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [testimonials.length]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] my-10">User Testimonial</h2>
      {/* Testimonial grid showing only 3 testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md transition-opacity duration-1000 ease-in-out opacity-100"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <div className="font-semibold text-[#89b918] text-lg">{testimonial.name}</div>
              <div className="flex mb-2">
                {/* Rating (Stars) */}
                <span className="text-yellow-500">
                  {"⭐".repeat(testimonial.rating)}
                </span>
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        {testimonials.map((_, index) => (
          <a
            key={index}
            href={`#item${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${currentIndex === index ? "btn-primary bg-[#034833]" : ""}`}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;
