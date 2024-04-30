import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCfemrop7PwmiOjm7i1yCeLhP-VMJnfOgQ",
  authDomain: "react-webpages-d76fe.firebaseapp.com",
  projectId: "react-webpages-d76fe",
  storageBucket: "react-webpages-d76fe.appspot.com",
  messagingSenderId: "827696850042",
  appId: "1:827696850042:web:f4915bcddcd50bead947c3",
  measurementId: "G-7Q5090C6BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { auth,provider };