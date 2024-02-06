import { initializeApp } from 'firebase/app';
import  { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQHJriKE7j1_HxesozsXTu3_sGkbrJEKU",
  authDomain: "ecommerce-clothing-42f3c.firebaseapp.com",
  projectId: "ecommerce-clothing-42f3c",
  storageBucket: "ecommerce-clothing-42f3c.appspot.com",
  messagingSenderId: "590226576628",
  appId: "1:590226576628:web:bd723174af882dc8defaa1"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);