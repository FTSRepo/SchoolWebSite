import { useEffect, useState } from "react";
import { GetHomeImagesAPI } from "../../http/server-apis";
import { Link } from 'react-router-dom';
import images from '../../Common/BindImages/BindImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


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

  const schoolId = 60;

  {/*FETCHING THE API FOR THE HEADER */ }

  useEffect(() => {
    {/*Header image of tag = "home" */ }
    GetHomeImagesAPI("home", schoolId)
      .then((res) => {
        const data = res.data?.data || {};
        setHeaderImages(data.headerImages || []);
        setPrincipalImg(data.principalImg || "");
        setDirectorImg(data.directorImg || "");
        setAdministratorImg(data.administratorImg || "");

      })
      .catch((err) => {
        console.error("Failed to load home images:", err);
      });

    {/*Gallery Images (tag = "galary") */ }

    GetHomeImagesAPI("galary", schoolId)
      .then((res) => {
        const fullGallery = res.data?.data || [];
        const mainGallery = fullGallery.flatMap(item => item.imageList) || [];
        setGalleryImages(mainGallery);
      })
      .catch((err) => {
        console.error("Failed to load gallery images:", err);
      });

    {/* LATEST NEWS AND EVENTS */ }

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

  {/*ROTATING THE HEADER IMAGE  */ }
  useEffect(() => {
    if (headerImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headerImages]);

  {/*Removing the html in the latest news and event section */}
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
            Empowering students with knowledge, skills, and values for a brighter tomorrow.
          </p>
        </div>
      </section>

      {/* ABOUT SCHOOL SECTION */}
      <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Our School</h2>
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
                Welcome to DAWN PUBLIC SCHOOL
              </h3>
              <p>
                At DAWN PUBLIC SCHOOL, we are committed to providing a holistic and enriching educational
                experience. Established in 2000, our school has been a beacon of learning, fostering
                intellectual curiosity, creativity, and strong moral values in every student.
              </p>
              <p>
                Our dedicated faculty, state-of-the-art facilities, and innovative curriculum create
                an environment where every child can thrive academically, socially, and emotionally.
                We emphasize personalized learning and encourage students to explore their passions.
              </p>
              <p>
                We believe that education is not just about academics but also about developing empathy,
                leadership, and civic responsibility. Through extracurricular activities and community
                initiatives, we aim to shape socially aware and confident individuals.
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
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Primary School</h3>
              <p className="text-gray-600">
                A foundational learning environment for Grades 1–5, nurturing curiosity and early learning skills through play-based and interactive curriculum.
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
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Middle School</h3>
              <p className="text-gray-600">
                Focused on developing analytical thinking, personal growth, and collaborative learning for Grades 6–8, bridging basic knowledge to critical understanding.
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
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Secondary School</h3>
              <p className="text-gray-600">
                Equipping students in Grades 9–12 with academic excellence, leadership skills, and readiness for competitive exams and future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-10">Photo Gallery</h2>

          {galleryImages.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="pb-10"
            >
              {galleryImages.map((url, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setPopupImg(url)}
                  >
                    <img
                      src={url}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
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
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">Loading gallery...</p>
          )}
          <div className="mt-12">
            <Link
              to="/gallery"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              View Full Gallery
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
            Discover how DAWN PUBLIC SCHOOL has impacted the lives of students and families through meaningful education and holistic development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                quote:
                  "DAWN PUBLIC SCHOOL has transformed my child's learning journey. The teachers are incredibly supportive and the environment is truly nurturing.",
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
                  <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL CORE TEAM */}
      <section className="py-16 px-6 bg-slate-200">
        <div className="max-w-7xl mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-10">Our Core Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Principal */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform">
              <img
                src={principalImg}
                alt="Principal"
                className="w-full h-[300px] object-cover rounded mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Md Abbass Alam</h3>
              <p className="text-sm font-medium text-orange-700 mb-2">Principal</p>
              <p className="text-sm mb-4">
                “At Dawn Public School, we are committed to fostering an environment
                where every child blossoms into their fullest potential. Join us on
                this journey of discovery and growth.”
              </p>
            </div>

            {/* Card 2 - Accountant */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform">
              <img
                src={directorImg}
                alt="Director"
                className="w-full h-[300px] object-cover rounded mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mrs Farah Khan</h3>
              <p className="text-sm font-medium text-orange-700 mb-2">Director</p>
              <p className="text-sm mb-4">
                “Transparency and trust are at the heart of our financial operations.
                We ensure every resource is used to enrich our students’ experience.”
              </p>
            </div>

            {/* Card 3 - Manager */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform">
              <img
                src={administratorImg}
                alt="Administrator"
                className="w-full h-[300px] object-cover rounded mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mr Ravi Verma</h3>
              <p className="text-sm font-medium text-orange-700 mb-2">Administrator</p>
              <p className="text-sm mb-4">
                “From operations to facilities, we strive to create a safe, efficient,
                and nurturing learning environment for every student and staff
                member.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS AND EVENT SECTION */}
      {newsEvent.some(item => item.tag === selectedTag && item.imageList.length > 0) && (
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
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition duration-300 ${selectedTag === item.tag
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
                    }`}
                >
                  {stripHtmlTags(item.tag)}
                </button>
              ))}
            </div>

            {/* Swiper Carousel for Selected Tag */}
            {newsEvent
              .filter(item => item.tag === selectedTag && item.imageList.length > 0)
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
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Join the DAWN PUBLIC SCHOOL Family?
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            Discover an environment where academic excellence meets holistic development.
            Enroll your child today and unlock their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/Registration"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
            >
              Apply for Admission
            </a>
            <a
              href="/Contact"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-200"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
