import Holiday from "../Holiday/Holiday";
import image from "../../../src/Common/BindImages/BindImages";
import { Link } from "react-router-dom";

const AcademicContent = () => {
  const primarySubjects = [
    "English (Reading, Writing, Grammar)",
    "Hindi (Vyakaran, Sahitya)",
    "Mathematics (Basic Arithmetic, Geometry)",
    "Environmental Studies (EVS)",
    "Computer Science Fundamentals",
    "Art & Craft, Music, Dance",
    "Physical Education & Sports",
    "Moral Science & Value Education",
  ];

  const middleSubjects = [
    "English (Literature & Language)",
    "Hindi (Advanced)",
    "Mathematics (Algebra, Geometry, Data Handling)",
    "Science (Physics, Chemistry, Biology - Integrated)",
    "Social Science (History, Geography, Civics)",
    "Computer Applications",
    "Sanskrit / Regional Language",
    "Life Skills & Personality Development",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[600px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${image.academicBackground})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-cyan-800/60 to-teal-900/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide animate-fadeIn">
            Unleashing Limitless Possibilities for Young Minds
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light opacity-90 animate-slideUp max-w-2xl mx-auto">
            Inspiring creativity, curiosity, and excellence in every child's
            journey.
          </p>
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl animate-pulse">
            Explore Now
          </button>
        </div>
      </section>

      {/* Curriculum Overview */}
<section id="curriculum" className="py-16 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
      Our Comprehensive Curriculum
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-light">
      Designed to inspire academic excellence, critical thinking, and holistic development across all grade levels.
    </p>

    <div className="grid gap-6 md:grid-cols-3">
      {/* Primary Grades */}
      <div className="bg-teal-50 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
        <h4 className="text-xl font-semibold text-teal-900 mb-3">Primary Grades</h4>
        <p className="text-gray-700 text-sm mb-4">
          Building strong foundations in literacy, numeracy, and environmental awareness through interactive methods.
        </p>
        <h5 className="font-medium text-sm text-gray-800">Key Subjects:</h5>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {primarySubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-xs font-medium">
            #ActivityBased #CognitiveGrowth
          </span>
          {/* <a
            href="/primary-curriculum"
            className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors duration-200"
          >
            Learn More
          </a> */}
        </div>
      </div>

      {/* Middle Grades */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
        <h4 className="text-xl font-semibold text-blue-900 mb-3">Middle Grades</h4>
        <p className="text-gray-700 text-sm mb-4">
          Fostering deeper knowledge, independent learning, and scientific inquiry for growing minds.
        </p>
        <h5 className="font-medium text-sm text-gray-800">Core Subjects:</h5>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {middleSubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            #AnalyticalSkills #ProjectBased
          </span>
          {/* <a
            href="/middle-curriculum"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
          >
            Learn More
          </a> */}
        </div>
      </div>

      {/* Senior Grades */}
      <div className="bg-red-50 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
        <h4 className="text-xl font-semibold text-red-900 mb-3">Senior Grades</h4>
        <p className="text-gray-700 text-sm mb-4">
          Specialized streams for board exams and career pathways, emphasizing advanced reasoning.
        </p>
        <h5 className="font-medium text-sm text-gray-800">Streams & Subjects:</h5>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {middleSubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
            #CareerFocused #ExamReadiness
          </span>
          {/* <a
            href="/senior-curriculum"
            className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Co-curricular Activities */}
      <section className="py-20 px-6 bg-pink-100 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Beyond Books: Nurturing Talents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img
                src={image.academicSports}
                alt="Sports"
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sports & Athletics</h3>
              <p>
                Football, Basketball, Cricket, Yoga – promoting fitness & team
                spirit.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img
                src={image.creativePerformingArts}
                alt="Arts"
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Creative & Performing Arts
              </h3>
              <p>
                Music, Dance, Drama, Fine Arts, Debate – fostering creativity.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img
                src={image.clubOutreach}
                alt="Clubs"
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Clubs & Outreach</h3>
              <p>
                Science Club, Eco Club, Community Service – igniting passions &
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Modern Facilities for Enhanced Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src={image.academicScienceLab}
                alt="Science Labs"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">
                Advanced Science Labs
              </h3>
              <p>Hands-on experiments in Physics, Chemistry & Biology.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src={image.academicLibrary}
                alt="Library"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">
                Interactive Digital Library
              </h3>
              <p>Books, e-resources & reading spaces.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src={image.academicComputerLab}
                alt="Computer Lab"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">
                Smart Computer Labs
              </h3>
              <p>Modern software, coding platforms & high-speed internet.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src={image.academicPlayground}
                alt="Sports Complex"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">
                Spacious Sports Complex
              </h3>
              <p>Outdoor grounds & indoor multipurpose courts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday / Academic Calendar */}
      <Holiday />

      {/* Call to Action */}
      <section id="admissions" className="py-20 px-6 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our School Community!</h2>
        <p className="text-lg mb-8">
          Admissions open for the upcoming academic year. Discover how we
          nurture potential.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/registration"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Apply for Admission
          </Link>
          <a
            href="#"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50"
          >
            Download Prospectus
          </a>
        </div>
      </section>
    </div>
  );
};

export default AcademicContent;
