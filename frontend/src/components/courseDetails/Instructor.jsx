import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Instructor = ({ course }) => {
  if (!course.instructor) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Instructor</h2>

        <p className="text-xl text-gray-700 mb-4">{course.instructor}</p>

        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
          {course.instructorImage ? (
            <img
              src={course.instructorImage}
              alt={course.instructor}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              {course.instructor.charAt(0)}
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          {course.instructorLinkedIn && (
            <a
              href={course.instructorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaLinkedin />
            </a>
          )}
          {course.instructorTwitter && (
            <a
              href={course.instructorTwitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl"
            >
              <FaTwitter />
            </a>
          )}
        </div>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {course.instructorBio || "Bio Not Available"}
        </p>
      </div>
    </div>
  );
};

export default Instructor;
