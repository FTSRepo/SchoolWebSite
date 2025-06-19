import React, { Component } from 'react';
import Logo1 from "../../assets/schoolImages/About.jpeg"
import Banner from '../../assets/schoolImages/D5.jpg';
import Principle from '../../assets/schoolImages/Rajnish_Singh.jpg';

export class AboutSchool extends Component {
  render() {
    return (
      <div className="font-sans">
        {/* Hero Section */}
        <header
          className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="bg-black bg-opacity-60 p-6 rounded">
            <h1 className="text-4xl font-bold mb-2">Welcome to Dawn Public School: Where Futures Take Flight</h1>
            <p className="text-lg">Nurturing Minds, Inspiring Excellence, Building Tomorrow's Leaders.</p>
          </div>
        </header>

        {/* Philosophy Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Journey of Excellence</h2>
            <p className="mb-4">
              At Dawn Public School, we believe in shaping more than just students; we shape responsible citizens, innovative thinkers, and compassionate individuals. Established in [Year], our institution has been a beacon of learning, dedicated to providing a holistic educational experience that goes beyond textbooks.
            </p>
            <p>
              Our philosophy is rooted in creating a stimulating and supportive environment where every child feels valued, understood, and empowered to discover their unique talents and potential.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Our Guiding Principles</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border rounded-lg shadow-md">
                <div className="mb-4">
                  <i className="fas fa-bullseye text-3xl text-yellow-500"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>
                  To cultivate intellectual curiosity, foster critical thinking, and instill strong ethical values, enabling students to achieve academic distinction and personal growth.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="mb-4">
                  <i className="fas fa-lightbulb text-3xl text-yellow-500"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>
                  To be a pioneering educational institution renowned for its innovative pedagogy, vibrant community, and graduates who lead with purpose and make a positive global impact.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <div className="mb-4">
                  <i className="fas fa-handshake text-3xl text-yellow-500"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="list-disc list-inside space-y-1">
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

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Dawn Public School</h2>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img src={Logo1} alt="Dynamic Learning" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Learning Environment</h3>
                  <p>
                    Our classrooms are hubs of discovery, equipped with modern resources and led by passionate educators who inspire active participation and deep understanding.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <img src={Logo1} alt="Facilities" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
                  <p>
                    From advanced science labs and expansive sports complexes to a well-stocked library and creative arts studios, we provide the best resources for holistic development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img src={Logo1} alt="Co-curricular" className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Holistic Development & Co-curricular Excellence</h3>
                  <p>
                    We offer a rich tapestry of sports, arts, music, and clubs that empower students to explore passions, build character, and develop leadership skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Message */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">A Message from Our Principal</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={Principle}
                alt="Principal"
                className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto md:mx-0"
              />
              <div className="text-left">
                <p className="mb-4">
                  "At Dawn Public School, we are committed to fostering an environment where every child blossoms into their fullest potential. Our dedicated faculty, innovative curriculum, and strong community partnerships ensure that each student receives a transformative education. We invite you to join our family and embark on a journey of discovery, growth, and unparalleled success."
                </p>
                <p className="font-semibold text-lg">
                  - Abbass Alam<br />
                  Principal, Dawn Public School
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutSchool;
