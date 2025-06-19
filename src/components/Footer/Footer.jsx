import React from "react";
import Logo from "../../assets/schoolImages/About.jpeg"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-green-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Section 1: Logo and Contact */}
        <div>
          <div className="mb-4">
            <img src={Logo} alt="DPS" className="w-24 h-24 rounded-md shadow-lg" />
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
          <div className="text-sm text-gray-200 space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl mt-1 text-yellow-400" />
              <p>
                Behind V.Mart Janpul Road,<br />
                Motihari, East Champaran
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-500 pt-4">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+919525539607" className="hover:underline">+91 9525539607</a>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-500 pt-4">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:abbassdown6@gmail.com" className="hover:underline">abbassdown6@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Section 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Photo Gallery</a></li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-x-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-threads text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        {/* Section 3: Product Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Section 4: Download */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download</h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.friensys.dawn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="w-40"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400 space-y-2">
        <p>&copy; 2020 sApp. All rights reserved.</p>
        <p>
          Managed by{" "}
          <a
            href="https://friensys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-yellow-400"
          >
            Friensys Info Labs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
