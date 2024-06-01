import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
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

initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
// const analytics = getAnalytics(app);