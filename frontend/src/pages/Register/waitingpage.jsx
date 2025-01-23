import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WaitingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkActivation = setInterval(() => {
      fetch('http://127.0.0.1:8000/auth/users/activation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.status === 204) { // Check if the status code is 204
            console.log('Account activated! Redirecting to login page...');
            clearInterval(checkActivation);
            navigate('/login');
          }
          else if (response.status === 403) {
            console.log('Account already activated');

          }

        })
        .catch(error => {
          console.error('Error checking activation status:', error);
        });
    }, 5000); // Check every 5 seconds

    return () => clearInterval(checkActivation);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-500 to-blue-600 p-4">
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Waiting for Account Activation</h2>
          <p className="mt-4 text-lg text-gray-700">Please check your email and click the activation link.</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingPage;
