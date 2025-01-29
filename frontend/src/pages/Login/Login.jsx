import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin, login } from "./loginSlice"; // Import both login methods
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./Login.scss";

const FormGroup = ({ type, placeholder, registerProps, error }) => (
  <div className="form-group">
    <input type={type} placeholder={placeholder} {...registerProps} />
    {error && <span className="error-message">{error}</span>}
  </div>
);

const AuthLinks = () => (
  <div className="auth-links">
    <p>Don&apos;t have an account? <a href="/register">Sign Up</a></p>
    <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p>
  </div>
);

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const DASHBOARD_ROUTE = "/dashboard";

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(login({ email: data.email, password: data.password })).unwrap();
      localStorage.setItem("refresh", response.refresh);
      localStorage.setItem("access", response.access);
      navigate(DASHBOARD_ROUTE);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [isAuthenticated, navigate]);

  // Google login function
  const googleLoginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await dispatch(googleLogin(tokenResponse.access_token)).unwrap();
        navigate(DASHBOARD_ROUTE);
      } catch (err) {
        console.error("Google Login failed:", err);
      }
    },
    onError: () => console.error("Google login failed"),
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <FormGroup
          type="email"
          placeholder="Email"
          registerProps={register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />
        <FormGroup
          type="password"
          placeholder="Password"
          registerProps={register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <button type="button" className="google-login-btn" onClick={() => googleLoginHandler()}>
          Login with Google
        </button>
        {error && <span className="error-message">{error}</span>}
        <AuthLinks />
      </form>
    </div>
  );
};

export default Login;
