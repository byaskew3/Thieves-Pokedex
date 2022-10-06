import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_gGh1Isw0J3fTii8Iox-KX4-rHFZU-HQ",
  authDomain: "thieves98-pokedex.firebaseapp.com",
  projectId: "thieves98-pokedex",
  storageBucket: "thieves98-pokedex.appspot.com",
  messagingSenderId: "814134256107",
  appId: "1:814134256107:web:02fdb1dc55f2d4ef6979ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()