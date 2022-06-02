import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
  authDomain: "wireleib-e42d3.firebaseapp.com",
  databaseURL: "https://wireleib-e42d3-default-rtdb.firebaseio.com",
  projectId: "wireleib-e42d3",
  storageBucket: "wireleib-e42d3.appspot.com",
  messagingSenderId: "1049671850682",
  appId: "1:1049671850682:web:fcccbf9461465c113f4083"
};


firebase.initializeApp(firebaseConfig)
export default firebase.firestore()