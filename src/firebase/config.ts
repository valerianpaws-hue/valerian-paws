import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCT2R8iYTVRnNuDM6hB22moIS3uXLKLE9A",
  authDomain: "valerian-paws-c15f0.firebaseapp.com",
  databaseURL: "https://valerian-paws-c15f0-default-rtdb.firebaseio.com",
  projectId: "valerian-paws-c15f0",
  storageBucket: "valerian-paws-c15f0.firebasestorage.app",
  messagingSenderId: "79240095880",
  appId: "1:79240095880:web:52c49aa5aa8ebd4d4d973d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
