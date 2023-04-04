import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyC2XaDhREXOye9OoKErYtzJwk1o7TknAok",
  authDomain: "tik-tok---paul-de-tarso.firebaseapp.com",
  projectId: "tik-tok---paul-de-tarso",
  storageBucket: "tik-tok---paul-de-tarso.appspot.com",
  messagingSenderId: "504967367460",
  appId: "1:504967367460:web:988ea444f027159b2881b1"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

  export default db