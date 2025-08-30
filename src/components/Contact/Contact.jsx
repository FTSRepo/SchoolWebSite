import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contact" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      toast.error("⚠️ Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("📧 Invalid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      toast.error("📱 Enter a valid 10-digit number.");
      return;
    }

    const enquiryData = { ...formData, enquiryType: "Online", schoolId: 14 };

    fetch("https://schoolapi.friensys.com:443/api/SaveEnquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiryData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("🎉 Enquiry submitted successfully!");
          setFormData({ name: "", email: "", contact: "", message: "" });
        } else {
          toast.error(data.message || "❌ Submission failed.");
        }
      })
      .catch(() => toast.error("❌ Network error, please try again later."));
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 drop-shadow-lg"
        >
          Get In Touch With Us
        </motion.h1>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/70 border border-gray-200 shadow-xl rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reach Us</h2>
            <ul className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Our Location",
                  desc: (
                    <>
                      <strong>Dawn Public School</strong>
                      <br /> Behind V.Mart, Janpul Road, Motihari <br /> East Champaran, Bihar - 845401
                    </>
                  ),
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email Address",
                  desc: (
                    <a
                      href="mailto:abbasdawn6@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      abbasdawn6@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Admission Inquiry",
                  desc: (
                    <>
                      <a href="tel:+919525539607" className="text-blue-600 hover:underline">
                        +91-9525539607
                      </a>
                      <p className="text-sm text-gray-500">Available 9 AM - 5 PM</p>
                    </>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                { id: "contact", label: "Phone Number", type: "text", placeholder: "9876543210" },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    maxLength={field.id === "contact" ? "10" : undefined}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your query here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all duration-200"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  🚀 Send
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  🧹 Clear
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="backdrop-blur-md bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Us On Map</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden border shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Dawn Public School Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
