import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">About Us</h3>
          <p className="text-sm text-gray-200 leading-6">
            The purpose of school is to provide the highest standard of
            education under secular atmosphere to children of all communities
            and all religions. We strive hard to inculcate the best of Indian
            culture and tradition among our students.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="text-white bg-pink-700 p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white bg-blue-500 p-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white bg-red-600 p-3 rounded-full hover:bg-red-700 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-white bg-blue-600 p-3 rounded-full hover:bg-red-700 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="/" className="hover:text-yellow-400">
                › Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Aims & Objective
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Curriculum
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-400">
                › Gallery
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.friensys.dawn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                › Download App
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                › Admission Enquiry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Admission Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Fee Structure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Laboratory
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                › Computer Lab
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
          <div className="text-sm text-gray-200 space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl mt-1 text-yellow-400" />
              <p>
                Bel Bag Bangali Colony <br />
               Bettiah West Champaran
                <br />
                 Bihar

              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-400 pt-4">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9523464653</span>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-400 pt-4">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:shantiharisudhanyachand@gmail.com
"
                className="hover:underline"
              >
                shantiharisudhanyachand@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-400 pt-4">
              <a href="mailto:abbasdawn6@gmail.com" className="hover:underline">
                Privacy Policy
              </a>
              <a href="mailto:abbasdawn6@gmail.com" className="hover:underline">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-300 mt-12 border-t border-gray-600 pt-6">
        <p>
          © {new Date().getFullYear()} Dawn Public School. All rights reserved.
        </p>
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
