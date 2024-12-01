import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';
import { ScaleLoader } from 'react-spinners';
import React from 'react';

// CenteredBox: A layout component for centering content
const CenteredBox = ({ children }) => (
  <div className="flex flex-col min-h-full bg-gradient-to-b from-blue-500 to-purple-600 p-4">
    <div className="flex items-center justify-center flex-grow">
      <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
        {children}
      </div>
    </div>
  </div>
);

// Heading: A component for the heading
const Heading = () => (
  <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
);

// RegisterForm: A form component for registration
const RegisterForm = ({ onSubmit, register, handleSubmit, errors, isLoading, watch }) => (
  <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
    {/* First Name */}
    <div>
      <label htmlFor="first_name" className="block text-lg font-medium text-gray-700">First Name</label>
      <input
        id="first_name"
        type="text"
        {...register('first_name', { required: 'First name is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
    </div>
    {/* Last Name */}
    <div>
      <label htmlFor="last_name" className="block text-lg font-medium text-gray-700">Last Name</label>
      <input
        id="last_name"
        type="text"
        {...register('last_name', { required: 'Last name is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
    </div>
    {/* Username */}
    <div>
      <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
      <input
        id="username"
        type="text"
        {...register('username', { required: 'Username is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
    </div>
    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>
    {/* Password */}
    <div>
      <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
      <input
        id="password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
    </div>
    {/* Confirm Password */}
    <div>
      <label htmlFor="re_password" className="block text-lg font-medium text-gray-700">Confirm Password</label>
      <input
        id="re_password"
        type="password"
        {...register('re_password', {
          required: 'Please confirm your password',
          validate: (value) => value === watch("password") || 'Passwords do not match',
        })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.re_password && <p className="text-red-500 text-sm">{errors.re_password.message}</p>}
    </div>
    {/* Submit Button */}
    <button
      type="submit"
      className={`w-full px-6 py-3 ${
        isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      } text-white font-bold rounded-lg transition duration-300 ease-in-out`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <ScaleLoader height={15} width={4} color="#ffffff" />
        </div>
      ) : (
        'Create Account'
      )}
    </button>
  </form>
);

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  // Memoized submit handler using React.useCallback
  const onSubmitHandler = React.useCallback(
    async (data) => {
      try {
        console.log('Request payload:', data);
        await registerUser(data).unwrap();
        reset();
        navigate('/activateaccout');
      } catch (error) {
        if (error.originalStatus === 500) {
          console.error('Server error: Check backend implementation.');
        } else {
          console.error('Registration failed', error);
        }
      }
    },
    [registerUser, reset, navigate] // Dependencies
  );

  return (
    <CenteredBox>
      <Heading />
      <RegisterForm
        onSubmit={onSubmitHandler}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isLoading={isLoading}
        watch={watch}
      />
      <Link to="/login" className="mt-4 block text-blue-600 hover:text-blue-700">
        Already have an account? Login
      </Link>
    </CenteredBox>
  );
};

export default Register;
   