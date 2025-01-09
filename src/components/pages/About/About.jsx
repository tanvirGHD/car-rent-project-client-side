import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-[#034833] mb-8">
          About Us
        </h2>

        {/* About Us Introduction */}
        <p className="text-center text-[#57770b] mb-12 max-w-3xl mx-auto">
          Welcome to our Car Rental service! We are dedicated to providing you
          with top-quality vehicles at affordable prices, ensuring your journeys
          are smooth, reliable, and enjoyable. Whether it's a short trip or a
          long-term rental, we've got you covered!
        </p>

        {/* Address and Map */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
              <img
                src="https://img.icons8.com/?size=100&id=KTgnvbyxA9Mz&format=png&color=000000"
                alt="Address Icon"
                className="inline-block h-12 w-14 mr-2"
              />
              Our Address
            </h3>
            <p className="text-gray-600">
              1234, Rent Avenue, Car City,
              <br />
              Dhaka, Bangladesh
            </p>
            <p className="text-gray-600 mt-2">
              <img
                src="https://img.icons8.com/fluency/48/new-post.png"
                alt="Email Icon"
                className="inline-block h-6 w-6 mr-2"
              />
              Email: info@carrental.com
              <br />
              <img
                src="https://img.icons8.com/fluency/48/phone.png"
                alt="Phone Icon"
                className="inline-block h-6 w-6 mr-2"
              />
              Phone: +880123456789
            </p>
          </div>

          {/* Map */}
          <div className="mt-6 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848039695223!2d90.3994527154331!3d23.750885894809506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897b3a5c5d3%3A0x93c4f833b38c32ab!2sDhaka!5e0!3m2!1sen!2sbd!4v1684231821555!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Mission, Vision, Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide reliable and affordable car rental services, ensuring a
              seamless experience for our customers.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the most trusted car rental company in the region,
              offering top-notch services with innovative solutions.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-600">
              We are committed to ensuring customer satisfaction with quality
              vehicles, transparent pricing, and excellent support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
