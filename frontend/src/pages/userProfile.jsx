import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile,updateUserProfile,clearMessages,} from './userProfileSlice';
import './UserProfile.scss';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, status, error, success } = useSelector((state) => state.userProfile);

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile on mount
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Sync form data with state
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
      });
      setPreviewImage(user.profile_image);
    }
  }, [user]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append('username', formData.username);
    updatedData.append('first_name', formData.first_name);
    updatedData.append('last_name', formData.last_name);
    if (profileImage) {
      updatedData.append('profile_image', profileImage);
    }

    dispatch(updateUserProfile(updatedData));
  };

  // Clear success/error messages after some time
  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
    }
  }, [success, error, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        {previewImage && (
          <img src={previewImage} alt="Profile" className="profile-preview" />
        )}
        {!isEditing && (
          <button
            type="button"
            className="edit-button"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {isEditing && (
          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}
        {isEditing && <button type="submit">Save Changes</button>}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UserProfile;
