import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/schoolImages/logo.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "#",
      gradient: "from-pink-500 to-rose-600",
      label: "Instagram",
    },
    {
      icon: <FaXTwitter />,
      href: "#",
      gradient: "from-gray-800 to-black",
      label: "Twitter",
    },
    {
      icon: <FaFacebook />,
      href: "#",
      gradient: "from-blue-600 to-blue-800",
      label: "Facebook",
    },
    {
      icon: <FaYoutube />,
      href: "#",
      gradient: "from-red-600 to-red-800",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Aims & Objective", href: "#" },
    { label: "Curriculum", href: "#" },
    { label: "Gallery", href: "/gallery" },
    {
      label: "Download App",
      href: "https://play.google.com/store/apps/details?id=com.friensys.shanti",
      external: true,
    },
  ];

  return (
    <footer className="relative bg-[#0a0f1d] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <span className="text-xl font-bold text-[#0a0f1d]"><img src={logo} alt="School Logo" className="w-12 h-12 rounded-xl" /></span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Shanti Hari Sudhanya Chand
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Public School
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Providing excellence in education within a secular, nurturing
              environment. We blend modern learning with Indian values to
              shape tomorrow's leaders.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`group relative w-11 h-11 rounded-xl bg-gradient-to-br ${social.gradient} 
                    flex items-center justify-center shadow-lg hover:shadow-xl 
                    transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="text-white text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                    px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 
                    transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white 
                      transition-colors duration-200 py-1.5 px-2 rounded-lg 
                      hover:bg-white/5"
                  >
                    <span className="text-yellow-400 group-hover:translate-x-1 
                      transition-transform duration-200">›</span>
                    <span className="text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 
                  flex items-center justify-center group-hover:bg-yellow-400/20 
                  transition-colors duration-200">
                  <FaMapMarkerAlt className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Bel Bag Bangali Colony
                    <br />
                    Bettiah, West Champaran
                    <br />
                    Bihar, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 
                  flex items-center justify-center group-hover:bg-yellow-400/20 
                  transition-colors duration-200">
                  <FaPhoneAlt className="text-yellow-400 text-lg" />
                </div>
                <a
                  href="tel:+919523464653"
                  className="text-sm text-gray-300 hover:text-yellow-400 
                    transition-colors duration-200"
                >
                  +91 95234 64653
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 
                  flex items-center justify-center group-hover:bg-yellow-400/20 
                  transition-colors duration-200">
                  <FaEnvelope className="text-yellow-400 text-lg" />
                </div>
                <a
                  href="mailto:shantiharisudhanyachand@gmail.com"
                  className="text-sm text-gray-300 hover:text-yellow-400 
                    transition-colors duration-200 break-all"
                >
                  shantiharisudhanyachand@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates, announcements, and school news.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                  text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all 
                  text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-amber-500 
                  text-[#0a0f1d] font-semibold rounded-xl hover:from-yellow-300 
                  hover:to-amber-400 transform hover:-translate-y-0.5 transition-all 
                  duration-200 shadow-lg shadow-yellow-500/25 text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Privacy Policy Link */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                to="/privacy-policy"
                className="text-xs text-gray-400 hover:text-yellow-400 
                  transition-colors duration-200 inline-flex items-center gap-1"
              >
                <span>🔒</span> Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-[#070c17]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">
                Shanti Hari Sudhanya Chand Public School
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                Managed by{" "}
                <a
                  href="https://friensys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 font-medium 
                    transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Friensys Info Labs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full 
          bg-gradient-to-br from-yellow-400 to-amber-500 text-[#0a0f1d] 
          shadow-lg shadow-yellow-500/30 flex items-center justify-center 
          hover:shadow-xl hover:scale-105 active:scale-95 transition-all 
          duration-300 z-50 group"
      >
        <FaArrowUp className="text-lg group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;