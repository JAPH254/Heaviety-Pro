import  { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(""); 
  const [showAlert, setShowAlert] = useState(false); 

  const handleActivation = useCallback(async () => {

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/activation/", {
        uid,
        token,
      });

      setAlertMessage(response.data?.message|| "Account activated successfully");
      setShowAlert(true);
      if (response.status === 204) {
        console.log("Account activated! Redirecting to login page...");
        setTimeout(() => navigate("/login"), 2000);
      } 
      else if(response.status ===403)
        console.log("Error activating account");
      
    } catch (error) {
      console.error("Activation error:", error);
      const errorMessage = error.response?.data?.message || "Error activating account";
      setAlertMessage(errorMessage);
      setShowAlert(true);
    }
  }, [uid, token, navigate]);

  const handleAlertClose = useCallback(() => {
    setShowAlert(false);
  }, []);

  const CustomAlert = ({ message, type = "info", onClose }) => {
    const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <p className="text-gray-800 text-center font-medium mb-4">{message}</p>
          <button
            onClick={onClose}
            className={`${bgColor} text-white px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300 w-full font-semibold`}
          >
            OK
          </button>
        </div>
      </div>
    );
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

      {/* Render CustomAlert if showAlert is true */}
      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={handleAlertClose} // Pass the memoized function
        />
      )}
    </div>
  );
};

export default ActivateAccount;
