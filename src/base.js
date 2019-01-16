import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkAUR0LfSS0GOr7ydwoD2L3GoDezIUNaA",
  authDomain: "todo-app-shaurya.firebaseapp.com",
  databaseURL: "https://todo-app-shaurya.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
