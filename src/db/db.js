import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhPlXzk5tytpusB9fzrSbQQZjnaMEJXfk",
  authDomain: "eccomerce-proyecto-final.firebaseapp.com",
  projectId: "eccomerce-proyecto-final",
  storageBucket: "eccomerce-proyecto-final.appspot.com",
  messagingSenderId: "51499135789",
  appId: "1:51499135789:web:f43ed7dd2e2b4b274fd9a4"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db