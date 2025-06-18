import { Link } from "react-router-dom";
import Logo from "../../assets/schoolImages/logo.png"

const Header = () => {
  return (
    <header className="shadow md:sticky md:top-0 md:z-50">
      {/* Top Bar */}
      <div className="bg-pink-700 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 text-sm md:text-base">

          {/* Left: School Info */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl">&#x1F3EB;</span>
            <span className="font-bold uppercase tracking-wide text-lg md:text-xl">
              Dawn Public School
            </span>
          </div>

          {/* Right: Contact Info + Buttons */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-3 md:mt-0">

            <div className="flex items-center space-x-2">
              <span className="text-xl">&#x2709;</span>
              <span className="text-sm md:text-base">abbasdawn6@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xl">&#x260E;</span>
              <span className="text-sm md:text-base">+91 9525539607</span>
            </div>

            <button className="bg-white text-pink-700 px-4 py-1.5 rounded font-medium hover:bg-gray-100 transition">
              Login
            </button>

            <Link
              to="/Registration"
              className="bg-yellow-400 text-black px-4 py-1.5 rounded font-medium hover:bg-yellow-300 transition text-center"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="mb-3 md:mb-0 flex items-center">
            <img
              src={Logo}
              alt="DPS Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm md:text-base font-semibold text-gray-700">
            <li>
              <Link to="/" className="hover:text-pink-700 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-700 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/academic" className="hover:text-pink-700 transition duration-200">
                Academic
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-pink-700 transition duration-200">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-700 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/branches" className="hover:text-pink-700 transition duration-200">
                Our Branches
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};

export default Header;
