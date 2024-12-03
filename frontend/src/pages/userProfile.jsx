import React from 'react';
import { useFetchUserByIdQuery } from './userProfileApi';

const UserProfile = () => {
  const { data: user, isLoading, isError, error } = useFetchUserByIdQuery();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-center text-primary">User Profile</h2>

          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : isError ? (
            <p className="text-red-500 text-center">Failed to fetch user profile: {error.message}</p>
          ) : user ? (
            <div className="space-y-4">
              <div>
                <span className="font-bold text-gray-700">First Name:</span>
                <p className="text-gray-600">{user.first_name}</p>
              </div>
              <div>
                <span className="font-bold text-gray-700">Last Name:</span>
                <p className="text-gray-600">{user.last_name}</p>
              </div>
              <div>
                <span className="font-bold text-gray-700">Email:</span>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">No user data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
