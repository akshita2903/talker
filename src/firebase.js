// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "learning-firebase-4a0e5",
  storageBucket: "learning-firebase-4a0e5.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-XM8Q9PZ82P"
};

// Initialize Firebase
 const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=firebaseApp.firestore();
const auth=firebase.auth();
//google login ke liye
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;