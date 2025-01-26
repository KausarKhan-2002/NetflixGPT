import Signed from "./Components/AuthenticBody/Signed";
import Header from "./Components/AuthenticBody/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Utils/Store/userSlice";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import AuthBody from "./Components/AuthenticBody/AuthBody";
import Browse from "./Components/Browse/Browse";

function App() {
  const dispatch = useDispatch();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AuthBody />} />
        <Route path="/browse" element={<Browse />} />
      </>
    )
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
