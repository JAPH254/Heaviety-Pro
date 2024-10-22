import { useForm } from "react-hook-form";
import './Login.scss';
import axios from "axios";

const Login = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();


const onSubmit = async (data) => {
    try {
        await axios.post('http://localhost:8080/api/login', {
            email: data.email,
            password: data.password,
        });
        console.log('You have logged in successfully');
    } catch (error) {
        console.error('Login failed',error);
    }
}

return(
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <input
             type="email" 
             placeholder="Email" 
             {...register('email', {required: true, pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/})} />
            {errors.email && <span className="error-message">Please enter a valid email address</span>}
            <input
             type="password" 
             placeholder="Password" 
             {...register('password', {required: true, minLength: 8})} />
             {errors.password && <span className="error-message">Password must be at least 8 characters long</span>}
             <button type="submit">Login</button>
             <p>Don&apos;t have an account? <a href="/signup">Sign up</a></p>
             <p>Forgot your password? <a href="/reset-password">Reset password</a></p>
 
        </form>
            
    </div>
)
};
export default Login;