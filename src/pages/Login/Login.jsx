import { useContext, useEffect, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bgImage from "../../assets/others/background.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogins from "../Shared/SocialLogins/SocialLogins";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha) == false) {
      setErrorMessage("Captcha Does Not Matched");
      return;
    }

    login(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
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
        <img src={img} className="w-full" alt="" />
        <div>
          <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
            <h3 className="text-center text-3xl font-cinzel font-bold">
              Login
            </h3>

            <p className="text-red-600 font-semibold text-center">
              {errorMessage}
            </p>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                className="input input-bordered"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                className="input input-bordered mb-1 mt-2"
              />
              <button className="hover:underline-offset-1 text-left ml-2 text-sm text-gray-500">
                Forgot password?
              </button>
            </div>

            <LoadCanvasTemplate />

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="captcha">
                Type the word above
              </label>
              <input
                type="text"
                placeholder="Type the word above"
                name="captcha"
                id="captcha"
                className="input input-bordered"
              />
            </div>

            <button
              type="submit"
              className="bg-[#d9b782] w-full text-white p-3 rounded-md"
            >
              Sign In
            </button>

            <p className="mt-6 text-center font-semibold text-[#d9b782]">
              New here?{" "}
              <Link
                to="/register"
                className="hover:underline hover:underline-offset-2"
              >
                Create a New Account
              </Link>
            </p>
          </form>
          <SocialLogins />
        </div>
      </div>
    </div>
  );
};

export default Login;
