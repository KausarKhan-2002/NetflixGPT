import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./Store/userSlice";

const authentication = (
  isSignIn,
  name,
  myEmail,
  password,
  phoneNumber,
  setErrorMsg,
  navigate,
  dispatch,
) => {
  if (!isSignIn) {
    createUserWithEmailAndPassword(
      auth,
      myEmail.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // Update profile...
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://e2.365dm.com/13/05/800x600/168311249_2941386.jpg?20130813223857",
        })
          .then(() => {
            // Profile updated!
            name.current.value = "";
            myEmail.current.value = "";
            password.current.value = "";
            phoneNumber.current.value = "";

            const {uid, email, displayName, photoURL} = auth.currentUser

            // console.log(auth);
            

            // Updating profile
            dispatch(addUser({uid, email, displayName, photoURL}))


            navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setErrorMsg(errorCode, errorMessage);
      });
  } else {
    signInWithEmailAndPassword(
      auth,
      myEmail.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode, errorMessage);
      });
  }
};

export default authentication;
