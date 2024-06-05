import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const userData = useLoaderData();
  console.log(userData);
  const [formData, setFormData] = useState({
    email: userData?.email,
    name: userData?.name,
    photoURL: userData?.photoURL,
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");

    e.preventDefault();
    try {
      await axios.patch(
        `https://bookshop-backend-x3im.onrender.com/user/${userData?._id}`,
        formData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
      toast.success("UserProfile updated Successfully!", { autoClose: 3000 });
    } catch (error) {
      console.error("Error updating UserProfile:", error);
      toast.error("Oops! An error occurred. Please try again later.");
    }
    console.log("clicked");
  };

  return (
    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
      <h1 className="text-center mt-10 text-xl">Edit Profile</h1>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            name="name"
            type="name"
            placeholder="name"
            className="input input-bordered"
            onChange={handleChange}
            defaultValue={userData.name}
            required
            aria-required="true"
          />
        </div>
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
            defaultValue={userData.email}
            required
            disabled
            aria-required="true"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="photoURL">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            id="photoURL"
            name="photoURL"
            type="photoURL"
            placeholder="photoURL"
            className="input input-bordered"
            onChange={handleChange}
            defaultValue={userData.photoURL}
            required
            aria-required="true"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
        {/* {error && <p className="text-red-500">{error.message}</p>} */}
      </form>
    </div>
  );
}

export default EditProfile;
