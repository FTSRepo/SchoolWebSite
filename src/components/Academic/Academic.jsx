import images from "../../assets/schoolImages/D1.jpg"
// import Holiday from '../Holiday.tsx';
import image from '../../../src/Common/BindImages/BindImages';

const AcademicContent = () => {
  const primarySubjects = [
    'English (Reading, Writing, Grammar)',
    'Hindi (Vyakaran, Sahitya)',
    'Mathematics (Basic Arithmetic, Geometry)',
    'Environmental Studies (EVS)',
    'Computer Science Fundamentals',
    'Art & Craft, Music, Dance',
    'Physical Education & Sports',
    'Moral Science & Value Education'
  ];

  const middleSubjects = [
    'English (Literature & Language)',
    'Hindi (Advanced)',
    'Mathematics (Algebra, Geometry, Data Handling)',
    'Science (Physics, Chemistry, Biology - Integrated)',
    'Social Science (History, Geography, Civics)',
    'Computer Applications',
    'Sanskrit / Regional Language',
    'Life Skills & Personality Development'
  ];

  const seniorSubjects = {
    science: [
      'Physics',
      'Chemistry',
      'Biology',
      'Mathematics / Computer Science',
      'English Core',
      'Physical Education / Optional Subjects'
    ],
    commerce: [
      'Accountancy',
      'Business Studies',
      'Economics',
      'Mathematics / Informatics Practices',
      'English Core',
      'Physical Education / Optional Subjects'
    ],
    humanities: [
      'History',
      'Political Science',
      'Economics',
      'Geography / Psychology / Sociology',
      'English Core',
      'Physical Education / Optional Subjects'
    ]
  };

  const academicCalendar = [
    { month: 'April', event: 'New Academic Session Begins' },
    { month: 'May', event: 'Summer Vacation Begins' },
    { month: 'June', event: 'Summer Vacation Ends, School Reopens' },
    { month: 'August', event: 'Independence Day (Holiday)' },
    { month: 'October', event: 'Dussehra Holidays, Mid-Term Exams' },
    { month: 'November', event: 'Diwali Holidays' },
    { month: 'December', event: 'Winter Break Begins' },
    { month: 'January', event: 'Winter Break Ends, Republic Day (Holiday)' },
    { month: 'March', event: 'Annual Exams, Holi (Holiday)' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Igniting Young Minds for a Bright Future</h1>
          <p className="text-lg">Holistic learning environment for every child to excel.</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section id="curriculum" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Dynamic Curriculum</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a well-structured and engaging curriculum designed to foster academic excellence, critical thinking, and holistic development across all grades.
          </p>

          <div className="grid gap-10">
            {/* Primary Grades */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transform transition duration-300 hover:shadow-xl hover:scale-105">
              <div className="md:w-1/2 h-96 md:h-auto">
                <img src={images} alt="Primary Education" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Primary Grades</h4>
                  <p className="mb-4">Foundational learning focusing on literacy, numeracy, and environmental awareness through interactive teaching methodologies.</p>
                  <h5 className="font-medium">Key Subjects:</h5>
                  <ul className="list-disc list-inside text-gray-700 mb-2">
                    {primarySubjects.map((subject, index) => <li key={index}>{subject}</li>)}
                  </ul>
                </div>
                <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full mt-4">#ActivityBased #CognitiveGrowth</span>
              </div>
            </div>

            {/* Middle Grades */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row-reverse transform transition duration-300 hover:shadow-xl hover:scale-105">
              <div className="md:w-1/2 h-96 md:h-auto">
                <img src={images} alt="Middle Education" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Middle Grades</h4>
                  <p className="mb-4">Transitioning to deeper subject knowledge, encouraging independent learning, scientific inquiry, and social understanding.</p>
                  <h5 className="font-medium">Core Subjects:</h5>
                  <ul className="list-disc list-inside text-gray-700 mb-2">
                    {middleSubjects.map((subject, index) => <li key={index}>{subject}</li>)}
                  </ul>
                </div>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mt-4">#AnalyticalSkills #ProjectBased</span>
              </div>
            </div>

            {/* Senior Grades */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transform transition duration-300 hover:shadow-xl hover:scale-105">
              <div className="md:w-1/2 h-96 md:h-auto">
                <img src={image.science_lab} alt="Senior Education" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Senior Grades</h4>
                  <p className="mb-4">Specialized streams for board preparations and career pathways, fostering advanced knowledge and critical reasoning.</p>
                  <h5 className="font-medium">Streams & Subjects:</h5>
                  <ul className="list-disc list-inside text-gray-700 mb-2">
                    {middleSubjects.map((subject, index) => <li key={index}>{subject}</li>)}
                  </ul>
                </div>
                <span className="inline-block bg-red-200 text-red-800 px-3 py-1 rounded-full mt-4">#CareerFocused #ExamReadiness</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Beyond Books: Nurturing Talents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src={images} alt="Sports" className="w-full h-52 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sports & Athletics</h3>
              <p>Football, Basketball, Cricket, Yoga – promoting fitness & team spirit.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src={images} alt="Arts" className="w-full h-52 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Creative & Performing Arts</h3>
              <p>Music, Dance, Drama, Fine Arts, Debate – fostering creativity.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src={images} alt="Clubs" className="w-full h-52 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clubs & Outreach</h3>
              <p>Science Club, Eco Club, Community Service – igniting passions & responsibility.</p>
            </div>

          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Modern Facilities for Enhanced Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <img src={image.science_lab} alt="Science Labs" className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-1">Advanced Science Labs</h3>
              <p>Hands-on experiments in Physics, Chemistry & Biology.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img src={image.library} alt="Library" className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-1">Interactive Digital Library</h3>
              <p>Books, e-resources & reading spaces.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img src={image.computer_lab} alt="Computer Lab" className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-1">Smart Computer Labs</h3>
              <p>Modern software, coding platforms & high-speed internet.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <img src={image.playground} alt="Sports Complex" className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-1">Spacious Sports Complex</h3>
              <p>Outdoor grounds & indoor multipurpose courts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday / Academic Calendar */}
      {/* <Holiday /> */}

      {/* Call to Action */}
      <section id="admissions" className="py-20 px-6 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our School Community!</h2>
        <p className="text-lg mb-8">Admissions open for the upcoming academic year. Discover how we nurture potential.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Apply for Admission</a>
          <a href="#" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">Download Prospectus</a>
        </div>
      </section>
    </div>
  );
};

export default AcademicContent;