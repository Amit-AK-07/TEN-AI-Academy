import React from "react";

const WhatYouWillLearn = ({
  items = [],
  showAll = false,
  heading = "What you'll learn",
  type = "short", // "short" or "specialization"
}) => {
  if (!items.length) {
    return (
      <p className="text-gray-600 mb-6">
        No learning outcomes available for this course.
      </p>
    );
  }

  if (type === "specialization") {
    return (
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300"
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                <p className="text-gray-800 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: short course version
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
      <ul className="list-disc ml-5 text-gray-700 space-y-3">
        {(showAll ? items : items.slice(0, 3)).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
