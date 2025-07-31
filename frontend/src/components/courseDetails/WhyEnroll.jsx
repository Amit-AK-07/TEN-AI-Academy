import React from "react";
import whyEnrollImg from "../../assets/images/ai-academy_img1.jpg"; // Update path if needed

const WhyEnroll = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Why Enroll?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Data-informed decision-making is now an essential skill for everyone,
          from everyday consumer choices to business decisions at all levels. As
          reliance on data grows, so does the need for professionals who can
          analyze and interpret it effectively.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-gray-900">
            The Data Analytics Professional Certificate,
          </span>
          led by industry leader Sean Barnes, equips you with the skills to
          manage the entire data lifecycle, from defining problems to delivering
          insights. With this certificate, you’ll be prepared to pursue an
          entry-level role in data analytics or strengthen your current role
          with a solid foundation in data analysis.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          The skills you’ll gain are in high demand, and with
          <span className="font-semibold text-indigo-700">
            {" "}
            data science roles projected to grow 36% from 2023 to 2033{" "}
          </span>
          according to the U.S. Bureau of Labor Statistics, developing these
          skills puts you at the forefront of a data-centric world.
        </p>

        <div className="w-full max-w-xl mx-auto mb-12">
          <img
            src={whyEnrollImg}
            alt="The Data Analytics Lifecycle"
            className="rounded-xl shadow-xl w-full"
          />
        </div>

        <div className="text-lg text-gray-700 space-y-6">
          <p>
            You’ll begin by learning the foundations of analysis and
            visualization, then move on to statistical techniques that support
            evidence-based decision-making. Next, you’ll develop Python skills
            to automate workflows and analyze data at scale (no prior coding
            experience required!). Then, you’ll work with real-world data to
            extract information from websites, APIs, and databases, and clean
            data with Python and SQL to prepare it for analysis.
          </p>
          <p>
            Finally, you’ll learn to present your analysis in ways that support
            real decisions through clear writing, compelling visualizations, and
            interactive dashboards. You’ll also prepare for the job search with
            practical guidance on resumes, portfolios, and interviews.
          </p>
          <p>
            Unique to this program is its integration of AI tools into the
            analytics workflow. You’ll learn to use large language models as a
            thought partner, accelerating tasks like simulation modeling,
            formula debugging, and data visualization. Each of the course
            examples comes from real-world use cases, building practical and
            immediately useful skills.
          </p>
          <p>
            Whether you’re a software engineer working with data pipelines, a
            marketer or business analyst extracting insights, or building a
            career in data analysis, you’ll gain the foundation to excel in the
            data economy. Blending core statistical methods with AI-assisted
            workflows, this program is perfect for beginners entering the field
            as well as experienced practitioners looking to expand their
            analytical toolkit.
          </p>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Enroll Now ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyEnroll;
