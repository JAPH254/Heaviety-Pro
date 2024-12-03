import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './PasswordReset.scss';
import BASE_URL from './baseUrl';

const PasswordReset = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');
  const token = localStorage.getItem('access') || '';

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${BASE_URL}/auth/users/reset_password/`,
        { email: data.email },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      setResetSuccess(true);
      setResetError('');
    } catch (error) {
      setResetSuccess(false);
      setResetError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Password Reset</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: 'Please enter a valid email address',
              },
            })}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </button>


        {resetSuccess && <span className="success-message">Check your email for the reset link!</span>}

        {resetError && <span className="error-message">{resetError}</span>}
      </form>
    </div>
  );
};

export default PasswordReset;
