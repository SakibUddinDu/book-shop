import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import editSVG from "../../assets/icons/edit.svg";
import { auth } from "./../../firebase/firebase.config";

function DashboardHome() {
  const [userData, setUserData] = useState();
  console.log(userData);

  const [user, loading, error] = useAuthState(auth);
  const { photoURL, email } = user || {};
  const authInfo = email || photoURL;
  const avatar = userData?.name?.slice(0, 1);

  useEffect(() => {
    if (authInfo) {
      const loader = async () => {
        try {
          const response = await axios.get(
            `https://bookshop-backend-x3im.onrender.com/user/${authInfo}`
          );
          console.log(response.data);
          if (response.status === 200) {
            setUserData(response.data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      loader();
    }
  }, [authInfo]);

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <div className="flex flex-col items-center py-8 text-center">
          <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div className="w-full h-full text-white grid place-items-center text-5xl rounded-full">
              {userData?.photoURL ? (
                <img src={userData?.photoURL} alt="" />
              ) : (
                <span className="">{avatar}</span>
              )}
            </div>

            <Link to={`profile/edit/${userData?._id}`} className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src={editSVG} alt="Edit" />
            </Link>
          </div>
          {/* <!-- name , email --> */}
          <div>
            <h3 className="text-2xl font-semibold lg:text-[28px]">
              {userData?.name}
            </h3>
            <p className="leading-[231%] lg:text-lg">{userData?.email}</p>
          </div>

          {/* <!-- bio --> */}
          <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
              <p className="leading-[188%] text-gray-400 lg:text-lg">
                {userData?.name} is an entrepreneurial visionary known for his exceptional
                performance and passion for technology and business. He
                established a company in 2008 while he was a student at
                Bangladesh University of Engineering & Technology (BUET).
                The company has since become a top-tier Web and Mobile Application
                Development firm and the first Digital and Social Media
                Marketing Agency in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default DashboardHome;
