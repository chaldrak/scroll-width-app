import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAM4tPmrwVd5tK_QfE3mQQipfX-C7ZqMDQ",
  authDomain: "linkedin-test-6c849.firebaseapp.com",
  databaseURL: "https://linkedin-test-6c849.firebaseio.com",
  projectId: "linkedin-test-6c849",
  storageBucket: "linkedin-test-6c849.appspot.com",
  messagingSenderId: "187552471040",
  appId: "1:187552471040:web:10e4dc643b36ad2d4060e5",
  measurementId: "G-KN20DKPNVQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
