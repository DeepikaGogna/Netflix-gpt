import { useState } from "react"
import Header from "./Header"
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const ToggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
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
        <form className="text-white bg-black p-8 bg-opacity-80 my-32">
            <h1 className="p-2 font-bold text-3xl mb-3">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
           {!isSignInForm && (  <input 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
           ) }
            <input 
            type="text" 
            placeholder="Email or Mobile Number" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
            <input 
            type="password" 
            placeholder="Password" 
            className="p-4 my-2 w-full bg-gray-800 rounded-lg" />
            <button className="p-2 my-2 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up" }</button>
           <p className="text-l text-center text-gray-400">OR</p>
           <button className="p-2 my-2 w-full bg-gray-500 rounded-lg">Use a sign-in code</button>
           <p className="my-2 text-center">Forgot Password</p>
          
           <p className="my-2 cursor-pointer" onClick={ToggleSignInForm}>{ isSignInForm ? "New to NetFlix Sign up now" : "Already Have Account" } </p>
        </form>
        </div>
            </div>
    )
}

export default Login