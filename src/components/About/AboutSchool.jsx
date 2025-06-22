import React, { Component } from 'react';
import images from '../../Common/BindImages/BindImages';

export class AboutSchool extends Component {
  render() {
    return (
      <div className="font-sans">
        {/* Hero Section */}
        <header
          className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
          style={{ backgroundImage: `url(${images.backgroundBanner})` }}
        >
          <div className="bg-black bg-opacity-60 p-6 rounded">
            <h1 className="text-4xl font-bold mb-2">Welcome to Dawn Public School: Where Futures Take Flight</h1>
            <p className="text-lg">Nurturing Minds, Inspiring Excellence, Building Tomorrow's Leaders.</p>
          </div>
        </header>

        {/* Philosophy Section */}
        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Our Journey of Excellence
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold text-blue-600">Dawn Public School</span>, we believe in shaping more than just students;
              we shape responsible citizens, innovative thinkers, and compassionate individuals. Established in <strong>[Year]</strong>,
              our institution has been a beacon of learning, dedicated to providing a holistic educational experience that goes beyond textbooks.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our philosophy is rooted in creating a stimulating and supportive environment where every child feels valued, understood,
              and empowered to discover their unique talents and potential.
            </p>
          </div>
        </section>


        {/* Mission, Vision, Values */}
        <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-base sm:text-lg">
              These core values drive everything we do — shaping minds, building character, and preparing leaders for tomorrow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Mission */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-6 mx-auto">
                  <i className="fas fa-bullseye text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  To cultivate intellectual curiosity, foster critical thinking, and instill strong ethical values — enabling students to achieve academic distinction and personal growth.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                  <i className="fas fa-lightbulb text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  To be a pioneering educational institution, known for its innovative pedagogy, vibrant community, and graduates who lead with purpose and global impact.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 mx-auto">
                  <i className="fas fa-handshake text-yellow-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Our Values</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Facilities</h2>

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
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Dawn Public School</h2>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img src={images.dynamic} alt="Dynamic Learning" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Learning Environment</h3>
                  <p>
                    At our school, learning goes beyond textbooks. Our classrooms are vibrant centers of exploration where students engage in interactive lessons, group discussions, and hands-on activities. Equipped with smart boards, digital tools, and flexible seating, each space is designed to foster creativity and critical thinking. Guided by passionate and experienced educators, we cultivate an atmosphere that encourages curiosity, collaboration, and a lifelong love for learning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <img src={images.artFacilities} alt="Facilities" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
                  <p>
                    Our school is equipped with world-class infrastructure designed to foster learning, creativity, and growth. From modern science and computer laboratories that encourage hands-on exploration, to a vast and well-stocked library that inspires a love for reading — every corner of our campus supports student development. Our expansive sports grounds, indoor activity centers, and dedicated spaces for visual and performing arts empower students to discover and pursue their passions beyond the classroom.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img src={images.coCurricular} alt="Co-curricular" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Holistic Development & Co-curricular Excellence</h3>
                  <p>
                    We believe education is complete only when it nurtures both the mind and the spirit. Our school offers a vibrant array of co-curricular activities — including sports, visual and performing arts, music, dance, and student-led clubs — that promote personal growth and creative expression. These opportunities help students discover their talents, build confidence, cultivate teamwork, and develop essential leadership and life skills, preparing them to thrive in every sphere of life.
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
