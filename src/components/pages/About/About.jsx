// import React from "react";
// import Marquee from "react-fast-marquee";
// import { motion } from "framer-motion";
// const About = () => {
//   return (
//     <div>
//       <div className="p-8">
//         {/* Section Header */}
//         <h2 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B] mb-8">
//           About Us
//         </h2>

//         {/* About Us Introduction */}
//         <p className="text-center text-[#57770b] dark:text-white mb-12 max-w-3xl mx-auto">
//           Welcome to our Car Rental service! We are dedicated to providing you
//           with top-quality vehicles at affordable prices, ensuring your journeys
//           are smooth, reliable, and enjoyable. Whether it's a short trip or a
//           long-term rental, we've got you covered!
//         </p>

//         {/* Address */}
//             <div className="text-center mb-10 ">
//               <h3 className="text-2xl font-semibold text-[#034833] dark:text-[#F59E0B]  mb-4">
//                 <img
//                   src="https://img.icons8.com/?size=100&id=KTgnvbyxA9Mz&format=png&color=000000"
//                   alt="Address Icon"
//                   className="inline-block h-12 w-14 mr-2"
//                 />
//                 Our Address
//               </h3>
//               <p className="text-gray-600 dark:text-white">
//                 1234, Rent Avenue, Car City,
//                 <br />
//                 Dhaka, Bangladesh
//               </p>
//               <p className="text-gray-600 dark:text-white mt-2">
//                 <img
//                   src="https://img.icons8.com/fluency/48/new-post.png"
//                   alt="Email Icon"
//                   className="inline-block h-6 w-6 mr-2"
//                 />
//                 Email: info@carrental.com
//                 <br />
//                 <img
//                   src="https://img.icons8.com/fluency/48/phone.png"
//                   alt="Phone Icon"
//                   className="inline-block h-6 w-6 mr-2"
//                 />
//                 Phone: +880123456789
//               </p>
//             </div>

//         {/* Mission, Vision, Commitment Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Mission Card */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
//               Our Mission
//             </h3>
//             <p className="text-gray-600">
//               To provide reliable and affordable car rental services, ensuring a
//               seamless experience for our customers.
//             </p>
//           </div>

//           {/* Vision Card */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
//               Our Vision
//             </h3>
//             <p className="text-gray-600">
//               To become the most trusted car rental company in the region,
//               offering top-notch services with innovative solutions.
//             </p>
//           </div>

//           {/* Commitment Card */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <h3 className="text-2xl font-semibold text-[#89b918] mb-4">
//               Our Commitment
//             </h3>
//             <p className="text-gray-600">
//               We are committed to ensuring customer satisfaction with quality
//               vehicles, transparent pricing, and excellent support.
//             </p>
//           </div>
//         </div>

// {/* Client Images Marquee */}
// <div className="my-12">
//           <h2 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B]  mb-8">Our Clients</h2>
//           <Marquee speed={50} className="space-x-6">
//             <motion.img
//               src="https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48218.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 1"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/young-man-holding-clipboard-with-thumb-up-t-shirt-hat-looking-confident-front-view_176474-91903.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 2"
//               className="h-40  ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/smiling-young-handsome-curly-traveler-man-holding-wallet-airplane-tickets-isolated-pink-wall-with-copy-space_141793-78998.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 3"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/front-view-woman-holding-plane-tickets-passport-giving-thumbs-up_23-2148434369.jpg?t=st=1736221736~exp=1736225336~hmac=299f121fee2c6511336380f1c78cd4181014dd3b5a45989106af63011a5e5019&w=900"
//               alt="Client 4"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/young-handsome-man-doing-gesture_839833-2648.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 5"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/pleased-young-brunette-caucasian-woman-holds-paint-brush-isolated-green-background-with-copy-space_141793-70135.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 5"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//             <motion.img
//               src="https://img.freepik.com/free-photo/young-handsome-traveler-man-holding-air-tickets-smiling-cheerfully-with-happy-face-showing-thumbs-up-standing-blue-background_141793-15130.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
//               alt="Client 5"
//               className="h-40 ml-3 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//             />
//           </Marquee>
//         </div>


//         {/* Map */}
//         <div className="mb-12">
//           <h1 className="text-3xl font-bold text-center text-[#034833] dark:text-[#F59E0B] mb-10"> Google Map Location</h1>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848039695223!2d90.3994527154331!3d23.750885894809506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897b3a5c5d3%3A0x93c4f833b38c32ab!2sDhaka!5e0!3m2!1sen!2sbd!4v1684231821555!5m2!1sen!2sbd"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             className="rounded-lg shadow-lg"
//           ></iframe>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;





import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F26611] to-orange-600 mx-auto mb-6"></div>
          </motion.div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to our Car Rental service! We are dedicated to providing you
            with top-quality vehicles at affordable prices, ensuring your journeys
            are smooth, reliable, and enjoyable. Whether it's a short trip or a
            long-term rental, we've got you covered!
          </motion.p>
        </div>

        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700"
        >
          <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833] rounded-t-3xl -mt-8 -mx-8 mb-6"></div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26611] to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-[#034833] dark:text-[#F26611] mb-4">
              Our Address
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                1234, Rent Avenue, Car City,<br />
                Dhaka, Bangladesh
              </p>

              <div className="flex items-center justify-center gap-2 text-base">
                <svg className="w-5 h-5 text-[#F26611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">info@carrental.com</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-base">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+880123456789</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision, Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#034833] dark:text-[#F26611] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide reliable and affordable car rental services, ensuring a
              seamless experience for our customers.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#034833] dark:text-[#F26611] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the most trusted car rental company in the region,
              offering top-notch services with innovative solutions.
            </p>
          </motion.div>

          {/* Commitment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#F26611] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#034833] dark:text-[#F26611] mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We are committed to ensuring customer satisfaction with quality
              vehicles, transparent pricing, and excellent support.
            </p>
          </motion.div>
        </div>

        {/* Client Images Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
              Our Happy Clients
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F26611] to-orange-600 mx-auto"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Marquee speed={50} gradient={false}>
              <motion.img
                src="https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48218.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 1"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/young-man-holding-clipboard-with-thumb-up-t-shirt-hat-looking-confident-front-view_176474-91903.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 2"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/smiling-young-handsome-curly-traveler-man-holding-wallet-airplane-tickets-isolated-pink-wall-with-copy-space_141793-78998.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 3"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/front-view-woman-holding-plane-tickets-passport-giving-thumbs-up_23-2148434369.jpg?t=st=1736221736~exp=1736225336~hmac=299f121fee2c6511336380f1c78cd4181014dd3b5a45989106af63011a5e5019&w=900"
                alt="Client 4"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/young-handsome-man-doing-gesture_839833-2648.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 5"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/pleased-young-brunette-caucasian-woman-holds-paint-brush-isolated-green-background-with-copy-space_141793-70135.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 6"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://img.freepik.com/free-photo/young-handsome-traveler-man-holding-air-tickets-smiling-cheerfully-with-happy-face-showing-thumbs-up-standing-blue-background_141793-15130.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
                alt="Client 7"
                className="h-48 w-48 object-cover rounded-2xl shadow-lg ml-6"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </Marquee>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
              Find Us Here
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F26611] to-orange-600 mx-auto"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833]"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848039695223!2d90.3994527154331!3d23.750885894809506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897b3a5c5d3%3A0x93c4f833b38c32ab!2sDhaka!5e0!3m2!1sen!2sbd!4v1684231821555!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;