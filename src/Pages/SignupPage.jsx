import { Alert } from "@material-tailwind/react";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//import img1 from "../../assets/img3.jpg";
import { auth, provider } from "../firebaseConfig";
import { apiString } from "../services/apicalls";
import { login } from "../services/GlobalState";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loginauth.isLoggedIn);
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  async function createUser(email, firebaseUid) {
    console.log(email, firebaseUid);
    try {
      const createUserData = { email, firebaseUid };
      const resultUser = await axios.post(
        apiString + "/user/signup",
        createUserData
      );
      console.log("User created:", resultUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const checkUser = await axios.get(apiString + `/user/${email}`);

    if (checkUser.minLength < 1) {
      console.log(checkUser, "user exists");
      setUserExists(true);
      setError("Email exists in our system please try loggin in");
      setTimeout(() => setUserExists(false), 10000);
    } else {
      console.log("creating user");
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      localStorage.clear();
      localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
      localStorage.setItem("accesstoken", user.accessToken || "");
      localStorage.setItem("displayName", user.displayName || "");
      localStorage.setItem("email", user.email || "");
      localStorage.setItem("photoURL", user.photoURL || "");
      localStorage.setItem("uid", user.uid || "");

      await createUser(user.email, user.uid);
      dispatch(login({ data: result.user }));
      navigate("/userdashboard");
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.clear();
      localStorage.setItem("auth", user.auth || ""); // Adjust if auth is not needed
      localStorage.setItem("accesstoken", user.accessToken || "");
      localStorage.setItem("displayName", user.displayName || "");
      localStorage.setItem("email", user.email || "");
      localStorage.setItem("photoURL", user.photoURL || "");
      localStorage.setItem("uid", user.uid || "");
      await createUser(user.email, user.uid);
      navigate("/userdashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError("Error signing in with Google. Please try again.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/userdashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="flex h-screen bg-black">
        <img
          className="hidden md:flex md:w-1/2 object-cover opacity-70"
          //src={img1}
          alt="Signup background"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
          {userExists && (
            <Alert color="red" className="w-3/4 text-justify mx-auto my-2 z-50">
              This email already exists in our system, try logging in instead
            </Alert>
          )}
          {error && (
            <Alert color="red" className="w-3/4 text-justify mx-auto my-2 z-50">
              {error}
            </Alert>
          )}
          <h2 className="text-2xl font-bold mb-6 text-center">
            CREATE AN ACCOUNT
          </h2>
          <form className="w-full max-w-xs xl:text-xl" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded"
              ref={emailRef}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded"
              ref={passwordRef}
              minLength="8"
              required
            />
            <button className="w-full p-3 mb-4 bg-black text-white shadow-lg">
              SIGN UP
            </button>
          </form>
          <button
            onClick={signInWithGoogle}
            className="w-full max-w-xs p-3 mx-2 mb-4 border flex items-center justify-center shadow-lg"
          >
            <i className="fa-brands -px-4 fa-google p-2"></i>
            Continue with Google
          </button>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
