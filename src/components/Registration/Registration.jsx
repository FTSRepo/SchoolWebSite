import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import Logo from "../../assets/schoolImages/logo.png";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  // 1. State variables for all form fields
  const [Name, setStudentName] = useState("");
  const [Dob, setDateOfBirth] = useState("");
  const [Class, setAdmissionClass] = useState("");
  const [Gender, setGender] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [Religion, setReligion] = useState("");
  const [Category, setCategory] = useState("");
  const [AadharNo, setAdharNo] = useState("");
  const [previousClass, setPreviousClass] = useState("");

  const [fatherName, setFatherName] = useState("");
  const [Occupation, setFatherOccupation] = useState("");
  const [FMobile, setFatherMobile] = useState("");
  const [motherName, setMotherName] = useState("");
  const [MOccupation, setMotherOccupation] = useState("");
  const [Mmobile, setMotherMobile] = useState("");

  const [residence, setResidence] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [SchoolDis, setDistance] = useState("");
  const [RegStatus] = ["Panding"];
  const [ApplicationMode] = ["Online"];
  const [RegFee] = [10];
  const [SchoolId] = [14];

  // State for API call status and feedback
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // For success/error messages
  const [registrationNumber, setRegistrationNumber] = useState("");

  const navigate = useNavigate();
  // Simulate fetching price and registration number from API
  const [basePrice, setbasePrice] = useState(null);
  const [keyId, setKeyId] = useState(null);
  const [orderid, setorderid] = useState(null);
  const [schoolId, setschollid] = useState(null);
  const [name, setName] = useState(null);

  const formRef = useRef(null);

  // 2. API Endpoint (Replace with your actual API endpoint)

  const API_ENDPOINT =
    "https://schoolapi.friensys.com:443/api/SaveRegistrationWeb";
  // https://schoolapi.friensys.com:443/api/SaveRegistrationWeb

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = {
      Name,
      Dob,
      Class,
      Gender,
      BloodGroup,
      Religion,
      Category,
      AadharNo,
      previousClass,
      fatherName,
      Occupation,
      FMobile,
      motherName,
      MOccupation,
      Mmobile,
      residence,
      country,
      state,
      city,
      pinCode,
      SchoolDis: SchoolDis ? parseFloat(SchoolDis) : null,
      RegStatus,
      ApplicationMode,
      RegFee,
      SchoolId,
    };
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status) {
        const apiResponse = await response.json();
        const data = apiResponse.data;
        setbasePrice(data.registrationNo);
        setKeyId(data.clientKey);
        setorderid(data.paymentGatewayOrderId);
        setschollid(data.schoolId);
        setRegistrationNumber(data.registrationNumber);
        setName(data.name);
        setMessage("Registration successful! " + data.message);
        generatePDF(data.registrationNo);
        handleClear();
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.regNo || response.regNo}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setStudentName("");
    setDateOfBirth("");
    setAdmissionClass("");
    setGender("");
    setBloodGroup("");
    setReligion("");
    setCategory("");
    setAdharNo("");
    setPreviousClass("");

    setFatherName("");
    setFatherOccupation("");
    setFatherMobile("");
    setMotherName("");
    setMotherOccupation("");
    setMotherMobile("");

    setResidence("");
    setCountry("");
    setState("");
    setCity("");
    setPinCode("");
    setDistance("");

    setMessage("");
  };
  const generatePDF = (regNo) => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const sectionMargin = 10;
    const contentWidth = pageWidth - sectionMargin * 2;
    let y = 20;

    const logoWidth = 40;
    const logoHeight = 40;
    const centerX = pageWidth / 2;

    // === STATIC TEXT TOP CORNERS ===
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80);

    // Top-left text (e.g., Session)
    doc.text("Session: 2025-26", sectionMargin, 10); // X: 10, Y: 10

    // Top-right text (e.g., Form No)
    doc.text("Form No: DPS-123", pageWidth - sectionMargin, 10, {
      align: "right",
    });

    // === OUTER BORDER (Orange) ===
    doc.setDrawColor(255, 165, 0); // Orange border
    doc.setLineWidth(1.5);
    doc.rect(5, 5, pageWidth - 10, pageHeight - 10);

    // === FULL BACKGROUND COLOR (Light cream) ===
    doc.setFillColor(255, 250, 240); // light cream background
    doc.rect(6, 6, pageWidth - 12, pageHeight - 12, "F");

    // === STATIC TEXT TOP CORNERS ===
    // doc.setFont("helvetica", "normal");
    // doc.setFontSize(10);
    // doc.setTextColor(80);

    // // Top-left text (e.g., Session)
    // doc.text("Session: 2025-26", sectionMargin, 10); // X: 10, Y: 10

    // // Top-right text (e.g., Form No)
    // doc.text("Form No: DPS-123", pageWidth - sectionMargin, 10, {
    //   align: "right",
    // });

    // === LOGO ===
    try {
      doc.addImage(Logo, "PNG", sectionMargin, 12, logoWidth, logoHeight);
    } catch (e) {
      console.warn("Logo failed to load", e);
    }

    // === SCHOOL NAME & CONTACT INFO (Center aligned next to logo) ===
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(30, 30, 30);
    doc.text("Dawn Public School", centerX + 10, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("ENGLISH MEDIUM & CO-EDUCATION", centerX + 10, 26, {
      align: "center",
    });

    doc.setFontSize(10);
    doc.text(
      "Behind V.Mart, Janpul Road, Motihari, East Champaran, Bihar - 845401",
      centerX + 10,
      32,
      { align: "center" }
    );

    doc.text(
      "Phone: 9525539607 | Email: abbasdawn6@gmail.com",
      centerX + 10,
      37,
      { align: "center" }
    );
    // === TITLE UNDER HEADER ===
    y = 60;

    // Background highlight behind the title
    doc.setFillColor(240, 248, 255);
    doc.rect(sectionMargin, y - 7, contentWidth, 12, "F");

    // Text styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(0, 51, 102);
    doc.text("Student Registration Details", centerX, y, { align: "center" });

    // Optional underline
    const textWidth = doc.getTextWidth("Student Registration Details");
    doc.setDrawColor(0, 51, 102); // same navy
    doc.setLineWidth(0.5);
    doc.line(centerX - textWidth / 2, y + 2, centerX + textWidth / 2, y + 2);

    y += 12;

    // === Function to draw field boxes ===
    const drawBox = (title, fields) => {
      const boxStartY = y;
      const headerHeight = 10;
      const paddingTop = 5;
      y += headerHeight + paddingTop;

      fields.forEach(({ label, value }) => {
        doc.setFontSize(11);
        doc.setTextColor(50);
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, sectionMargin + 4, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${value || "-"}`, sectionMargin + 50, y);
        y += 7;
      });

      doc.setFillColor(255, 218, 185); // Light peach
      doc.setTextColor(0);
      doc.rect(sectionMargin, boxStartY, contentWidth, headerHeight, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(title, centerX, boxStartY + 7, { align: "center" });
    };

    drawBox("Student Information", [
      { label: "Registration No", value: regNo },
      { label: "Student Name", value: Name },
      { label: "Date of Birth", value: Dob },
      { label: "Admission Class", value: Class },
      { label: "Gender", value: Gender },
      { label: "Blood Group", value: BloodGroup },
      { label: "Religion", value: Religion },
      { label: "Category", value: Category },
      { label: "Aadhar No", value: AadharNo },
      { label: "Previous Class", value: previousClass },
    ]);

    y += 10;

    drawBox("Parent Details", [
      { label: "Father Name", value: fatherName },
      { label: "Father Occupation", value: Occupation },
      { label: "Father Mobile No", value: FMobile },
      { label: "Mother Name", value: motherName },
      { label: "Mother Occupation", value: MOccupation },
      { label: "Mother Mobile No", value: Mmobile },
    ]);

    y += 10;

    drawBox("Address Details", [
      { label: "Residence", value: residence },
      { label: "Country", value: country },
      { label: "State", value: state },
      { label: "City Name", value: city },
      { label: "Pin Code", value: pinCode },
      { label: "Distance from School", value: `${SchoolDis} km` },
    ]);

    // Save the PDF
    doc.save(`Student_Registration_${Name}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto border border-gray-300 bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8 tracking-wide mt-4">
          Registration Form
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="registration-form"
        >
          {/* Student Information */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">
              Student Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="Name"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Student Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="Name"
                  placeholder="Enter Student Name"
                  value={Name}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Dob"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Date of Birth
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="Dob"
                  value={Dob}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Class"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Admission Class
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="Class"
                  value={Class}
                  onChange={(e) => setAdmissionClass(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                  <option value="fifth">Fifth</option>
                  <option value="six">Six</option>
                  <option value="seven">Seven</option>
                  <option value="eight">Eight</option>
                  <option value="nine">Nine</option>
                  <option value="ten">Ten</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Gender"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Gender
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="Gender"
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="BloodGroup"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Blood Group
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="BloodGroup"
                  value={BloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select BloodGroup</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Religion"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Religion '<span className="text-red-500">*</span>'
                </label>
                <select
                  id="Religion"
                  value={Religion}
                  onChange={(e) => setReligion(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Religion</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Islam">Islam</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Category"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Category
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="Category"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="AadharNo"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Aadhar No
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="AadharNo"
                  placeholder="Enter Aadhar Number"
                  value={AadharNo}
                  onChange={(e) => setAdharNo(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="previousClass"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Previous Class
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="previousClass"
                  value={previousClass}
                  onChange={(e) => setPreviousClass(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                  <option value="fifth">Fifth</option>
                  <option value="six">Six</option>
                  <option value="seven">Seven</option>
                  <option value="eight">Eight</option>
                  <option value="nine">Nine</option>
                  <option value="ten">Ten</option>
                </select>
              </div>
            </div>
          </div>

          {/* Parent Details */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">
              Parent Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Father Details */}
              <div className="flex flex-col">
                <label
                  htmlFor="fatherName"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Father Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fatherName"
                  placeholder="Enter Father Name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Occupation"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Occupation
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="Occupation"
                  placeholder="Enter Occupation"
                  value={Occupation}
                  onChange={(e) => setFatherOccupation(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="FMobile"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Father Mobile No
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="FMobile"
                  placeholder="Enter Mobile No"
                  value={FMobile}
                  onChange={(e) => setFatherMobile(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Mother Details */}
              <div className="flex flex-col">
                <label
                  htmlFor="motherName"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Mother Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="motherName"
                  placeholder="Enter Mother Name"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="MOccupation"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Occupation
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="MOccupation"
                  placeholder="Enter Occupation"
                  value={MOccupation}
                  onChange={(e) => setMotherOccupation(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Mmobile"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Mother Mobile No
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="Mmobile"
                  placeholder="Enter Mobile No"
                  value={Mmobile}
                  onChange={(e) => setMotherMobile(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">
              Address Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="residence"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Residence
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="residence"
                  placeholder="Enter Residence"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Country
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select your Country</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  State
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select your State</option>
                  <option value="bihar">Bihar</option>
                  <option value="uttarpradesh">Uttar Pradesh</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  City Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City Name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="pinCode"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  PinCode
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pinCode"
                  placeholder="Enter Pin Code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="SchoolDis"
                  className="font-medium text-sm text-gray-700 mb-1"
                >
                  Distance from School (in km)
                </label>
                <input
                  type="text"
                  id="SchoolDis"
                  placeholder="Enter Distance"
                  value={SchoolDis}
                  onChange={(e) => setDistance(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {message && ( // Display messages (success/error)
            <p
              className={`form-message ${
                message.includes("successful") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}

          {/* Form Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={handleClear}
              disabled={loading}
              className={`px-6 py-2 rounded-md font-medium border transition duration-300
             ${
               loading
                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                 : "bg-white text-gray-700 hover:bg-gray-100 border-gray-400"
             }
           `}
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-md font-medium text-white transition duration-300
             ${
               loading
                 ? "bg-blue-300 cursor-not-allowed"
                 : "bg-blue-600 hover:bg-blue-700"
             }
            `}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>

          <p className="text-xl text-center text-gray-600 mt-6 mb-4">
            Already have an account?{" "}
            <Link
              to="https://school.friensys.com/"
              className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition duration-300"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
