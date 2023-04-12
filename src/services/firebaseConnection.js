import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjz40N2pQf-6RX_by3fAfBADsO97wX71w",
  authDomain: "tickets-40b00.firebaseapp.com",
  projectId: "tickets-40b00",
  storageBucket: "tickets-40b00.appspot.com",
  messagingSenderId: "842193827505",
  appId: "1:842193827505:web:66ea24f8a904e81499d490"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }