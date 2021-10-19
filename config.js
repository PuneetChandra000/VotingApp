import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOi9c437BRz2Eyc9EE8waN3gf452Fv7Oo",
    authDomain: "project-c67-623d3.firebaseapp.com",
    projectId: "project-c67-623d3",
    storageBucket: "project-c67-623d3.appspot.com",
    messagingSenderId: "94463355838",
    appId: "1:94463355838:web:1aaa4225f71190797ba7ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();