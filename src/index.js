import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5jNxZaGmkN-kH7smOTjObu1bCuPkveP8",
  authDomain: "tienda-de-computadores-20d79.firebaseapp.com",
  projectId: "tienda-de-computadores-20d79",
  storageBucket: "tienda-de-computadores-20d79.appspot.com",
  messagingSenderId: "433842214307",
  appId: "1:433842214307:web:069d96ca5829371ce13616"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

