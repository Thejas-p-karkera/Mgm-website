import React, { useState } from "react";
import { FaUserTie, FaEnvelope, FaPhone } from "react-icons/fa";

const officeBearers = [
  {
    office: "President",
    name: "Prof. Kokkarne Surendranath Shetty",
    mob: "9964498869",
    email: "kokkarneshetty@gmail.com",
  },
  {
    office: "Secretary",
    name: "Dr. M Vishwanath Pai",
    mob: "9008515307",
    email: "vish_pai@yahoo.com",
  },
  {
    office: "Treasurer",
    name: "Mrs. Deepali Kamath",
    mob: "9449388877",
    email: "kamath_deepali@yahoo.com",
  },
];

export default function Alumni() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you for registering as an alumni!");
      } else {
        alert("Error during registration. Please try again.");
      }
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", batch: "" });
    } catch (err) {
      alert("Network error.");
    }
  };

  return (
    <div className="font-sans bg-gradient-to-tr from-gray-50 to-gray-200 max-w-4xl mx-auto p-8 rounded-xl shadow-xl">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300 rounded-lg mb-8 h-40 flex items-center justify-center shadow-lg">
        <h1 className="text-white text-3xl font-extrabold tracking-tight drop-shadow-lg">
          MGM College Alumni Forum
        </h1>
        {/* Replace '/logo.png' with your college logo image path */}
        <img
          src="/logo.png"
          alt="MGM Logo"
          className="absolute right-6 top-6 w-14 h-14 rounded-full shadow-lg border-4 border-white"
        />
      </div>

      {/* Header */}
      <header className="flex justify-end gap-4 mb-8">
        <button
          className="animate-bounce bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-800 hover:to-sky-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-base transition-all"
          onClick={() => setShowForm(true)}
        >
          Register for Alumni &rarr;
        </button>
        <a
          href="/AlumniMembershipForm (4).pdf"
          download
          className="bg-sky-600 hover:bg-sky-800 text-white px-4 py-3 rounded-full shadow-md text-sm font-medium transition"
        >
          Download Membership Form
        </a>
      </header>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 border-4 border-sky-200 animate-scaleIn">
            <h3 className="text-sky-700 text-xl font-bold mb-6 text-center">
              Alumni Registration
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-sky-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-sky-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-sky-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="text"
                name="batch"
                placeholder="Batch (Year)"
                value={formData.batch}
                onChange={handleChange}
                required
                className="w-full border border-sky-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <style>{`
            @keyframes scaleIn {
              0% { transform: scale(0.96); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-scaleIn {
              animation: scaleIn 0.4s cubic-bezier(.32,.72,.56,1.22);
            }
          `}</style>
        </div>
      )}

      {/* Sections */}
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text text-2xl mb-4 font-bold tracking-wide">
          Objective
        </h2>
        <div className="text-gray-700 space-y-3 leading-relaxed">
          <p>
            Our Main objective is to give an opportunity to the old students of
            the College to serve and work for the betterment of their Alma Mater
            in an effective manner.
          </p>
          <p>
            Our objective is also to create strong and vibrant symbiotic alumni
            network that connects departments, current students, past students
            and our society at large. We believe that we are being steadily
            successful in meeting this objective.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text text-2xl mb-4 font-bold tracking-wide">
          An appeal to all M.G.M. alumni
        </h2>
        <div className="text-gray-700 space-y-3 leading-relaxed">
          <p>
            Mahatma Gandhi Memorial College, one of the premier Colleges of Coastal Karnataka...
          </p>
          <p>
            Whenever we decided to connect with the alumni students...
          </p>
          <p>
            Every year a convention of the alumni is held. The alumni who attend this get together...
          </p>
          <p>
            To strengthen the Forum an attempt is being made to renew contact with our Alumni...
          </p>
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            Awaiting a favourable response.
            <br />
            Thanking you,
          </p>
          <p>
            Yours Sincerely,
            <br />
            President and Secretary
            <br />
            MGM College Alumni Forum.
          </p>
        </div>
      </section>

      {/* Office Bearers Table */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="bg-gradient-to-r from-purple-500 to-sky-400 text-transparent bg-clip-text text-2xl mb-6 font-bold tracking-wide">
          Office Bearers
        </h2>
        <table className="w-full border border-gray-300 text-base">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th className="p-3 text-left">Office</th>
              <th className="p-3 text-left">Holders</th>
              <th className="p-3 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {officeBearers.map((bearer) => (
              <tr
                key={bearer.office}
                className="border-t hover:bg-sky-50 transition-colors"
              >
                <td className="p-3 font-semibold">{bearer.office}</td>
                <td className="p-3 flex items-center gap-3 text-sky-700">
                  <FaUserTie />
                  {bearer.name}
                </td>
                <td className="p-3 text-gray-600">
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-sky-500" /> {bearer.mob}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-sky-500" />
                    <a
                      href={`mailto:${bearer.email}`}
                      className="text-sky-600 font-medium hover:underline"
                    >
                      {bearer.email}
                    </a>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
