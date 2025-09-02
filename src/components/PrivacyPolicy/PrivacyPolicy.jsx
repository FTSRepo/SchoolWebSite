// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, BookOpen, ArrowLeft, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 text-white py-16 shadow-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">Privacy Policy</h1>
          <p className="mt-3 text-blue-100 text-lg">
            Last updated: <span className="font-medium">September 2, 2025</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Quick nav */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-4">
            <BookOpen className="w-5 h-5" />
            Contents
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            {[
              ["Introduction", "introduction"],
              ["Scope", "scope"],
              ["Information We Collect", "info-we-collect"],
              ["How We Use Information", "how-we-use"],
              ["Cookies & Analytics", "cookies"],
              ["Sharing & Disclosure", "sharing"],
              ["Data Security", "security"],
              ["Retention", "retention"],
              ["Children’s Privacy", "children"],
              ["Your Rights & Choices", "your-rights"],
              ["Third-Party Services", "third-parties"],
              ["International Transfers", "transfers"],
              ["Changes to This Policy", "changes"],
              ["Contact & Grievance", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-gray-700 hover:text-indigo-600 hover:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Body */}
        <div className="space-y-10">
          {/* 1) Introduction */}
          <section id="introduction" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              1) Introduction
            </h2>
            <p>
              Shanti Hari Sudhanya Chand Public School (“we”, “us”, “our”) is committed
              to protecting the privacy of our students, parents/guardians, staff, and
              visitors to our website and mobile applications (collectively, the
              “Services”). This Privacy Policy explains what information we collect, how
              we use it, and the choices you have.
            </p>
          </section>

          {/* 2) Scope */}
          <section id="scope" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">2) Scope</h2>
            <p>
              This policy applies to information collected through our website, mobile
              app, admissions and academic systems, communication channels, and offline
              processes related to school operations.
            </p>
          </section>

          {/* 3) Information We Collect */}
          <section id="info-we-collect" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              3) Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Student data:</strong> name, date of birth, class, admission
                details, academic performance, attendance, health information (where
                provided for safety/administration), photographs for ID/records, and
                related documents.
              </li>
              <li>
                <strong>Parent/guardian data:</strong> name, relationship, contact
                numbers, email, address, and ID details provided during admission or
                communication.
              </li>
              <li>
                <strong>Staff data:</strong> employment and compliance information
                required for HR and school administration.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, device/browser info, pages
                visited, app usage, and similar analytics data collected via cookies or
                SDKs.
              </li>
              <li>
                <strong>Voluntary submissions:</strong> enquiry forms, feedback, or
                support requests, including any attachments you provide.
              </li>
            </ul>
          </section>

          {/* 4) How We Use Information */}
          <section id="how-we-use" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              4) How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Admissions processing and student record management.</li>
              <li>Academic delivery, assessments, report cards, and attendance.</li>
              <li>
                Communication with parents/guardians (SMS, email, app notifications).
              </li>
              <li>Fee administration, receipts, and statutory compliance.</li>
              <li>Safety, security, and safeguarding of the school community.</li>
              <li>
                Improving our Services, website/app performance, and user experience.
              </li>
              <li>Legal compliance and responding to authorized requests.</li>
            </ul>
          </section>

          {/* 5) Cookies */}
          <section id="cookies" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              5) Cookies & Analytics
            </h2>
            <p>
              We may use cookies and similar technologies to operate the website,
              remember preferences, and measure usage. You can control cookies via your
              browser settings; disabling some cookies may affect site functionality.
            </p>
          </section>

          {/* 6) Sharing */}
          <section id="sharing" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              6) Sharing & Disclosure
            </h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers</strong> (IT, communication, payment, academic
                systems).
              </li>
              <li>
                <strong>Regulators/authorities</strong> when required by law or to
                protect safety.
              </li>
              <li>
                <strong>Other schools/boards</strong> for transfers, exams, or board
                requirements.
              </li>
            </ul>
          </section>

          {/* 7-13 follow same pattern */}
          <section id="security" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">7) Data Security</h2>
            <p>
              We use reasonable safeguards to protect data. However, no system is 100%
              secure; please exercise care when sharing data online.
            </p>
          </section>

          <section id="retention" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">8) Retention</h2>
            <p>
              We retain personal data only as long as necessary for educational, legal,
              and operational purposes, or as required by law.
            </p>
          </section>

          <section id="children" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              9) Children’s Privacy
            </h2>
            <p>
              As a school, we process children’s data to provide education and ensure
              welfare—typically with parental/guardian consent.
            </p>
          </section>

          <section id="your-rights" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              10) Your Rights & Choices
            </h2>
            <p>
              Subject to law, you may request access, correction, update, or deletion of
              your personal data, or withdraw consent where applicable.
            </p>
          </section>

          <section id="third-parties" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              11) Third-Party Services
            </h2>
            <p>
              Our Services may link to third-party websites/apps. Their privacy practices
              are governed by their own policies.
            </p>
          </section>

          <section id="transfers" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              12) International Transfers
            </h2>
            <p>
              If data is processed or stored outside your country, we take appropriate
              steps to ensure a comparable level of protection.
            </p>
          </section>

          <section id="changes" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              13) Changes to This Policy
            </h2>
            <p>
              We may update this policy periodically. Updates will be posted here with an
              updated “Last updated” date.
            </p>
          </section>

          {/* 14) Contact */}
          <section id="contact" className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              14) Contact & Grievance
            </h2>
            <p>If you have questions or complaints, please contact:</p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
              <p className="font-semibold text-lg">
                Shanti Hari Sudhanya Chand Public School
              </p>
              <p className="mt-1">
                Bel Bag Bangali Colony, Bettiah, West Champaran, Bihar, India
              </p>
              <p className="mt-2">Phone: +91 95234 64653</p>
              <p className="mt-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <a
                  href="mailto:shantiharisudhanyachand@gmail.com"
                  className="text-indigo-700 hover:underline"
                >
                  shantiharisudhanyachand@gmail.com
                </a>
              </p>
              <p className="mt-3 text-sm text-gray-600">
                You may also write to our designated grievance contact at the above
                address/email.
              </p>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="mt-12 flex gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
