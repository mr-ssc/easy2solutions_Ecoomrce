import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe1nSu-Hf7fdACl7IKspOQIur_8A03NQQ",
  authDomain: "ecommerce-5c43c.firebaseapp.com",
  projectId: "ecommerce-5c43c",
  storageBucket: "ecommerce-5c43c.firebasestorage.app",
  messagingSenderId: "549774721384",
  appId: "1:549774721384:web:48621351380489b0dbd6dd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
