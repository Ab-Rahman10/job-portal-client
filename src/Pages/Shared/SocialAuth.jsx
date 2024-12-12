import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">or</div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center bg-white text-gray-600 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 hover:border-gray-400 transition duration-200 shadow-sm"
      >
        <img
          src="https://img.icons8.com/?size=48&id=17949&format=png"
          alt="Google Logo"
          className="w-5 h-5 mr-2"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialAuth;
