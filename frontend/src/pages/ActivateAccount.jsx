
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(""); 
  const [showAlert, setShowAlert] = useState(false); 

  const handleActivation = async () => {
    if (!uid || !token) {
      setAlertMessage("Invalid activation link. Please try again.");
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/activation/", {
        uid,
        token,
      });

      if (response.status === 200) {
        setAlertMessage("Account activated successfully.");
        setShowAlert(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setAlertMessage("Failed to activate account. Please try again.");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Activation error:", error);
      setAlertMessage(
        "An error occurred while activating the account. Please try again later."
      );
      setShowAlert(true);
    }
  };

  const CustomAlert = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p className="text-gray-800 text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full"
        >
          OK
        </button>
      </div>
    </div>
  );

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
          onClose={() => setShowAlert(false)} // Close alert on button click
        />
      )}
    </div>
  );
};

export default ActivateAccount;
