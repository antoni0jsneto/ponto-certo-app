import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDA7cgQLCbta2SAdj2KJwZM3UcyLvQz8Vc',
  authDomain: 'ponto-certo-app.firebaseapp.com',
  projectId: 'ponto-certo-app',
  storageBucket: 'ponto-certo-app.firebasestorage.app',
  messagingSenderId: '1067410490980',
  appId: '1:1067410490980:web:328cb458df33f3c591c171',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
