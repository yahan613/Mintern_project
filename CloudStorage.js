console.log("hello_store");
// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
//import { getFirestore, collection, addDoc, onSnapshot, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_JzGqayPzNHORHguXibCTIwZ_ZDaC5Ak",
    authDomain: "benjamin-s-portfolio.firebaseapp.com",
    projectId: "benjamin-s-portfolio",
    storageBucket: "benjamin-s-portfolio.appspot.com",
    messagingSenderId: "694298160325",
    appId: "1:694298160325:web:caf58077f1463f9b4f94ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const pathReference = ref(storage, 'CV.pdf');
const gsReference = ref(storage, 'gs://benjamin-s-portfolio.appspot.com/CV.pdf');
//const db = firebase.firestore();
console.log('initS', app, storage);


document.getElementById("DownloadCV1").addEventListener('click', function() {
    console.log("1!!!");
    getDownloadURL(ref(storage, 'CV.pdf'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url)
        // Or inserted into an <img> element
        const pdf = document.getElementById("DownloadCV1");
        pdf.setAttribute('src', url);
        window.open(url);
    })
    .catch((error) => {
        // Handle any errors
        console.log("DLERROR")
    });
});

document.getElementById("DownloadCV2").addEventListener('click', function() {
    console.log("2!!!");
    getDownloadURL(ref(storage, 'CV.pdf'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url)
        // Or inserted into an <img> element
        const pdf = document.getElementById("DownloadCV2");
        pdf.setAttribute('src', url);
        window.open(url);
    })
    .catch((error) => {
        // Handle any errors
        console.log("DLERROR")
    });
});
