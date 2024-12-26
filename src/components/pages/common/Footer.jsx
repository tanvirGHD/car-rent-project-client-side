const Footer = () => {
  return (
    <footer className="footer border-t border-blue-300 text-base-content p-10 mt-auto className='bg-[#e0f7f3]">
      <aside>
        <p className="font-bold text-2xl text-gray-800">
          REntal Car Ltd.
          <br />
          Providing reliable job since 1992
        </p>
        <div className="mt-4 flex space-x-4">
          {/* Social Media Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/twitter--v1.png"
              alt="Twitter"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </aside>
      <nav className="mt-6 md:mt-0">
        <h6 className="footer-title text-gray-700 font-semibold">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="mt-6 md:mt-0">
        <h6 className="footer-title text-gray-700 font-semibold">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="mt-6 md:mt-0">
        <h6 className="footer-title text-gray-700 font-semibold">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
