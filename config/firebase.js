// config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4a34jCSE9sSODnh9avKctiWVyczJo3A",
    authDomain: "apicatalogo-4f305.firebaseapp.com",
    projectId: "apicatalogo-4f305",
    storageBucket: "apicatalogo-4f305.firebasestorage.app",
    messagingSenderId: "1016251709633",
    appId: "1:1016251709633:web:2e96c4530188390e77fc40",
    measurementId: "G-0KLL7B027P"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos y exportamos Firestore para usarlo en los modelos
export const db = getFirestore(app);