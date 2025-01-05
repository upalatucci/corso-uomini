import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBW-tgvrl5MCIrmIAB3K6yMWJzRmRWeQio",
  authDomain: "corso-uomini.firebaseapp.com",
  projectId: "corso-uomini",
  storageBucket: "corso-uomini.firebasestorage.app",
  messagingSenderId: "387253487071",
  appId: "1:387253487071:web:0bfe9253beb712243c306a",
  measurementId: "G-1JQ2H0EY1S",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
