 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyEK1SjgxF3BuOIYT7nTvY8RpuErrxS1o",
    authDomain: "rog-rakshak.firebaseapp.com",
    projectId: "rog-rakshak",
    storageBucket: "rog-rakshak.firebasestorage.app",
    messagingSenderId: "131081764163",
    appId: "1:131081764163:web:1ad5b9008bf00ef024c3f6",
    measurementId: "G-3SEQH6TKFD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);