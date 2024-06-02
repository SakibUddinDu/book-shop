import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LogoutBtn from "./auth/LogoutBtn";
import { auth } from "./../../firebase/firebase.config";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const avatar = user?.displayName?.slice(0, 1) || "U";
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" >
          <img className="h-12 w-24" src="https://bookpress.themeperch.net/multi/wp-content/themes/bookpress/assets/images/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user? (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn ml-4">
              Login
            </Link>
          </>
        ) : (
          <>
            <LogoutBtn />

            <div className="avatar placeholder ml-2">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs">{avatar}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
