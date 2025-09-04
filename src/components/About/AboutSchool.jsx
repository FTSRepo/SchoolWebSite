import React, { Component } from "react";
import images from "../../Common/BindImages/BindImages";
import { motion } from "framer-motion";

export class AboutSchool extends Component {
  render() {
    return (
      <div className="font-sans">
        {/* Hero Section */}
        <header className="relative h-[60vh] bg-gradient-to-r from-indigo-800 via-blue-600 to-indigo-900 flex items-center justify-center">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl">
            {/* Card 1 */}
            <div className="bg-white/95 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-indigo-900 mb-3">
                Welcome
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Shanti Hari Sudhanya Chand Public School, we empower students
                to soar to new heights through holistic education and
                innovation.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-indigo-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
              <p className="leading-relaxed">
                Fostering intellectual growth, inspiring excellence, and shaping
                compassionate leaders for a brighter future.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-blue-100 text-indigo-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-3">Join Us</h2>
              <p className="leading-relaxed">
                Become part of a vibrant community dedicated to nurturing talent
                and building tomorrow's innovators.
              </p>
            </div>
          </div>
        </header>

        {/* Philosophy Section */}
        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Our Journey of Excellence
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-600">
                Shanti Hari Sudhanya Chand Public School
              </span>
              , we believe in shaping more than just students; we shape
              responsible citizens, innovative thinkers, and compassionate
              individuals. Established in <strong>[Year]</strong>, our
              institution has been a beacon of learning, dedicated to providing
              a holistic educational experience that goes beyond textbooks.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our philosophy is rooted in creating a stimulating and supportive
              environment where every child feels valued, understood, and
              empowered to discover their unique talents and potential.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-base sm:text-lg">
              These core values drive everything we do — shaping minds, building
              character, and preparing leaders for tomorrow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Mission */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-6 mx-auto">
                  <i className="fas fa-bullseye text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  To cultivate intellectual curiosity, foster critical thinking,
                  and instill strong ethical values — enabling students to
                  achieve academic distinction and personal growth.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                  <i className="fas fa-lightbulb text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  To be a pioneering educational institution, known for its
                  innovative pedagogy, vibrant community, and graduates who lead
                  with purpose and global impact.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 mx-auto">
                  <i className="fas fa-handshake text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  Our Values
                </h3>
                <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside text-left max-w-xs mx-auto space-y-1">
                  <li>Excellence in Academics</li>
                  <li>Integrity & Respect</li>
                  <li>Innovation & Creativity</li>
                  <li>Community & Collaboration</li>
                  <li>Resilience & Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our Facilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Facility Card */}
              {[
                {
                  title: "Science Exhibition",
                  desc: "Equipped with the latest apparatus for practical learning.",
                  img: images.scienceExhibition,
                },
                {
                  title: "Extensive Library",
                  desc: "A vast collection of books, journals, and digital resources.",
                  img: images.library,
                },
                {
                  title: "Sports Complex",
                  desc: "Spacious grounds for various outdoor and indoor sports.",
                  img: images.sports,
                },
                {
                  title: "Smart Classrooms",
                  desc: "Interactive learning spaces with digital boards and projectors.",
                  img: images.smartClassroom,
                },
                {
                  title: "Transportation",
                  desc: "Safe and reliable bus services covering key areas.",
                  img: images.transport,
                },
                {
                  title: "Extra Activity",
                  desc: "Wide range of co-curricular activities for overall development.",
                  img: images.extraActivity,
                },
                {
                  title: "Science Lab",
                  desc: "Modern infrastructure to support experiential science learning.",
                  img: images.scienceLab,
                },
                {
                  title: "Computer Lab",
                  desc: "Fully equipped with modern computers and internet access.",
                  img: images.computerLab,
                },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center flex flex-col items-center"
                >
                  <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
                    <img
                      src={facility.img}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-100 to-blue-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12 relative">
      Why Choose Shanti Hari Sudhanya Chand Public School
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-24 h-1 bg-indigo-600 rounded-full"></span>
    </h2>
    <div className="space-y-12">
      {/* Section 1 - Dynamic Learning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={images.dynamic}
            alt="Dynamic Learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-indigo900 mb-3">Dynamic Learning Environment</h3>
          <p className="text-gray-600 leading-relaxed">
            Our classrooms are vibrant hubs of innovation, where interactive lessons, group discussions, and hands-on activities spark curiosity. Equipped with smart boards and digital tools, we foster an environment that encourages critical thinking, collaboration, and a lifelong passion for learning, guided by dedicated educators.
          </p>
        </div>
      </div>

      {/* Section 2 - State-of-the-Art Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="p-4 md:order-last">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-3">State-of-the-Art Facilities</h3>
          <p className="text-gray-600 leading-relaxed">
            Our campus boasts modern science and computer labs, a well-stocked library, and expansive sports grounds. Dedicated spaces for visual and performing arts inspire creativity, while our world-class infrastructure supports holistic growth, empowering students to explore and excel in their passions.
          </p>
        </div>
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={images.artFacilities}
            alt="Facilities"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 - Holistic Development */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={images.coCurricular}
            alt="Co-curricular"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Holistic Development & Co-curricular Excellence</h3>
          <p className="text-gray-600 leading-relaxed">
            We nurture both mind and spirit through a diverse range of co-curricular activities, including sports, arts, music, and student-led clubs. These programs build confidence, teamwork, and leadership skills, preparing students to thrive in all aspects of life.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  }
}

export default AboutSchool;
