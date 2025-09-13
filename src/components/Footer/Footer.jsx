import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div className="text-white max-w-xs">
          {/* Heading */}
          <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide border-b border-yellow-400 inline-block pb-2">
            About Us
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-200 leading-6">
            The purpose of our school is to provide the highest standard of
            education under a secular atmosphere to children of all communities
            and religions. We strive to instill the best of Indian culture and
            traditions among our students.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-pink-700 hover:opacity-80 transition"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-black hover:opacity-80 transition"
            >
              <FaXTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 hover:opacity-80 transition"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-red-700 hover:opacity-80 transition"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide border-b border-yellow-400 inline-block pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Aims & Objective
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Curriculum
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Gallery
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.friensys.shanti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Download App
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide border-b border-yellow-400 inline-block pb-2">
            Useful Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <a
                href="/contact"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Admission Enquiry
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Admission Details
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Fee Structure
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Laboratory
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <span className="text-yellow-400">›</span> Computer Lab
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide border-b border-yellow-400 inline-block pb-2">
            Contact Us
          </h3>

          <div className="text-sm text-gray-200 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-yellow-400 mt-1" />
              <p className="leading-relaxed">
                Bel Bag Bangali Colony <br />
                Bettiah, West Champaran <br />
                Bihar, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
              <FaPhoneAlt className="text-lg text-yellow-400" />
              <span className="hover:text-yellow-300 transition">
                +91 95234 64653
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
              <FaEnvelope className="text-lg text-yellow-400" />
              <a
                href="mailto:shantiharisudhanyachand@gmail.com"
                className="hover:text-yellow-300 transition"
              >
                shantiharisudhanyachand@gmail.com
              </a>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
              <Link
                to="/privacy-policy"
                className="hover:text-yellow-300 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Shanti Hari Sudhanya Chand Public School
          </span>
          . All Rights Reserved.
        </p>
        <p>
          Managed by{" "}
          <a
            href="https://friensys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition underline underline-offset-4"
          >
            Friensys Info Labs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
