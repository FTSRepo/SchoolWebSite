import React from "react";
import Logo from "../../assets/schoolImages/About.jpeg"
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className=" bg-green-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and Description */}
        <div>
          <div className="mb-4">
            <img src={Logo} alt="DPS" className="w-24 h-24 rounded-md" />
          </div>

          <div className="text-sm leading-6 space-y-2">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-location-crosshairs text-yellow-400 mt-1"></i>
              <span>Behind V.Mart Janpul Road, Motihari, East Champaran</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-square-envelope text-yellow-400 mt-1"></i>
              <span>abbassdown6@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-mobile-retro text-yellow-400 mt-1"></i>
              <span>+91 9525539607</span>
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
