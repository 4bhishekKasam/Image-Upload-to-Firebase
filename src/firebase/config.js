import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnaBxOGIEqO3LmTtyx-atMTPMv48RGsA8",
    authDomain: "users-57f01.firebaseapp.com",
    databaseURL: "https://users-57f01.firebaseio.com",
    projectId: "users-57f01",
    storageBucket: "users-57f01.appspot.com",
    messagingSenderId: "993082048130"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}