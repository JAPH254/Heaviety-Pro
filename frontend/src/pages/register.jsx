import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';
import React from 'react';

const CenteredBox = ({ children }) => (
  <div className="flex flex-col min-h-full bg-gradient-to-b from-blue-500 to-purple-600 p-4">
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

const RegisterForm = React.memo(({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isLoading,
  watch,
}) => (
  <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
   
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
    
    <button
      type="submit"
      className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      disabled={isLoading}
    >
      {isLoading ? 'Creating account...' : 'Create Account'}
    </button>
  </form>
));

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  // Use useCallback to memoize the submit handler
  const onSubmitHandler = React.useCallback(async (data) => {
    const { ...userData } = data; // Exclude confirmPassword before sending
    console.log(data);
    try {
      await registerUser(userData).unwrap();
      reset();
      navigate('/activateaccount');
    } catch (err) {
      console.error('Registration failed', err);
    }
  }, [registerUser, reset, navigate]);

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
