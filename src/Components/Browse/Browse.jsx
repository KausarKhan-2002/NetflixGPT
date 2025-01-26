import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <section>
      <div className={`fixed w-full top-0 left-0`}>
        <div className="customShadow" />
        <div className="flex justify-between items-center px-32 py-2">
          <img
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          />

          <div className="flex gap-4 items-center">
            <button
              onClick={handleSignout}
              className="text-white bg-red-600 hover:shadow-xl active:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign out
            </button>
            <img src={user?.photoURL} className="w-12 h-12 object-cover rounded-full" />

            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
