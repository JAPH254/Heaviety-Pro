import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./loginSlice"; // Adjust the path if necessary
import "./Login.scss";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <span className="error-message">{error}</span>}
        <div className="auth-links">
          <p>
            Don&apos;t have an account? <a href="/register">Sign Up</a>
          </p>
          <p>
            Forgot your password? <a href="/forgot-password">Reset Password</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
