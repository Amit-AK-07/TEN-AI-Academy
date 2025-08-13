import React, { useState } from "react";
import Footer from "../components/common/Footer";

const Join = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    course_interested_in: "",
    highest_qualification: "",
    skills: "",
    linkedin_profile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Course choices matching backend
  const courseChoices = [
    { value: "data_engineering", label: "Data Engineering" },
    { value: "ai_python_beginners", label: "AI Python for Beginners" },
    { value: "generative_ai_software", label: "Generative AI for Software Development" },
    { value: "dspy_agentic_apps", label: "DSPy: Build and Optimize Agentic Apps" },
    { value: "orchestrating_workflows", label: "Orchestrating Workflows for GenAI Applications" },
    { value: "structured_llm_output", label: "Getting Structured LLM Output" },
    { value: "advanced_prompt_engineering", label: "Advanced Prompt Engineering" },
    { value: "ai_business_leaders", label: "AI for Business Leaders" },
    { value: "machine_learning_foundations", label: "Machine Learning Foundations" },
    { value: "full_stack_ai", label: "Full Stack AI Applications" },
  ];

  // Qualification choices matching backend
  const qualificationChoices = [
    { value: "high_school", label: "High School" },
    { value: "diploma", label: "Diploma" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "phd", label: "PhD" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";
      const response = await fetch(`${API_BASE}/join-forms/submit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.errors || data.error) {
          const errorMessage = data.errors
            ? Object.values(data.errors).flat().join(", ")
            : data.error;
          throw new Error(errorMessage);
        }
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Application submitted successfully! We'll get back to you soon.");
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        course_interested_in: "",
        highest_qualification: "",
        skills: "",
        linkedin_profile: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Join <span className="text-rose-500">AI Academy</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below to apply for our internship or courses.
        </p>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* Course (Dropdown) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course Interested In
            </label>
            <select
              name="course_interested_in"
              value={formData.course_interested_in}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="">Select a course</option>
              {courseChoices.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Highest Qualification
            </label>
            <select
              name="highest_qualification"
              value={formData.highest_qualification}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="">Select qualification</option>
              {qualificationChoices.map((qual) => (
                <option key={qual.value} value={qual.value}>
                  {qual.label}
                </option>
              ))}
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Skills
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="e.g. Python, React, SQL, Machine Learning..."
              rows="3"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              name="linkedin_profile"
              value={formData.linkedin_profile}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message (optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here... (max 500 characters)"
              rows="3"
              maxLength="500"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              disabled={loading}
            />
            <div className="text-sm text-gray-500 mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-medium transition-colors ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rose-500 hover:bg-rose-600 text-white"
              }`}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Join;
