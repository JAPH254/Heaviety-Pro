
// Register.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField"; // Ensure this component is correctly implemented
import FormHeader from "./FormHeader"; // Ensure this component is correctly implemented
import FormButton from "./FormButton"; // Ensure this component is correctly implemented

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("Registration successful:", data);
      // Here you would typically call an API to register the user
      reset();
      navigate("/login"); // Navigate to login page
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 items-center justify-center px-6 py-12 lg:px-8">
      <div className="bg-white p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md">
        <FormHeader title="Create your account" />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputField id="username" label="Username" register={register} required />
          <InputField id="fullName" label="Full Name" register={register} required />
          <InputField id="email" label="Email address" type="email" register={register} required />
          <InputField id="contactPhone" label="Contact Phone" type="tel" register={register} required />
          <InputField id="password" label="Password" type="password" register={register} required />
          <InputField id="address" label="Address" register={register} required />
          <FormButton label="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
