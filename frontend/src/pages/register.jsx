import { Link, useNavigate } from 'react-router-dom';  
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation} from './registerApi';

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

  const renderInput = (id, type, label, validation) => (
    <div>
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        {...register(id, validation)}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[id] && <p className="text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {renderInput('username', 'text', 'Username', { required: 'Username is required' })}
            {renderInput('email', 'email', 'Email', { required: 'Email is required' })}
            {renderInput('password', 'password', 'Password', { required: 'Password is required' })}
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
