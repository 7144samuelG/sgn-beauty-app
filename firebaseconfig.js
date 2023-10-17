// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth, initializeAuth} from "firebase/auth"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {
  getReactNativePersistence,
} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBP1vKUm7zArgL0edoFGznscDw8UpwFZW0",
  authDomain: "coffee-shop-33a17.firebaseapp.com",
  projectId: "coffee-shop-33a17",
  storageBucket: "coffee-shop-33a17.appspot.com",
  messagingSenderId: "586234042803",
  appId: "1:586234042803:web:df8b6ed810ba2ff89253c6",
  measurementId: "G-XHP54GR027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth