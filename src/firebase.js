// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "image-uploader-fd5ad.firebaseapp.com",
  projectId: "image-uploader-fd5ad",
  storageBucket: "image-uploader-fd5ad.appspot.com",
  messagingSenderId: "383900343582",
  appId: "1:383900343582:web:f72e6a3e1b807a60bdbd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)