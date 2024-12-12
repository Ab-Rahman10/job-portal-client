import logo from "../../assets/small-logo.png";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Logo" className="mx-auto md:mx-0" />
            <p className="text-sm text-gray-400 mt-4 text-center md:text-left">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
              Resources
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
              Community
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Feature
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Microsoft
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-400">
                  Desktop
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
              Download App
            </h3>
            <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
              Download our Apps and get extra 15% Discount on your first
              Order...!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap"
              >
                App Store
              </a>
              <a
                href="#"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 whitespace-nowrap"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-400 text-center">
            Copyright © 2022. JobBox all rights reserved
          </span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:text-blue-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline hover:text-blue-400">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
