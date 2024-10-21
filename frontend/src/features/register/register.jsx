import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./inputfield"; 
import FormHeader from "./formHeader"; 
import FormButton from "./formButton"; 

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // Function to sanitize user input
  const sanitizeInput = (input) => {
    if (typeof input === 'string') {
      return input.replace(/[\n\r]/g, ''); // Basic sanitization
    }
    // If the input is an object, sanitize all string properties
    if (typeof input === 'object' && input !== null) {
      return Object.keys(input).reduce((acc, key) => {
        acc[key] = sanitizeInput(input[key]);
        return acc;
      }, {});
    }
    return input; // Return input as is if it doesn't match above criteria
  };

  const onSubmit = async (data) => {
    try {
      // Sanitize registration data before logging
      const sanitizedData = sanitizeInput(data);
      console.log("Registration data:", sanitizedData);
      
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
      // Sanitize result before logging
      const sanitizedResult = sanitizeInput(result);
      console.log("Registration successful:", sanitizedResult);
      
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
