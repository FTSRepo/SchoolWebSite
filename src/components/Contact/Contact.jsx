import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Basic validation for phone number (only digits)
    if (name === "contact" && !/^\d*$/.test(value)) {
      return; // Agar non-digit input hai, toh ignore karo
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const enquiryData = {
      ...formData,
      enquiryType: "Online", // Assuming this is fixed for online enquiries
      schoolId: 60, // Your specific school ID
    };

    // You might want to add a loading state here for better UX
    // setLoading(true);
    fetch("https://schoolapi.friensys.com:443/api/SaveEnquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiryData),

    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Server error');
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.status) {
          toast.success("Enquiry submitted successfully!");
          setFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
          });
        } else {
          toast.error(data.message || "Error submitting enquiry.");
        }
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
        toast.error(`Error submitting enquiry: ${error.message || 'Please try again later.'}`);
      });

  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="bg-text-white-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-16 py-10">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-8 w-full border border-gray-300 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reach Out To Us</h2>
            <ul className="space-y-6">

              {/* Location */}
              <li className="flex items-start gap-4 group">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl transition duration-300 group-hover:bg-blue-600 group-hover:text-white shadow">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Location</h3>
                  <p className="text-gray-600">
                    <strong>Dawn Public School</strong><br />
                    Behind V.Mart, Janpul Road, Motihari<br />
                    East Champaran, Bihar - 845401
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4 group">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl transition duration-300 group-hover:bg-blue-600 group-hover:text-white shadow">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Address</h3>
                  <a
                    href="mailto:abbasdawn6@gmail.com"
                    className="text-blue-600 underline hover:text-blue-800 transition duration-200"
                  >
                    abbasdawn6@gmail.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4 group">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl transition duration-300 group-hover:bg-blue-600 group-hover:text-white shadow">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Admission Inquiry</h3>
                  <a
                    href="tel:+919525539607"
                    className="text-blue-600 underline hover:text-blue-800 transition duration-200"
                  >
                    +91-9525539607
                  </a>
                  <p className="text-sm text-gray-500">Call us during school hours (9 AM - 5 PM)</p>
                </div>
              </li>

            </ul>
          </div>


          {/* Contact Form Card */}
          <div className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8 w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us A Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  maxLength="10"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="e.g., 9876543210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message or query here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Google Map */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-2xl p-6 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Location on Map
          </h2>

          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.1469763772834!2d84.91026457366023!3d26.660631670881486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993351dc4efe4c5%3A0x694ffa95dfbff8b7!2sDawn%20Public%20School!5e1!3m2!1sen!2sin!4v1741790400644!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dawn Public School Location"
            ></iframe>
          </div>
        </div>

      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}