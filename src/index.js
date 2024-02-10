import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbEx4YqS0Xdyv5AkQ0CS-F4EVqV62qgD0",
  authDomain: "ayan-portfolio-2620b.firebaseapp.com",
  projectId: "ayan-portfolio-2620b",
  storageBucket: "ayan-portfolio-2620b.appspot.com",
  messagingSenderId: "1639496783",
  appId: "1:1639496783:web:a9129f6dd9bdd87adabe3a",
  measurementId: "G-9V30Q1MDCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
