const firebaseConfig = {
  apiKey: "AIzaSyC-K4ld3mylGNeEX2xAlAmeyiNirfTVKrw",
  authDomain: "food-startup-aa983.firebaseapp.com",
  projectId: "food-startup-aa983",
  storageBucket: "food-startup-aa983.appspot.com",
  messagingSenderId: "236390522518",
  appId: "1:236390522518:web:f43e7d497443ee29456cb7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();