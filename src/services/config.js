
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-32079.firebaseapp.com",
  projectId: "tienda-32079",
  storageBucket: "tienda-32079.appspot.com",
  messagingSenderId: "841280660023",
  appId: "1:841280660023:web:4b232fe8abebda8c10d5b2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);