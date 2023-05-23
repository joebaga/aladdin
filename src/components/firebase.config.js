
import {getApp, getApps, initializeApp} from "firebase/app";
import{getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDg_kOnmJO3j533w2kLnhmlKE-NDMB9bwA",
    authDomain: "aladdin-bae16.firebaseapp.com",
    databaseURL: "https://aladdin-bae16-default-rtdb.firebaseio.com",
    projectId: "aladdin-bae16",
    storageBucket: "aladdin-bae16.appspot.com",
    messagingSenderId: "107554713280",
    appId: "1:107554713280:web:13070a97149722e5ab0725",
    measurementId: "G-2WR8DJSNHN"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export{app, firestore, storage};