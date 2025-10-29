import { FaBehance, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] dark:bg-[#1a1a1a] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              About Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F26611]"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Our Company</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Shop Toyota</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Dreamsrentals USA</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Dreamsrentals Worldwide</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Dreamsrental Category</a></li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Vehicles Type
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F26611]"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">All Vehicles</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">SUVs</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Trucks</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Cars</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Crossovers</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Quick links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F26611]"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">My Account</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Champaigns</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Dreamsrental Dealers</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Deals and Incentive</a></li>
              <li><a href="#" className="hover:text-[#F26611] transition-colors duration-300">Financial Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F26611]"></span>
            </h3>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F26611] p-3 rounded">
                <FaPhone className="text-white text-lg" />
              </div>
              <span className="text-gray-400">+ 1 (888) 760 1940</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F26611] p-3 rounded">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <span className="text-gray-400">support@example.com</span>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter You Email Here"
                  className="flex-1 px-4 py-2 bg-white text-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-[#F26611] px-4 py-2 rounded-r hover:bg-[#e05a0a] transition-colors duration-300">
                  <FaPaperPlane className="text-white" />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="bg-[#1877f2] p-2.5 rounded-full hover:scale-110 transition-transform duration-300">
                <FaFacebook className="text-white text-lg" />
              </a>
              <a href="#" className="bg-[#e4405f] p-2.5 rounded-full hover:scale-110 transition-transform duration-300">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="#" className="bg-[#1769ff] p-2.5 rounded-full hover:scale-110 transition-transform duration-300">
                <FaBehance className="text-white text-lg" />
              </a>
              <a href="#" className="bg-[#1da1f2] p-2.5 rounded-full hover:scale-110 transition-transform duration-300">
                <FaTwitter className="text-white text-lg" />
              </a>
              <a href="#" className="bg-[#0077b5] p-2.5 rounded-full hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Dreams Rent. All Rights Reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex gap-3">
              <div className="bg-white px-4 py-2 rounded shadow">
                <span className="text-blue-700 font-bold">PayPal</span>
              </div>
              <div className="bg-white px-4 py-2 rounded shadow">
                <span className="text-blue-700 font-bold">VISA</span>
              </div>
              <div className="bg-white px-4 py-2 rounded shadow flex items-center gap-1">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full -ml-3"></div>
              </div>
              <div className="bg-white px-4 py-2 rounded shadow">
                <span className="text-gray-700 font-bold">Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;