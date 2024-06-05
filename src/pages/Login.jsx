import loginGif from "../assets/login-security.gif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleLoginBtn from "../components/shared/auth/GoogleLoginBtn";
import GithubLoginBtn from "../components/shared/auth/GithubLoginBtn";
import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/firebase.config";
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(form.email, form.password);
    } catch (err) {
      toast.error('Error logging in: ' + err.message);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success('You are logged in successfully!');
      navigate(from, { replace: true } || '/');
    }
  }, [user, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={handleChange}
                value={form.email}
                required
                aria-required="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                onChange={handleChange}
                value={form.password}
                required
                aria-required="true"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            {error && <p className="text-red-500">{error.message}</p>}
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
          <div className="form-control mt-6">
            <GoogleLoginBtn />
            <GithubLoginBtn />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img src={loginGif} alt="Login security illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;


