
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./inputfield"; 
import FormHeader from "./formHeader"; 
import FormButton from "./formButton"; 

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("Registration data:", data);
      
      
      const REGISTER_URL = "YOUR_API_ENDPOINT_HERE"; 

      // Use fetch to send the registration data
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      
      reset(); // Reset the form
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
