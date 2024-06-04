import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore, collection } from "firebase/firestore";
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

// initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const database = getFirestore(app);
export const usersRef = collection(database, 'users')
export const chatsRef = collection(database, 'chats')