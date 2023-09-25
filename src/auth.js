import { useState } from "react"
import { auth, googleProvider } from "./databaseConfig.js"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export default function Authentication() {
    let signedIn = true;

    const signInWithGoogle = async () => {
        try{
        await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    try{
        console.log(auth?.currentUser?.displayName)
    } catch(error){
        signedIn = false;
    }
    const logOut = async () => {
        try{
        await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className="signinout">
            {signedIn && <div className="signin">
             <button onClick={signInWithGoogle}>  Sign in with Google</button>
            </div>}
            <br></br>
            {signedIn &&<div className="signout">
             <button onClick={logOut}>Log Out</button>
            </div>}
        </div>
    )
}