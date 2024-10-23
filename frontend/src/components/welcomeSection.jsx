// WelcomeSection.tsx
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Heaviety</h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Empowering local artisans by connecting them to a global audience.
      </p>

      <div className="flex space-x-4 mb-12">
        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>

        <Link
          to="/login"
          className="btn btn-primary bg-white text-gray-900 hover:bg-gray-200 border-none shadow-md"
        >
          Login
        </Link>
      </div>

      <div className="bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-lg max-w-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
          Why Choose Heaviety?
        </h2>
        <p className="text-center">
          Heaviety is dedicated to supporting small-scale artisans by providing them with a platform 
          to showcase their products to a global market. We believe in the power of community and the 
          importance of sustainable economic growth.
        </p>
        <p className="mt-4 text-center">
          Join us today and be part of a movement that empowers local talent and celebrates 
          cultural diversity.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
