import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/Store/userSlice";
import AuthBody from "./AuthenticBody/AuthBody";
import Browse from "./Browse/Browse";
import { auth } from "../Utils/firebase";


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

  // Check wheather user exist or not if yes, put the user object in redux store.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthBody />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
