import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../firebase/firebase.config";
import axios from "axios";
import editSVG from "../../assets/icons/edit.svg";
import { Link } from "react-router-dom";

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
            `http://localhost:3000/user/${authInfo}`
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
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        <div class="flex flex-col items-center py-8 text-center">
          <div class="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div class="w-full h-full text-white grid place-items-center text-5xl rounded-full">
              {userData?.photoURL ? (
                <img src={userData?.photoURL} alt="" />
              ) : (
                <span class="">{avatar}</span>
              )}
            </div>

            <Link to={`profile/edit/${userData?._id}`} class="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src={editSVG} alt="Edit" />
            </Link>
          </div>
          {/* <!-- name , email --> */}
          <div>
            <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
              {userData?.name}
            </h3>
            <p class="leading-[231%] lg:text-lg">{userData?.email}</p>
          </div>

          {/* <!-- bio --> */}
          <div class="mt-4 flex items-start gap-2 lg:mt-6">
            <div class="flex-1">
              <p class="leading-[188%] text-gray-400 lg:text-lg">
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
    // <div className="h-screen dark:bg-gray-800 flex flex-wrap items-center justify-center">
    //   <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 ease-in-out">
    //     <div className="avatar flex justify-center">
    //       <div className="w-24 rounded-full">
    //         <img src={userData?.photoURL} alt="User Image" />
    //       </div>
    //     </div>
    //     <div className="">
    //       <div className="text-center px-14">
    //         <h2 className="text-gray-800 text-3xl font-bold">{userData?.name}</h2>
    //         <p className="text-center">{userData?.email}</p>
    //         <p className="mt-2 text-gray-500 text-sm">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s,{" "}
    //         </p>
    //       </div>
    //       <hr className="mt-6" />
    //       <div className="flex bg-gray-50">
    //         <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
    //           <p>
    //             <span className="font-semibold">2.5 k </span> Followers
    //           </p>
    //         </div>
    //         <div className="border"></div>
    //         <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
    //           <p>
    //             <span className="font-semibold">2.0 k </span> Following
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DashboardHome;
