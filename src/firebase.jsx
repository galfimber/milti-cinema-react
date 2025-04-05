// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRTWsRqYZqc8db6Ad8ra0x1qc9xpdoZF0",
  authDomain: "multi-cinema.firebaseapp.com",
  projectId: "multi-cinema",
  storageBucket: "multi-cinema.firebasestorage.app",
  messagingSenderId: "129611887734",
  appId: "1:129611887734:web:114c2d1e061543c9b89b57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Ошибка при входе через Google:", error);
    return null;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Ошибка при выходе:", error);
  }
};

// Сохранение лайкнутых фильмов
export const saveLikedMovies = async (userId, likedMovies) => {
  try {
    const userDoc = doc(db, "users", userId);
    await setDoc(userDoc, { likedMovies }, { merge: true });
  } catch (error) {
    console.error("Ошибка при сохранении лайкнутых фильмов:", error);
  }
};
// Получение лайкнутых фильмов
export const getLikedMovies = async (userId) => {
  try {
    const userDoc = doc(db, "users", userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data().likedMovies;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Ошибка при загрузке лайкнутых фильмов:", error);
    return [];
  }
};

export { auth, db };
