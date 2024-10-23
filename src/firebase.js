import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcsuL6i4EoGagOq4TavFi_lNIy3cEd4Zo",
  authDomain: "icpc-hti.firebaseapp.com",
  projectId: "icpc-hti",
  storageBucket: "icpc-hti.appspot.com",
  messagingSenderId: "314590006039",
  appId: "1:314590006039:web:b5092c78aa703795540552",
  measurementId: "G-LBVS9BVBNB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()
