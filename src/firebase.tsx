// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3KWI91eAMCmgaok971oBPKnir2anyxkE',
  authDomain: 'ts-teampro-firebase.firebaseapp.com',
  projectId: 'ts-teampro-firebase',
  storageBucket: 'ts-teampro-firebase.appspot.com',
  messagingSenderId: '186178667326',
  appId: '1:186178667326:web:8354c929c8ff168d18226f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
