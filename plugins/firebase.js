// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLNSPBY9fyRcxLiulRFNqYsePyvy_hgjI",
	authDomain: "find-typo.firebaseapp.com",
	projectId: "find-typo",
	storageBucket: "find-typo.appspot.com",
	messagingSenderId: "52990232468",
	appId: "1:52990232468:web:3e9e5931347a86778bf181",
};

// Initialize Firebase
const apps = getApps();
const fbApp = !apps.length ? initializeApp(firebaseConfig) : apps[0];

// const googleProvider = new GoogleAuthProvider();
const db = getFirestore(fbApp, {});

export { db };
