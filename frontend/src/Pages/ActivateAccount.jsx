import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ActivateAccount = () => {
  const handleActivation = () => {

    alert('Account activated successfully!');
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
        {/* Centering the button */}
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
