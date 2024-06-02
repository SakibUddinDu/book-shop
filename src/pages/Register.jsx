import loginGif from "../assets/login-security.gif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleLoginBtn from "../components/shared/auth/GoogleLoginBtn";
import GithubLoginBtn from "../components/shared/auth/GithubLoginBtn";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassWord: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form.email, form.password);
    if (form.password !== form.confirmPassWord) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(form.email, form.password);
      if (auth.currentUser) {
        toast.success('You are logged in successfully')
        navigate(from, { replace: true } || '/');
      }
    } catch (err) {
      toast.error("Error creating user:", err);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your name"
                className="input input-bordered"
                onChange={handleChange}
                value={form.name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={handleChange}
                value={form.password}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirmPassWord"
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                onChange={handleChange}
                value={form.confirmPassWord}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
            {error && <p className="text-red-500">{error.message}</p>}
            <p>
              Already have an account?<Link to="/login"> Login</Link>
            </p>
          </form>
          <GoogleLoginBtn />
          <GithubLoginBtn />
        </div>
        <div className="text-center lg:text-left">
          <img src={loginGif} alt="Login Security" />
        </div>
      </div>
    </div>
  );
}

export default Register;

