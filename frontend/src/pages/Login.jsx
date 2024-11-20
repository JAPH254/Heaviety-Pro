// src/components/Login.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; 
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './loginSlice'; // Adjust the path if necessary
import { useEffect } from 'react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        // Dispatch login action with email and password
        dispatch(login({ email: data.email, password: data.password }));
    };

    useEffect(() => {
        if (error) {
            console.error('Login failed', error);
        }
    }, [error]);
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                        required: true,
                        pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ // Regex for email validation
                    })}
                />
                {errors.email && <span className="error-message">Please enter a valid email address</span>}

                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true, minLength: 8 })}
                />
                {errors.password && <span className="error-message">Password must be at least 8 characters long</span>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                {error && <span className="error-message">{error}</span>}

                
                
            </form>
        </div>
    );
};

export default Login;
