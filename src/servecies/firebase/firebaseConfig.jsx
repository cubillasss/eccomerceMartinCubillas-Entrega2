
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCv-anUp1mOwDMA4CwyE5IqNASZrIzj45c",
  authDomain: "proyectoreactjsmartincubillas.firebaseapp.com",
  projectId: "proyectoreactjsmartincubillas",
  storageBucket: "proyectoreactjsmartincubillas.appspot.com",
  messagingSenderId: "835159259103",
  appId: "1:835159259103:web:7416c1761f422abd7df66a",
  measurementId: "G-7MP89RKFKQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)