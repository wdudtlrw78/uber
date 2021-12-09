// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCltlhFDEP_bwjGIViQQfHo-4-JyllyQiA',
  authDomain: 'uber-next-clone-51bd9.firebaseapp.com',
  projectId: 'uber-next-clone-51bd9',
  storageBucket: 'uber-next-clone-51bd9.appspot.com',
  messagingSenderId: '224275826062',
  appId: '1:224275826062:web:5af52fbb9d24ce4b1410df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
