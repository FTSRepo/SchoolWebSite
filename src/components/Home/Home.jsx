import { useEffect, useState } from "react";
import { GetHomeImagesAPI } from "../../http/server-apis";
import { Link } from "react-router-dom";
import images from "../../Common/BindImages/BindImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";

export default function Home() {
  const [headerImages, setHeaderImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [principalImg, setPrincipalImg] = useState(null);
  const [directorImg, setDirectorImg] = useState(null);
  const [administratorImg, setAdministratorImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [newsEvent, setNewsEvent] = useState([]);
  const [popupImg, setPopupImg] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const schoolId = 149;

  {
    /*FETCHING THE API FOR THE HEADER */
  }

  useEffect(() => {
    {
      /*Header image of tag = "home" */
    }
    GetHomeImagesAPI("home", schoolId)
      .then((res) => {
        const data = res.data?.data || {};
        setHeaderImages(data.headerImages || []);
        setPrincipalImg(data.principalImg || "");
        setDirectorImg(data.directorImg || [] );
        setAdministratorImg(data.administratorImg || "");
      })
      .catch((err) => {
        console.error("Failed to load home images:", err);
      });

    {
      /*Gallery Images (tag = "galary") */
    }

    GetHomeImagesAPI("galary", schoolId)
      .then((res) => {
        const fullGallery = res.data?.data || [];
        const mainGallery = fullGallery.flatMap((item) => item.imageList) || [];
        setGalleryImages(mainGallery);
      })
      .catch((err) => {
        console.error("Failed to load gallery images:", err);
      });

    {
      /* LATEST NEWS AND EVENTS */
    }

    GetHomeImagesAPI("newsandevent", schoolId)
      .then((res) => {
        const fullNews = res.data?.data || [];
        setNewsEvent(fullNews);
        if (fullNews.length > 0) setSelectedTag(fullNews[0].tag);
      })
      .catch((err) => {
        console.error("Failed to load News and event images:", err);
      });
  }, []);

  {
    /*ROTATING THE HEADER IMAGE  */
  }
  useEffect(() => {
    if (headerImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headerImages]);

  {
    /*Removing the html in the latest news and event section */
  }
  const stripHtmlTags = (str) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = str;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[50vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 transition-all duration-1000">
          {headerImages.length > 0 ? (
            <img
              src={headerImages[currentIndex]}
              alt={`Header ${currentIndex}`}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-white text-xl">
              Loading...
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[80vh] lg:min-h-screen text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Nurturing Minds, Building Futures
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Empowering students with knowledge, skills, and values for a
            brighter tomorrow.
          </p>
        </div>
      </section>

      {/* ABOUT SCHOOL SECTION */}
      <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Our School
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={images.about}
                alt="School"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-gray-700 space-y-5">
              <h3 className="text-2xl font-semibold">
                Welcome to Shanti Hari Sudhanya Chand Public School
              </h3>
              <p>
                At Shanti Hari Sudhanya Chand Public School, we are dedicated to
                nurturing young minds through a balanced blend of academics,
                values, and creativity. Since our establishment, the school has
                stood as a center of excellence, fostering intellectual growth,
                curiosity, and strong moral character in every student.
              </p>
              <p>
                Our passionate faculty, modern infrastructure, and
                child-centered curriculum provide an environment where students
                can excel not only academically but also socially, emotionally,
                and spiritually. We believe in personalized learning that
                empowers children to discover their unique strengths and
                talents.
              </p>
              <p>
                Education at Shanti Hari Sudhanya Chand Public School goes
                beyond classrooms — it is about shaping compassionate leaders,
                responsible citizens, and lifelong learners. Through
                co-curricular opportunities, cultural activities, and community
                initiatives, we strive to instill empathy, leadership, and a
                sense of responsibility in every child.
              </p>
              <div>
                <Link
                  to="/about/about-school"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                >
                  Read More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PROGRAM SECTION */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Academic Programs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center text-center">
              <div className="w-full h-48 overflow-hidden rounded-xl mb-5">
                <img
                  src={images.primary}
                  alt="Primary School"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Primary School
              </h3>
              <p className="text-gray-600">
                A foundational learning environment for Grades 1–5, nurturing
                curiosity and early learning skills through play-based and
                interactive curriculum.
              </p>
            </div>

            {/* Middle School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center text-center">
              <div className="w-full h-48 overflow-hidden rounded-xl mb-5">
                <img
                  src={images.middle}
                  alt="Middle School"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Middle School
              </h3>
              <p className="text-gray-600">
                Focused on developing analytical thinking, personal growth, and
                collaborative learning for Grades 6–8, bridging basic knowledge
                to critical understanding.
              </p>
            </div>

            {/* Secondary School */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center text-center">
              <div className="w-full h-48 overflow-hidden rounded-xl mb-5">
                <img
                  src={images.secondary}
                  alt="Secondary School"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Secondary School
              </h3>
              <p className="text-gray-600">
                Equipping students in Grades 9–12 with academic excellence,
                leadership skills, and readiness for competitive exams and
                future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 relative inline-block">
            Photo Gallery
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded"></span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Capturing the spirit of{" "}
            <span className="text-blue-600 font-semibold">
              learning, growth, and celebration
            </span>{" "}
            at Shanti Hari Sudhanya Chand Public School. Explore glimpses of our
            vibrant school life.
          </p>

          {/* Swiper Gallery */}
          {galleryImages.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="pb-14"
            >
              {galleryImages.map((url, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => setPopupImg(url)}
                  >
                    <img
                      src={url}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                      <div className="text-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 mx-auto mb-2 animate-bounce"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553 2.276A1 1 0 0120 13.118v3.764a1 1 0 01-1.447.894L15 16M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        <p className="text-sm font-medium">Click to Expand</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">Loading gallery...</p>
          )}

          {/* Button */}
          <div className="mt-12">
            <Link
              to="/gallery"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-indigo-400/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* POPUP MODAL FOR GALLERY */}
      {popupImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setPopupImg(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={popupImg}
              alt="Enlarged"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setPopupImg(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* 6. Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Parents Say
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover how Shanti Hari Sudhanya Chand Public School has impacted the lives of students
            and families through meaningful education and holistic development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                quote:
                  "Shanti Hari Sudhanya Chand Public School has transformed my child's learning journey. The teachers are incredibly supportive and the environment is truly nurturing.",
                author: "Mrs. Priya Sharma",
                role: "Parent of Class 5 Student",
              },
              {
                quote:
                  "I am amazed by the holistic development focus here. My daughter has excelled not only academically but also in sports and public speaking.",
                author: "Mr. Alok Verma",
                role: "Parent of Class 8 Student",
              },
              {
                quote:
                  "The academic rigor combined with extracurricular activities is perfectly balanced. My son loves going to school every day!",
                author: "Ms. Sunita Devi",
                role: "Parent of Class 2 Student",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 text-left relative"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl">
                    <i className="fas fa-quote-left" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-800">
                    Parent Testimonial
                  </h3>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-blue-800 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL CORE TEAM */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-teal-50 to-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 mb-14 relative"
        >
          Our Leadership Team
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-teal-500 rounded-full transition-all duration-300 hover:w-28"></span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
             {
              name: "Dr Avinash Goldar",
              role: "Founder & Chairman",
              img: images.founderImage,
              quote:
                "Our goal is to foster a love for learning through innovative teaching methods, ensuring students are equipped with skills for a dynamic world.",
            },
            {
              name: "Ratneshwar Kishor Sinha",
              role: "Principal",
              img: principalImg,
              quote:
                "At Shanti Hari Sudhanya Chand Public School, our vision is to nurture every child’s intellect, creativity, and character. We empower students to embrace challenges and grow into responsible global citizens.",
            },
            {
              name: "Anant Kumar Golder",
              role: "Director",
              img: directorImg,
              quote:
                "We envision a joyful learning environment where values are nurtured and excellence is achieved. Our students are shaped into confident individuals with integrity and compassion.",
            },
            {
              name: "Asha Kumari",
              role: "Vice Principal",
              img: administratorImg,
              quote:
                "We aim to inspire curiosity, instill resilience, and cultivate leadership, preparing students to succeed and contribute meaningfully to society.",
            },
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-400"></div>

              {/* Profile Image */}
              <div className="relative mt-8">
                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-teal-400 to-blue-400">
                  <img
                    src={leader.img}
                    alt={leader.role}
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-teal-600 mb-4">
                  {leader.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  “{leader.quote}”
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="p-3 bg-white rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white rounded-full text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* NEWS AND EVENT SECTION */}
      {newsEvent.some(
        (item) => item.tag === selectedTag && item.imageList.length > 0
      ) && (
        <section className="py-20 px-4 md:px-8 bg-slate-300">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Latest News & Events
            </h2>

            {/* Tag Selection Tiles */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {newsEvent.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTag(item.tag)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition duration-300 ${
                    selectedTag === item.tag
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                  }`}
                >
                  {stripHtmlTags(item.tag)}
                </button>
              ))}
            </div>

            {/* Swiper Carousel for Selected Tag */}
            {newsEvent
              .filter(
                (item) => item.tag === selectedTag && item.imageList.length > 0
              )
              .map((section, index) => (
                <Swiper
                  key={index}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  {section.imageList.map((imgUrl, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden">
                        <img
                          src={imgUrl}
                          alt={`Event ${idx + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
          </div>
        </section>
      )}

      {/* ADMISSION CALL SECTION */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 text-white overflow-hidden">
      {/* Decorative animated circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Join the{" "}
          <span className="relative text-yellow-300">
            SHANTI HARI SUDHANYA CHAND PUBLIC SCHOOL
            <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400/60 rounded-md -z-10"></span>
          </span>{" "}
          Family?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Discover an environment where{" "}
          <span className="font-semibold text-yellow-200">
            academic excellence
          </span>{" "}
          meets holistic development. Enroll your child today and unlock their
          full potential.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/Registration"
            className="relative bg-yellow-400 text-indigo-900 font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/50"
          >
            Apply for Admission
            <span className="absolute inset-0 rounded-xl border-2 border-yellow-300 opacity-0 hover:opacity-100 transition"></span>
          </Link>

          <Link
            to="/Contact"
            className="relative bg-white text-blue-700 font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50"
          >
            Schedule a Visit
            <span className="absolute inset-0 rounded-xl border-2 border-blue-300 opacity-0 hover:opacity-100 transition"></span>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
