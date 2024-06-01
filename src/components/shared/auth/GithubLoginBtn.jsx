
import { FaGithub } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from './../../../firebase/firebase.config';
import { useEffect } from 'react';


function GithubLoginBtn() {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
// console.log(from)
  const handleGithubLogin = () => {
    console.log("clicked");
    signInWithGithub();
    if (auth.currentUser) {
      navigate("/");
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true } || '/');
  //   }
  // }, [user, from, navigate]);
    return (
        <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 bg-indigo-600 mt-3 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 flex items-center justify-center"
              
            >
              <FaGithub onClick={() =>handleGithubLogin()} className="h-5" />
              Login
            </button>
          </div>
    )
}

export default GithubLoginBtn