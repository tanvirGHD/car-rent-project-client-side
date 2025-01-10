import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className="p-8">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B] mb-8">
          About Us
        </h2>

        {/* About Us Introduction */}
        <p className="text-center text-[#57770b] dark:text-white mb-12 max-w-3xl mx-auto">
          Welcome to our Car Rental service! We are dedicated to providing you
          with top-quality vehicles at affordable prices, ensuring your journeys
          are smooth, reliable, and enjoyable. Whether it's a short trip or a
          long-term rental, we've got you covered!
        </p>

        {/* Address */}
            <div className="text-center mb-10 ">
              <h3 className="text-2xl font-semibold text-[#034833] dark:text-[#F59E0B]  mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=KTgnvbyxA9Mz&format=png&color=000000"
                  alt="Address Icon"
                  className="inline-block h-12 w-14 mr-2"
                />
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-white">
                1234, Rent Avenue, Car City,
                <br />
                Dhaka, Bangladesh
              </p>
              <p className="text-gray-600 dark:text-white mt-2">
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

{/* Client Images Marquee */}
<div className="my-12">
          <h2 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B]  mb-8">Our Clients</h2>
          <Marquee speed={50} className="space-x-6">
            <motion.img
              src="https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48218.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 1"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/young-man-holding-clipboard-with-thumb-up-t-shirt-hat-looking-confident-front-view_176474-91903.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 2"
              className="h-40  ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/smiling-young-handsome-curly-traveler-man-holding-wallet-airplane-tickets-isolated-pink-wall-with-copy-space_141793-78998.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 3"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/front-view-woman-holding-plane-tickets-passport-giving-thumbs-up_23-2148434369.jpg?t=st=1736221736~exp=1736225336~hmac=299f121fee2c6511336380f1c78cd4181014dd3b5a45989106af63011a5e5019&w=900"
              alt="Client 4"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/young-handsome-man-doing-gesture_839833-2648.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 5"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/pleased-young-brunette-caucasian-woman-holds-paint-brush-isolated-green-background-with-copy-space_141793-70135.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 5"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://img.freepik.com/free-photo/young-handsome-traveler-man-holding-air-tickets-smiling-cheerfully-with-happy-face-showing-thumbs-up-standing-blue-background_141793-15130.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
              alt="Client 5"
              className="h-40 ml-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
          </Marquee>
        </div>


        {/* Map */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B] mb-10"> Google Map Location</h1>
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
    </div>
  );
};

export default About;
