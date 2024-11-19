
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to Heaviety</h1>
        <p className="text-white mt-2 text-lg">
          Empowering local artisans by connecting them to a global audience.
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            to="/register" 
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
          <Link
            to="/login" 
            className="px-6 py-3 border-2 text-white border-blue-900 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </div>
        <div className="bg-white text-center p-6 mt-10 rounded shadow-lg w-3/4 max-w-xl">
          <h2 className="text-3xl font-bold text-blue-800">Why Choose Heaviety?</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Heaviety is dedicated to supporting small-scale artisans by providing them with a platform to showcase their products to a global market. We believe in the power of community and the importance of sustainable economic growth.
            <br /><br />
            Join us today and be part of a movement that empowers local talent and celebrates cultural diversity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
