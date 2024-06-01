import loginGif from '../assets/login-security.gif'
import { Link } from 'react-router-dom';
import GoogleLoginBtn from '../components/shared/auth/GoogleLoginBtn';

function Register() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already Have an Account?<Link to="/login"> Login </Link></p>
          </form>
          <GoogleLoginBtn/>
        </div>
        <div className="text-center lg:text-left">
          <img src={loginGif} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;