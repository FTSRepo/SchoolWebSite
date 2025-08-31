import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/schoolImages/logo.png";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow bg-white ">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Email */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-full text-xl shadow-md">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Connect With Us
              </h3>
              <a
                href="mailto:shantiharisudhanyachand@gmail.com
"
                className="text-gray-600 text-sm hover:text-blue-700 transition"
              >
                shantiharisudhanyachand@gmail.com
              </a>
            </div>
          </div>

          {/* Logo + Title */}
          <div className="flex items-center gap-3 text-center">
            <img src={Logo} alt="School Logo" className="h-16 w-auto" />
            <div className="text-gray-900">
              <h1 className="text-xl md:text-2xl font-bold">
                Shanti Hari Sudhanya Chand Public School
              </h1>
              <p className="text-sm tracking-wide font-medium text-gray-600">
                ENGLISH MEDIUM & CO-EDUCATION
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-full text-xl shadow-md">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Call For Inquiry
              </h3>
              <a
                href="tel:+919523464653"
                className="text-gray-600 text-sm hover:text-blue-700 transition"
              >
                +91 9523464653
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
      </header>
      <nav className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 relative">
          {/* Hamburger Icon */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Centered nav items */}
          <div
            className={`w-full ${
              menuOpen ? "block" : "hidden"
            } md:flex justify-center mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4 text-white font-bold uppercase text-sm md:text-base">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition">
                  Home
                </Link>
              </li>

              {/* Dropdown */}
              <li>
                <Link
                  to="/about/about-school"
                  className="cursor-pointer hover:text-yellow-300 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/registration"
                  className="hover:text-yellow-300 transition"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/academic"
                  className="hover:text-yellow-300 transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-300 transition"
                >
                  Gallery
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/branches"
                  className="hover:text-yellow-300 transition"
                >
                  Our Branches
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-300 transition"
                >
                  Contact
                </Link>
              </li>

              {/* Login Button */}
              <li className="hidden md:block">
                <Link
                  to="https://school.friensys.com/"
                  target="_blank"
                  className="bg-white text-pink-700 px-4 py-1.5 rounded font-medium hover:bg-gray-100 transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
