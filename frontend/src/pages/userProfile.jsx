import React, { useState } from "react";
import { useFetchUserByIdQuery } from "../api/userProfileApi"; // Assuming you have RTK Query setup

const UserProfile = ({ userId }) => {
  const { data: user, isLoading, isError } = useFetchUserByIdQuery(userId);
  const [editMode, setEditMode] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !user) return <p>Error loading user data.</p>;

  const renderContactInfo = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Contact</h3>
      <ul>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li>
          <strong>Mobile:</strong> {user.mobile}
        </li>
        <li>
          <strong>Website:</strong> <a href={user.website} className="text-teal-500">{user.website}</a>
        </li>
      </ul>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Information</h3>
      <ul>
        <li>
          <strong>Birthday:</strong> {user.birthday}
        </li>
        <li>
          <strong>Pronouns:</strong> {user.pronouns}
        </li>
        <li>
          <strong>Languages:</strong> {user.languages?.join(", ")}
        </li>
        <li>
          <strong>Hometown:</strong> {user.hometown}
        </li>
        <li>
          <strong>Interests:</strong> {user.interests?.join(", ")}
        </li>
      </ul>
    </div>
  );

  const renderWorkInfo = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Work</h3>
      <ul>
        <li>
          <strong>Job Title:</strong> {user.jobTitle}
        </li>
        <li>
          <strong>Company:</strong> {user.company}
        </li>
        <li>
          <strong>Department:</strong> {user.department}
        </li>
        <li>
          <strong>Location:</strong> {user.location}
        </li>
        <li>
          <strong>Office:</strong> {user.officeType}
        </li>
      </ul>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Section */}
      {user.coverImage && (
        <div
          className="relative h-48 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${user.coverImage})` }}
        >
          <button
            className="absolute top-2 right-2 bg-white text-gray-600 px-4 py-2 rounded-md shadow hover:bg-gray-200"
            onClick={() => setEditMode(!editMode)}
          >
            Edit Cover
          </button>
        </div>
      )}

      {/* Profile Header */}
      <div className="relative -mt-16 mx-auto w-11/12 max-w-6xl">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.pronouns}</p>
            <p className="text-green-600">{user.status || "Available"}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center mt-6 border-b">
        <button className="px-4 py-2 text-gray-700 border-b-2 border-teal-500 font-bold">
          Activity
        </button>
        <button className="px-4 py-2 text-gray-700">Information</button>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 mx-auto max-w-6xl">
        {renderContactInfo()}
        {renderPersonalInfo()}
        {renderWorkInfo()}
      </div>
    </div>
  );
};

export default UserProfile;
