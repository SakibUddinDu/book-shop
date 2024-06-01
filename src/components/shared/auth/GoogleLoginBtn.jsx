import { FaGoogle, FaGithub } from "react-icons/fa";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { auth } from "../../../firebase/firebase.config";
import { useEffect } from "react";

function GoogleLoginBtn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
// console.log(from)
  const handleGoogleLogin = () => {
    console.log("clicked");
    signInWithGoogle();
    // navigate(from, { replace: true })
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-3/4 bg-indigo-600 mt-3 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 flex items-center justify-center"
        onClick={() => handleGoogleLogin()}
      >
        <FaGoogle className="h-5" />
        Login
      </button>
    </div>
  );
}

export default GoogleLoginBtn;
