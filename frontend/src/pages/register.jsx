import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';

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

// RegisterForm: A form component
const RegisterForm = ({ onSubmit, register, handleSubmit, errors, isLoading }) => (
  <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
      <input
        id="firstName"
        type="text"
        {...register('firstName', { required: 'First name is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
    </div>

    <div>
      <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...register('lastName', { required: 'Last name is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
    </div>

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

    <div>
      <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
      <input
        id="phone"
        type="tel"
        {...register('phone', {
          required: 'Phone number is required',
          pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' },
        })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
    </div>

    <div>
      <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
      <input
        id="address"
        type="text"
        {...register('address', { required: 'Address is required' })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
    </div>

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

    <button
      type="submit"
      className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      disabled={isLoading}
    >
      {isLoading ? 'Creating account...' : 'Create Account'}
    </button>
  </form>
);

// Register: The main registration page
const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      await registerUser(data).unwrap();
      reset();
      navigate('/login');
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <CenteredBox>
      <Heading />
      <RegisterForm
        onSubmit={onSubmitHandler}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isLoading={isLoading}
      />
      <Link to="/login" className="mt-4 block text-blue-600 hover:text-blue-700">
        Already have an account? Login
      </Link>
    </CenteredBox>
  );
};

export default Register;
