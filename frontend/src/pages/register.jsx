import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from './registerApi';

// FormContainer wraps the entire form.
function FormContainer() {
  return (
    <FormWrapper>
      <Form>
        <FormEntry labelName="Username" inputType="text" />
        <FormEntry labelName="Email" inputType="email" />
        <FormEntry labelName="Password" inputType="password" />
      </Form>
    </FormWrapper>
  );
}

// FormWrapper holds the layout of the form.
function FormWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md text-center">
          {children}
        </div>
      </div>
    </div>
  );
}

// Form handles the form submission logic.
function Form({ children }) {
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
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {children}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
}

// FormEntry renders the individual input field with its label.
function FormEntry({ labelName, inputType }) {
  const { register, formState: { errors } } = useForm();

  return (
    <div>
      <label htmlFor={labelName} className="block text-lg font-medium text-gray-700">
        {labelName}
      </label>
      <input
        id={labelName}
        type={inputType}
        {...register(labelName, { required: `${labelName} is required` })}
        className="mt-2 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[labelName] && <p className="text-red-500 text-sm">{errors[labelName].message}</p>}
    </div>
  );
}

// Register page
const Register = () => {
  return (
    <FormContainer>
      <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
      <FormContainer />
      <Link to="/login" className="mt-4 block text-blue-600 hover:text-blue-700">
        Already have an account? Login
      </Link>
    </FormContainer>
  );
};

export default Register;
