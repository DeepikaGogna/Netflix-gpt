import { useNavigate } from "react-router-dom";
import { auth} from "../utilis/firebase";
import {signOut } from "firebase/auth";
import {removeUser} from "../utilis/userSlice"
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            removeUser();
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="absolute px-16 py-2">
           <img 
           className="w-44"
           src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="NetFlix Logo" />
          { user && (<div>
            <button onClick={handleSignOut}>Sign Out</button>
           </div> )}
        </div>
    )
}

export default Header