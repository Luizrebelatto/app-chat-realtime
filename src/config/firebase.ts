// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseEnvironment from "./firebase.env";

const firebaseConfig = {
  apiKey: firebaseEnvironment.apiKey,
  authDomain: firebaseEnvironment.authDomain,
  projectId: firebaseEnvironment.projectId,
  storageBucket: firebaseEnvironment.storageBucket,
  messagingSenderId: firebaseEnvironment.messagingSenderId,
  appId: firebaseEnvironment.appId,
  measurementId: firebaseEnvironment.measurementId
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);