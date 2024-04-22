import React from "react";

const ThankYou = ({ isOpen }: {isOpen: boolean}) => {
  if (!isOpen) return <></>
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:shadow-lg hover:scale-105 relative z-10">
        <a
          href="/"
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </a>
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
          Thank You!
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Thank you for contacting me. I will get back to you as soon as
          possible.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300 focus:outline-none transform hover:scale-110"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
