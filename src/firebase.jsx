// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXstppuydSivO8spprJ9hqBc4v6Llntw",
  authDomain: "auth-test-d3c4c.firebaseapp.com",
  projectId: "auth-test-d3c4c",
  storageBucket: "auth-test-d3c4c.appspot.com",
  messagingSenderId: "584321985876",
  appId: "1:584321985876:web:7448592bf0bc7462dd2cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;