import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const docreateuserwithemailandpassword = async (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
}
export const dosigninwithemailandpassword=async (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
export const dosignwithgoogle=async()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result;
}
export const dosignout=async()=>{
    return auth.signOut();
}