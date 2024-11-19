import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';

const InputField = ({ id, type, label, register, validation, error }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium text-gray-700">{label}</label>
    <input
      id={id}
      type={type}
      {...register(id, validation)}
      className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data).unwrap();
      reset();
      navigate('/login');
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              id="username"
              type="text"
              label="Username"
              register={register}
              validation={{ required: 'Username is required' }}
              error={errors.username}
            />
            <InputField
              id="email"
              type="email"
              label="Email"
              register={register}
              validation={{ required: 'Email is required' }}
              error={errors.email}
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              register={register}
              validation={{ required: 'Password is required' }}
              error={errors.password}
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <Link to="/login" className="mt-4 block text-blue-600 hover:text-blue-700">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
