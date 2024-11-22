import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ActivateAccount = () => {
  const { uid, token } = useParams(); // Get uid and token from URL
  const navigate = useNavigate(); // Initialize the navigate function

  const handleActivation = async () => {
    if (!uid || !token) {
      alert("Invalid activation link. Please try again.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/activation/", {
        uid,
        token,
      });

      if (response.status === 200) {
        alert("Account activated successfully.");
        navigate("/login"); // Navigate to the login page
      } else {
        alert("Failed to activate account. Please try again.");
      }
    } catch (error) {
      console.error("Activation error:", error);
      alert(
        "An error occurred while activating the account. Please try again later."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Activate Your Account
        </h1>
        <p className="mb-6 text-gray-600">
          Click the button below to activate your account.
        </p>
        <button
          onClick={handleActivation}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white px-3 py-3 rounded-md hover:bg-blue-700 transition duration-300 mx-auto"
        >
          <CheckCircleIcon className="w-6 h-6" />
          Activate Account
        </button>
      </div>
    </div>
  );
};

export default ActivateAccount;
