import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDuH3V7vNrCwCVL2rGvRRBehF_SfJQHCg",
    authDomain: "feat-18527.firebaseapp.com",
    projectId: "feat-18527",
    storageBucket: "feat-18527.appspot.com",
    messagingSenderId: "1012805698328",
    appId: "1:1012805698328:web:b58bd338522229dc39d46d",
    measurementId: "G-FT1MQT0TN4"
  };

if (firebase.apps.length===0) {
    app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}

const auth=firebase.auth();

export { auth };