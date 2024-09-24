import { useState, useRef } from "react"
import Header from "./Header"
import {checkLoginValidation} from "../utilis/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utilis/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utilis/userSlice"


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: '',
        fullname: ''
      });
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null)

    const ToggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () =>{
        const message =  checkLoginValidation(email.current.value, password.current.value)
        setErrorMessage(message);
        const isEmpty = (message) => Object.keys(message).length === 0;
      if(!isEmpty) return;
      // Sign In Sign Up Logic
      if(!isSignInForm){
        //Sign Up Form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {displayName, photoURL} = auth.currentUser;
            dispatch(
                addUser({
                    displayName : displayName,
                    photoURL: photoURL
                })
            )
            navigate('/browse')
          }).catch((error) => {
            setErrorMessage(error.message);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
      } else {
        console.log('isSignInForm', isSignInForm)
         //Sign IN Form
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
      }

    }
    return (
        <div>
            <Header />
        <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
            alt="bg-Image" />
        </div>
        <div className="w-3/12 absolute mx-auto left-0 right-0">
        <form 
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-black p-8 bg-opacity-80 my-32">
            <h1 className="p-2 font-bold text-3xl mb-3">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
           {!isSignInForm && (  <input
            ref={fullname} 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
           ) }
            <input 
            ref={email}
            type="text" 
            placeholder="Email or Mobile Number" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
             <p className="text-red-700 text-sm">{errorMessage.email}</p>
            <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
            <p className="text-red-700 text-sm">{errorMessage.password}</p>

            <button 
            className="p-2 my-2 w-full bg-red-700 rounded-lg"
            onClick={handleButtonClick}
            >{isSignInForm ? "Sign In" : "Sign Up" }</button>

           <p className="text-l text-center text-gray-400">OR</p>
           <button className="p-2 my-2 w-full bg-gray-500 rounded-lg"
           >Use a sign-in code</button>
           <p className="my-2 text-center">Forgot Password</p>
           <input className="my-2" 
           type="checkbox" /> Remember Me
           <p className="my-2 cursor-pointer" onClick={ToggleSignInForm}>{ isSignInForm ? "New to NetFlix? Sign up now" : "Already Have Account" } </p>
        </form>
        </div>
            </div>
    )
}

export default Login