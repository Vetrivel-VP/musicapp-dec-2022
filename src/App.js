import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login } from "./containers";

import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { validateJWTToken } from "./api";
import { setUserDetailAction } from "./context/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Before Rendering");
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateJWTToken(token).then((data) => {
            console.log(data);
            dispatch(setUserDetailAction(data.data));
            navigate("/", { replace: true });
          });
        });
      }
    });
    return () => console.log("After Rendering");
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
