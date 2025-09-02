import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Contact as ContactIcon  } from "lucide-react";

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
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.message
    ) {
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

    const enquiryData = { ...formData, enquiryType: "Online", schoolId: 149 };

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
    <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 text-white py-20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-sky-500/20 rounded-full blur-3xl animate-ping"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ContactIcon className="w-16 h-16 text-blue-200 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-3 text-blue-100 text-lg">
            We’d love to hear from you. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Our Location",
              desc: (
                <>
                  Shanti Hari Sudhanya Chand Public School <br />
                  Bel Bag Bangali Colony, Bettiah <br />
                  West Champaran, Bihar - 845439
                </>
              ),
            },
            {
              icon: <FaEnvelope />,
              title: "Email Us",
              desc: (
                <a
                  href="mailto:shantiharisudhanyachand@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  shantiharisudhanyachand@gmail.com
                </a>
              ),
            },
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              desc: (
                <>
                  <a
                    href="tel:+919523464653"
                    className="text-blue-600 hover:underline"
                  >
                    +91-9523464653
                  </a>
                  <p className="text-sm text-gray-500">Mon–Sat, 9AM – 5PM</p>
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-8 text-center border hover:shadow-2xl transition"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-2xl shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl rounded-2xl p-10 border"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  id: "contact",
                  label: "Phone Number",
                  type: "text",
                  placeholder: "9876543210",
                },
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
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all duration-200"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  🚀 Send Message
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200"
                >
                  🧹 Clear
                </button>
              </div>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl rounded-2xl p-6 border"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Find Us on Map
            </h2>
            <div className="w-full h-[450px] rounded-xl overflow-hidden border shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.417474634624!2d84.512539!3d26.7884876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936ffe74bd92ed%3A0xa0724b2465b83f1!2sShanti%20hari%20sudhanya%20chand%20public%20school!5e0!3m2!1sen!2sin!4v1725116420000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shanti Hari Sudhanya Chand Public School"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
