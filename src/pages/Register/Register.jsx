import { useContext, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bgImage from "../../assets/others/background.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogins from "../Shared/SocialLogins/SocialLogins";

const Register = () => {
  const { register, setUserInfo } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;

    if (password.length < 6) {
      setErrorMessage("Password can not be less than 6 characters");
      return;
    }

    register(email, password)
      .then(() => {
        // Image Upload In Imgbb
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
        }`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            const imageUrl = data.data.display_url;
            setUserInfo(name, imageUrl)
              .then(() => {
                const user = { name, email, imageUrl };
                fetch(`http://localhost:5000/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(user),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      form.reset();
                      navigate("/login");
                    }
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => {
                console.log(error.message);
              });
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div
      className=" md:p-12 lg:p-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="grid md:grid-cols-2 justify-between md:p-10 p-8 lg:p-16 items-center border"
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <div>
          <form onSubmit={handleSignup} className="w-full max-w-md space-y-6">
            <h3 className="text-center text-3xl font-cinzel font-bold">
              Sign Up
            </h3>

            <p className="text-red-600 font-semibold mt-2 text-center">
              {errorMessage}
            </p>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
                className="input input-bordered"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="input input-bordered pt-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                className="input input-bordered"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                className="input input-bordered mb-1 mt-2"
              />
            </div>

            <button
              type="submit"
              className="bg-[#d9b782] w-full text-white p-3 rounded-md"
            >
              Sign Up
            </button>

            <p className="mt-6 text-center font-semibold text-[#d9b782]">
              Already registered?{" "}
              <Link
                to="/login"
                className="hover:underline hover:underline-offset-2"
              >
                Go to log in
              </Link>
            </p>
          </form>
          <SocialLogins />
        </div>

        <img src={img} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Register;
