import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js'

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js'
import {
  getAuth,
} from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyAIHg3pBYmMN4ArBrm-o-cvkLqB7e5Xn7Q",
    authDomain: "iotgonzalo-11160.firebaseapp.com",
    projectId: "iotgonzalo-11160",
    storageBucket: "iotgonzalo-11160.appspot.com",
    messagingSenderId: "113712851434",
    appId: "1:113712851434:web:a765d65d9ffa99bd4e2a93",
    measurementId: "G-WV2W02Q3JP",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
export const getSubDocument = (ref, id, subCollection, subId, callBack) =>
  onSnapshot(doc(db, ref, id, subCollection, subId), callBack)

export const updateSubCollection = (ref, id, subCollection, subId, objeto) =>
  updateDoc(doc(db, ref, id, subCollection, subId), objeto)