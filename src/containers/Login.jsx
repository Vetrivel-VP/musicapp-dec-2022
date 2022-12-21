import React from "react";
import BgVideo from "../assets/video/bg.mp4";

import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateJWTToken } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const firebaseAuth = getAuth(app);
  const google_provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, google_provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((userCred) => {
        if (userCred) {
          userCred.getIdToken().then((token) => {
            validateJWTToken(token).then((data) => {
              console.log(data);
              navigate("/", { replace: true });
            });
          });
        }
      });
    });
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 object-cover"
        src={BgVideo}
        autoPlay
        loop
        muted
        type="video/mp4"
      />

      <div className="z-10 w-full h-full flex flex-col items-center justify-center bg-bgOverlay ">
        <div className="bg-lightOverlay px-6 py-4 rounded-md backdrop-blur-md flex flex-col items-center justify-center gap-6">
          <p className="text-xl text-gray-200 font-semibold ">
            Sign-in with following
          </p>

          <motion.div
            onClick={loginWithGoogle}
            whileTap={{ scale: 0.65 }}
            className="flex items-center justify-center w-full gap-3 bg-lightOverlay backdrop-blur-md px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-300"
          >
            <FcGoogle className="text-3xl" />
            <p>Sing-in with Google</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
