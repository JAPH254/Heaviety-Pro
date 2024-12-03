import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios for API requests
import './PasswordReset.scss'; // Import SCSS styling

const ResetPasswordConfirmation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://127.0.0.1:8000/auth/users/login/', { email: data.email });
      setResetSuccess(true);
    } catch (error) {
      setResetError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Password Reset</h1>

        <input
          type="password"
          placeholder="Enter password"
          {...register('email', {
            required: true,
            pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ // Regex for email validation
          })}
        />
        <input
          type="password"
          placeholder="Confirm password"
          {...register('email', {
            required: true,
            pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ // Regex for email validation
          })}
        />
        {errors.email && <span className="error-message">Please enter and confirm your password</span>}

        <button type="submit">Set Password</button>

        {resetSuccess && <span className="success-message">Success</span>}
        {resetError && <span className="error-message">{resetError}</span>}
      </form>
    </div>
  );
};

export default ResetPasswordConfirmation;
