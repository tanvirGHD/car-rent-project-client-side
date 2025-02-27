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
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10">
      {/* Premium Car Rental Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-10 px-5"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B] mb-5">
            Premium Car Rental Services
          </h2>
          <p className="text-gray-700 dark:text-white text-lg">
            Embark on a journey of luxury and style with our top-notch car rental options. Whether it's a business trip or a leisure escape, we've got the perfect ride for you!
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="py-10 px-5"
      >
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Our Car Rental Services</h2>
          <p className="dark:text-white mt-4">
            Explore our diverse range of vehicles, each tailored to meet your specific travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-[#89b918]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-500">{service.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Customer Count Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-10 px-5"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Our Growing Community</h2>
          <p className="dark:text-white mt-4">
            Over <span className="text-blue-600 dark:text-yellow-400 font-bold">10,000+</span> happy customers have trusted us for their travel needs.
          </p>
        </div>
      </motion.section>

      {/* Ride More Save More Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r to-gray-100 py-10 px-5"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#034833] dark:text-[#F59E0B]">Ride More, Save More</h2>
          <p className="dark:text-white mt-4">
            Get rewarded for longer rides! Enjoy exclusive discounts and perks the more you travel with us.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-700">Save 10%</h3>
              <p className="text-gray-600 mt-2">On rentals for 3-5 days.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-700">Save 20%</h3>
              <p className="text-gray-600 mt-2">On rentals for 6+ days.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;