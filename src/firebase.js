import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBG5RDRxqAWPNjYeEPdS4M04u9m-QdpAH0",
  authDomain: "bci-dev.firebaseapp.com",
  databaseURL: "https://bci-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bci-dev",
  storageBucket: "bci-dev.appspot.com",
  messagingSenderId: "617803372181",
  appId: "1:617803372181:web:8c208825c80334fdd4ad9c"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)