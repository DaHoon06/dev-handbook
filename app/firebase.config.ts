import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGE_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_BUCKET
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY, //'api-key',
  authDomain: FIREBASE_AUTH_DOMAIN, //'project-id.firebaseapp.com',
  databaseURL: FIREBASE_DATABASE_URL, //'https://project-id.firebaseio.com',
  projectId: FIREBASE_PROJECT_ID, //'project-id',
  storageBucket: FIREBASE_BUCKET, //'project-id.appspot.com',
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID, //'sender-id',
  appId: FIREBASE_APP_ID, //'app-id',
  measurementId: FIREBASE_MEASUREMENT_ID //'G-measurement-id',
}

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

export { db }