import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center text-center text-white px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Welcome to Heaviety
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl">
          Empowering local artisans by connecting them to a global audience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white p-8 rounded-xl shadow-lg text-center max-w-3xl mx-auto my-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-600 mb-4">
          Why Choose Heaviety?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Heaviety is dedicated to supporting small-scale artisans by providing
          them with a platform to showcase their products to a global market. We
          believe in the power of community and the importance of sustainable
          economic growth.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Join us today and be part of a movement that empowers local talent and
          celebrates cultural diversity.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-white py-6 mt-auto">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Heaviety. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
