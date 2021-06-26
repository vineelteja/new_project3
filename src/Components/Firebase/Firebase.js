import firebase from '@firebase/app'
require('@firebase/auth')
require('@firebase/firestore')
require('@firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyCKpicteXhssPFJul2kF-_02iBS9lQWLDY",
    authDomain: "project-chat-8768e.firebaseapp.com",
    projectId: "project-chat-8768e",
    storageBucket: "project-chat-8768e.appspot.com",
    messagingSenderId: "435714561699",
    appId: "1:435714561699:web:f76f9f7ba582a9657f9116",
    measurementId: "G-WMS6DXS3QN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;