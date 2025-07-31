import React, { useState } from "react";
import WhatYouWillLearn from "./WhatYouWillLearn";
import FAQ from "./FAQ";
import Instructor from "./Instructor";
import Skills from "./Skills";
import WhyEnroll from "./WhyEnroll";
import { Clock, CheckCircle } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import Footer from "../common/Footer";

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
    : null;
};

// Hero Section
const Hero = ({ course }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {course.title}
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {course.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll for Free
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Updated Video Section
const VideoSection = ({ videoUrl, course }) => {
  const [showVideo, setShowVideo] = useState(false);
  const isYouTube = videoUrl?.includes("youtu");

  if (!videoUrl) return null;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Course Preview
        </h2>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl relative group">
          {showVideo ? (
            isYouTube ? (
              <iframe
                src={getYouTubeEmbedUrl(videoUrl)}
                title={`Preview for ${course.title}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            )
          ) : (
            <>
              <img
                src={course.image}
                alt="Course Thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
              >
                <FaPlay className="text-white text-4xl" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// Outcomes Section
const Outcomes = ({ outcomes = [] }) => {
  if (!outcomes.length) return null;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Learning Outcomes
        </h2>
        <div className="grid gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border-l-4 border-green-500 bg-white rounded-r-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 leading-relaxed text-lg">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Section
const About = ({ aboutCourse }) => {
  if (!aboutCourse) return null;

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About this Specialization
        </h2>
        <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {aboutCourse}
        </div>
      </div>
    </div>
  );
};

// Course Outline Section
const CourseOutline = ({ courseOutline = [] }) => {
  if (!courseOutline.length) return null;

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Course Outline
        </h2>
        <div className="space-y-6">
          {courseOutline.map((course, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  {course.duration && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                  )}
                  {course.hasCode && (
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      Code included
                    </span>
                  )}
                </div>
              </div>
              {course.description && (
                <p className="text-gray-700 leading-relaxed ml-14">
                  {course.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const SpecializationDetail = ({ course }) => {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero course={course} />
      <VideoSection videoUrl={course.videoUrl} course={course} />
      <WhyEnroll />
      <Instructor course={course} />
      <CourseOutline courseOutline={course.courseOutline} />
      <Skills skills={course.skills} />
      <WhatYouWillLearn
        items={course.whatYouWillLearn}
        type="specialization"
        heading="What You'll Learn in this Course"
      />
      <Outcomes outcomes={course.outcomes} />
      <About aboutCourse={course.aboutCourse} />
      <FAQ faqs={course.faqs} />

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of learners who have advanced their careers with this
            comprehensive specialization. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now - Free to Try
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecializationDetail;
