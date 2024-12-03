import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';
import { ScaleLoader } from 'react-spinners';

const CenteredBox = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
    <div className="flex items-center justify-center flex-grow">
      <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
        {children}
      </div>
    </div>
  </div>
);

const Heading = () => (
  <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
);

const RegisterForm = ({ onSubmit, register, handleSubmit, errors, isLoading, watch }) => (
  <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
    {[
      { id: 'first_name', label: 'First Name', type: 'text', validation: { required: 'First name is required' } },
      { id: 'last_name', label: 'Last Name', type: 'text', validation: { required: 'Last name is required' } },
      { id: 'username', label: 'Username', type: 'text', validation: { required: 'Username is required' } },
      { id: 'email', label: 'Email', type: 'email', validation: { required: 'Email is required' } },
      { id: 'password', label: 'Password', type: 'password', validation: { required: 'Password is required' } },
      {
        id: 're_password',
        label: 'Confirm Password',
        type: 'password',
        validation: {
          required: 'Please confirm your password',
          validate: (value) => value === watch('password') || 'Passwords do not match',
        },
      },
    ].map(({ id, label, type, validation }) => (
      <div key={id}>
        <label htmlFor={id} className="block text-lg font-medium text-gray-700">
          {label}
        </label>
        <input
          id={id}
          type={type}
          {...register(id, validation)}
          className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors[id] && <p className="text-red-500 text-sm">{errors[id].message}</p>}
      </div>
    ))}

    <button
      type="submit"
      className={`w-full px-6 py-3 text-white font-bold rounded-lg transition duration-300 ease-in-out ${
        isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      }`}
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

  const onSubmitHandler = React.useCallback(
    async (data) => {
      try {
        await registerUser(data).unwrap();
        reset(); 
        navigate('/activate/:uid/:token');
      } catch (error) {
        if (error.originalStatus === 500) {
          console.error('Server error: Check backend implementation.');
        } else {
          console.error('Registration failed', error);
        }
      }
    },
    [registerUser, reset, navigate]
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
