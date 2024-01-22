// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-es-71696.firebaseapp.com',
  projectId: 'mern-es-71696',
  storageBucket: 'mern-es-71696.appspot.com',
  messagingSenderId: '751996921126',
  appId: '1:751996921126:web:75bf140f072d99b187cde7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
