// Import the functions you need from the SDKs you need
import { initializeApp } from "@react-native-firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "@react-native-firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-7GfA0CIdJSl99pXztCH5CZECxTaZv0",
  authDomain: "tccdb-ea68e.firebaseapp.com",
  projectId: "tccdb-ea68e",
  storageBucket: "tccdb-ea68e.appspot.com",
  messagingSenderId: "1036319619832",
  appId: "1:1036319619832:web:a6bea333d954f3e97a190d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);