import Logo from '../../assets/schoolImages/D5.jpg';
import Background from '../../assets/schoolImages/Backgroundvideo.mp4';
import { Link } from 'react-router-dom';
import images from '../../Common/BindImages/BindImages';

export default function Home() {
  return (
    <div className="homepage-main-content">
      {/*1 HERO SECTION */}
      <section className="relative w-full min-h-[50vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={Background}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[80vh] lg:min-h-screen text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Nurturing Minds, Building Futures
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Empowering students with knowledge, skills, and values for a brighter tomorrow.
          </p>
        </div>
      </section>

      {/* 2 ABOUT SCHOOL SECTION */}
      <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Our School</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={images.school_hero}
                alt="Our School Building"
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
                  to="/About"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                >
                  Read More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Academic Programs Section */}
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
                  src={images.primary_education}
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
                  src={images.secondary_education}
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
                  src={images.school_sports}
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

      {/* 4. Facilities Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Facilities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Facility Card */}
            {[
              {
                title: "Modern Science Labs",
                desc: "Equipped with the latest apparatus for practical learning.",
                img: Logo,
              },
              {
                title: "Extensive Library",
                desc: "A vast collection of books, journals, and digital resources.",
                img: images.school_arts,
              },
              {
                title: "Sports Complex",
                desc: "Spacious grounds for various outdoor and indoor sports.",
                img: Logo,
              },
              {
                title: "Smart Classrooms",
                desc: "Interactive learning spaces with digital boards and projectors.",
                img: images.clubs_societies,
              },
              {
                title: "Transportation",
                desc: "Safe and reliable bus services covering key areas.",
                img: images.library,
              },
              {
                title: "Extra Activity",
                desc: "Wide range of co-curricular activities for overall development.",
                img: Logo,
              },
              {
                title: "Science Lab",
                desc: "Modern infrastructure to support experiential science learning.",
                img: images.computer_lab,
              },
              {
                title: "Computer Lab",
                desc: "Fully equipped with modern computers and internet access.",
                img: Logo,
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

      {/* 5. Photo Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Photo Gallery</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-xl shadow-md">
                <img
                  src={Logo}
                  alt={`School Gallery ${item}`}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            ))}
          </div>

          {/* View Full Gallery Button */}
          <div className="mt-12">
            <a
              href="/Photo"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            What Our Parents Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-gray-50 border rounded-2xl p-6 shadow hover:shadow-md transition duration-300 text-left relative"
              >
                <div className="text-blue-600 text-3xl mb-4">
                  <i className="fas fa-quote-left" />
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. News & Events Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Latest News & Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: Logo,
                date: "May 20, 2025",
                title: "Annual Sports Day 2025 Celebrated with Zeal",
                desc: "Our students showcased exceptional talent and sportsmanship...",
              },
              {
                img: Logo,
                date: "May 10, 2025",
                title: "Science Fair Ignites Young Minds",
                desc: "Innovative projects by students explored various scientific concepts...",
              },
              {
                img: Logo,
                date: "April 25, 2025",
                title: "Parent-Teacher Meet Concludes Successfully",
                desc: "Productive discussions fostering strong home-school partnerships...",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <i className="fas fa-calendar-alt text-blue-600" />
                    {event.date}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Admissions Call to Action (CTA) */}
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
