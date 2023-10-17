import React, { useContext, createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import auth from "./firebaseconfig";
const AuthContext = createContext({});
export const useAuth =()=>useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider=new GoogleAuthProvider()
 
  const register1 = async(email, password, username) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async(email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };
  const googleLogin=async()=>{
    return await signInWithPopup(auth, googleProvider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe();
  }, [register1,login,logout,googleLogin]);
    return (
    <AuthContext.Provider value={{ user, login, logout, register1,googleLogin }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};