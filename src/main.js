import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import './index.css'


const firebaseConfig = {
    apiKey: "AIzaSyDnkjMsxPoC5t2P25PJ0SUNp8lqkdCBiZg",
    authDomain: "spesa-app-d7860.firebaseapp.com",
    projectId: "spesa-app-d7860",
    storageBucket: "spesa-app-d7860.appspot.com",
    messagingSenderId: "248256563884",
    appId: "1:248256563884:web:c919d7b007adff90822d09"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");