// import { motion } from "framer-motion";

// const Services = () => {
//   const services = [
//     {
//       img: "https://i.ibb.co/mBcQYGF/16.jpg",
//       title: "Luxury Sedan",
//       description:
//         "Experience premium comfort with our luxury sedans, perfect for business or leisure trips.",
//       price: "$50/day",
//     },
//     {
//       img: "https://i.ibb.co/8D7wTh3/14.jpg",
//       title: "Family SUV",
//       description: "Spacious and reliable SUVs designed for family outings and long trips.",
//       price: "$70/day",
//     },
//     {
//       img: "https://i.ibb.co/cF6TSWs/11.jpg",
//       title: "Convertible Cars",
//       description: "Stylish convertibles for an open-road driving experience.",
//       price: "$90/day",
//     },
//     {
//       img: "https://i.ibb.co/hFbbTvp/4.jpg",
//       title: "Compact Hatchback",
//       description: "Affordable and fuel-efficient hatchbacks ideal for city rides.",
//       price: "$30/day",
//     },
//     {
//       img: "https://i.ibb.co/dDrxSr4/7.jpg",
//       title: "Executive Van",
//       description: "Spacious vans equipped for group travels or corporate needs.",
//       price: "$100/day",
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Delay between each child animation
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="py-10">
//       {/* Premium Car Rental Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="py-10 px-5"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B] mb-5">
//             Premium Car Rental Services
//           </h2>
//           <p className="text-gray-700 dark:text-white text-lg">
//             Embark on a journey of luxury and style with our top-notch car rental options. Whether it's a business trip or a leisure escape, we've got the perfect ride for you!
//           </p>
//         </div>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: true }}
//         className="py-10 px-5"
//       >
//         <div className="max-w-6xl mx-auto text-center mb-10">
//           <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Our Car Rental Services</h2>
//           <p className="dark:text-white mt-4">
//             Explore our diverse range of vehicles, each tailored to meet your specific travel needs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
//             >
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-2xl font-semibold text-[#89b918]">{service.title}</h3>
//                 <p className="text-gray-600 mt-2">{service.description}</p>
//                 <div className="mt-4 flex justify-between items-center">
//                   <span className="text-lg font-bold text-gray-500">{service.price}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Customer Count Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="py-10 px-5"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Our Growing Community</h2>
//           <p className="dark:text-white mt-4">
//             Over <span className="text-blue-600 dark:text-yellow-400 font-bold">10,000+</span> happy customers have trusted us for their travel needs.
//           </p>
//         </div>
//       </motion.section>

//       {/* Ride More Save More Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-r to-gray-100 py-10 px-5"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Ride More, Save More</h2>
//           <p className="dark:text-white mt-4">
//             Get rewarded for longer rides! Enjoy exclusive discounts and perks the more you travel with us.
//           </p>
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-5 rounded-lg shadow-lg"
//             >
//               <h3 className="text-2xl font-bold text-blue-700">Save 10%</h3>
//               <p className="text-gray-600 mt-2">On rentals for 3-5 days.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-5 rounded-lg shadow-lg"
//             >
//               <h3 className="text-2xl font-bold text-blue-700">Save 20%</h3>
//               <p className="text-gray-600 mt-2">On rentals for 6+ days.</p>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Services;



import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      img: "https://i.ibb.co/mBcQYGF/16.jpg",
      title: "Luxury Sedan",
      description:
        "Experience premium comfort with our luxury sedans, perfect for business or leisure trips.",
      price: "$50/day",
    },
    {
      img: "https://i.ibb.co/8D7wTh3/14.jpg",
      title: "Family SUV",
      description: "Spacious and reliable SUVs designed for family outings and long trips.",
      price: "$70/day",
    },
    {
      img: "https://i.ibb.co/cF6TSWs/11.jpg",
      title: "Convertible Cars",
      description: "Stylish convertibles for an open-road driving experience.",
      price: "$90/day",
    },
    {
      img: "https://i.ibb.co/hFbbTvp/4.jpg",
      title: "Compact Hatchback",
      description: "Affordable and fuel-efficient hatchbacks ideal for city rides.",
      price: "$30/day",
    },
    {
      img: "https://i.ibb.co/dDrxSr4/7.jpg",
      title: "Executive Van",
      description: "Spacious vans equipped for group travels or corporate needs.",
      price: "$100/day",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-7xl">

        {/* Premium Car Rental Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
            Premium Car Rental Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F26611] to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Embark on a journey of luxury and style with our top-notch car rental options. Whether it's a business trip or a leisure escape, we've got the perfect ride for you!
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
              Our Car Rental Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F26611] to-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Explore our diverse range of vehicles, each tailored to meet your specific travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F26611] to-orange-600 text-white px-4 py-2 rounded-full shadow-lg font-bold">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#034833] dark:text-[#F26611] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Book Now Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-[#034833] to-[#018d63] hover:from-[#018d63] hover:to-[#034833] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Book Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Customer Count Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl shadow-2xl p-12 text-center border-2 border-blue-200 dark:border-blue-700">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
              Our Growing Community
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Over <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-yellow-400 dark:to-orange-400">10,000+</span> happy customers have trusted us for their travel needs.
            </p>
          </div>
        </motion.section>

        {/* Ride More Save More Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Decorative Header Bar */}
            <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833]"></div>

            <div className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26611] to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-4xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
                Ride More, Save More
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Get rewarded for longer rides! Enjoy exclusive discounts and perks the more you travel with us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-extrabold text-white">10%</span>
                  </div>
                  <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-3">
                    Save 10%
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    On rentals for 3-5 days.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F26611] to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-extrabold text-white">20%</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#F26611] dark:text-orange-400 mb-3">
                    Save 20%
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    On rentals for 6+ days.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;