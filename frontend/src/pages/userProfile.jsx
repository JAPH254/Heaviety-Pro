import { useFetchUserByIdQuery } from './userProfileApi';

const UserProfile = () => {
  const { data: user, isLoading, isError, error } = useFetchUserByIdQuery();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="card w-96 bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-center text-blue-600">User Profile</h2>

          {isLoading ? (
            <div className="flex justify-center items-center my-4">
              <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
          ) : isError ? (
            <p className="text-red-500 text-center">Failed to fetch user profile: {error?.message}</p>
          ) : user ? (
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={user.profile_image || '/default-profile.png'}
                  alt=""
                  className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
                />
              </div>
              {/* Editable Fields */}
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
              <div>
                <span className="font-bold text-gray-700">Phone:</span>
                <p className="text-gray-600">{user.phone || 'Not provided'}</p>
              </div>
              <div>
                <span className="font-bold text-gray-700">Address:</span>
                <p className="text-gray-600">{user.address || 'Not provided'}</p>
              </div>
              <div>
                <span className="font-bold text-gray-700">Bio:</span>
                <p className="text-gray-600">{user.bio || 'No bio available'}</p>
              </div>
              {/* Image Upload */}
              <div>
                <label
                  htmlFor="profile-image"
                  className="block text-lg font-medium text-gray-700"
                >
                  {/* Upload Profile Image */}
                </label>
                <input
                  id="profile-image"
                  type="file"
                  className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                />
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
