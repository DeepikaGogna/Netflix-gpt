import { useNavigate } from "react-router-dom";
import { auth} from "../utilis/firebase";
import {signOut } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO } from "../utilis/constant";
const Header = () => {
    const dispatch = useDispatch();
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

    useEffect(()=> {
      const unsubscibe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user    
              const {uid, email, displayName, photoURL} = user;
              dispatch(
                addUser(
                    {uid: uid, email: email, displayName: displayName, photoURL:photoURL}
                ));
                navigate('/browse')
            } else {
              // User is signed out
                dispatch(removeUser())
                navigate('/')
            }
          });
          //Unscubsribe when component unmounts
          return () => unsubscibe();
    }, [])

    return (
        <div className="absolute px-16 py-2">
           <img 
           className="w-44"
           src={LOGO}
           alt="NetFlix Logo" />
          { user && (<div>
            <button onClick={handleSignOut}>Sign Out</button>
           </div> )}
        </div>
    )
}

export default Header