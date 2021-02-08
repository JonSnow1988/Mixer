import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBD-GQnCUAkk4cBe0xBKvdRPU8QIk9XKLA",
  authDomain: "gamer-e-commerce.firebaseapp.com",
  projectId: "gamer-e-commerce",
  storageBucket: "gamer-e-commerce.appspot.com",
  messagingSenderId: "934634888745",
  appId: "1:934634888745:web:742bb018804aa076b8c638",
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
