// ThankYou.tsx
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <main className="container h-full flex justify-center items-center mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:shadow-lg hover:scale-105">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
          Thank You!
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Thank you for contacting me. I will get back to you as soon as
          possible.
        </p>
        <div className="text-center">
          <a
            href="/about-me"
            className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300 focus:outline-none transform hover:scale-110"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
