import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [currentuser, setCurrentuser] = useState(null);
  const [islogedin, setIslogedin] = useState(false);
  const [loading, setLoading] = useState(true);

  async function initializeUser(user) {
    if (user) {
      setCurrentuser({ ...user });
      setIslogedin(true);
    } else {
      setCurrentuser(null);
      setIslogedin(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const value = {
    currentuser,
    islogedin,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!islogedin && children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
