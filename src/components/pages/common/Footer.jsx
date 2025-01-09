const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row border-t border-blue-300 p-10 mt-auto bg-[#034833] text-white space-y-6 md:space-y-0 md:space-x-10">
      <aside className="md:w-1/3">
        <p className="font-bold text-xl text-[#89b918] flex items-center">
          <img
            src="https://img.icons8.com/?size=100&id=qzKNWF9sbXPV&format=png&color=000000"
            className="h-20 w-20 mr-4"
            alt="Rental Car Logo"
          />
          Rental Car Ltd.
          <br />
          Providing reliable service since 1992
        </p>
        <div className="mt-4 flex space-x-4">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/twitter--v1.png"
              alt="Twitter"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </aside>
      <nav className="md:w-1/3">
        <h6 className="footer-title font-semibold text-[#89b918]">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="md:w-1/3">
        <h6 className="footer-title font-semibold text-[#89b918]">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="md:w-1/3">
        <h6 className="footer-title font-semibold text-[#89b918]">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
