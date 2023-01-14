import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-logo'>
        <img src='/logo512.png' alt='ReactJs logo' width={30} height={30} />
        <h1>React Chat</h1>
      </div>
      {user ? (
        <button onClick={signOut} className='sign-out' type='button'>
          Sign Out
        </button>
      ) : (
        <button className='sign-in'>
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt='sign in with google'
            type='button'
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
