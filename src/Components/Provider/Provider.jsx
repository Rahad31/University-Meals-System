import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, name, image) => {
    setLoading(true);
    // let Name = name;console.log("ok");
    // let Img = image;
    // console.log(name, image);
    createUserWithEmailAndPassword(auth, email, password);
    const navigate = useNavigate()
      .then((result) => {
        toast("Successfully Register and Login");

        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        });
        navigate("/");
      })
      .catch((error) => {
        // ..
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current value of the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <div>
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
