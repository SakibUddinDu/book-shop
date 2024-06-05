import axios from "axios";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";

function GoogleLoginBtn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      const data = await signInWithGoogle();
      if (data?.user?.email) {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
          photoURL: data.user.photoURL
        };
        const response = await axios.post("https://bookshop-backend-x3im.onrender.com/user", userInfo, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        await localStorage.setItem("token", response.data.token)
        // console.log(response.data.token);
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login error: " + error.message);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success("You logged in successfully");
      navigate(from, { replace: true } || "/");
    }
  }, [user, from, navigate]);

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-3/4 bg-indigo-600 mt-3 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 flex items-center justify-center"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="h-5 mr-2" />
        Login
      </button>
    </div>
  );
}

export default GoogleLoginBtn;
