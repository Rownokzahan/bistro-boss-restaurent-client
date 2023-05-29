import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogins = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          imageUrl: result?.user?.photoURL,
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="text-center mt-6">
      <p>Or sign in with</p>

      <div className="flex items-center gap-6 justify-center mt-3">
        <button className="p-1 border border-black rounded-full">
          <FaFacebookF />
        </button>

        <button
          onClick={handleSignInWithGoogle}
          className="p-1 border border-black rounded-full"
        >
          <FaGoogle />
        </button>

        <button className="p-1 border border-black rounded-full">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
