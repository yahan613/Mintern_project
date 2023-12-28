console.log("hello");
// 获取当前时间的时间戳（以毫秒为单位）
const currentTimeStamp = Date.now();

// 获取当前时间的Date对象
const currentDate = new Date();

// 获取当前时间的字符串表示，使用toLocaleString()以获取本地时间格式
const currentDateString = currentDate.toLocaleString();


console.log("Date Object:", currentDate);
//console.log("Formatted Date String:", currentDateString);

// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
//import { doc, setDoc } from "firebase/firestore"; 
//import "firebase/firestore";
//import firebase from "firebase/app";
//import "firebase/firestore";
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
const db = getFirestore(app);
//const db = firebase.firestore();
console.log('init', app, db)
console.log("中內容：", ContactData);

//References

console.log(db);

//console.log(ContactData);

/*db.collection("Contacts").add({
    name: "AMY",
    email: "12345",
    tel: "1234567",
    subject: "No",
    message: "Hello"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/
/*await setDoc(doc(db, "Contacts"), {
    name: "AMY",
    email: "12345",
    tel: "1234567",
    subject: "No",
    message: "Hello"
});*/
/*try {
    console.log("後內容：", ContactData);
    const docRef = await addDoc(collection(db, "Contacts"), {
        Name: ContactData.getName,
        Email: ContactData.getEmail,
        Tel: ContactData.getTel,
        Subject: ContactData.getSubject,
        Message: ContactData.getMessage
    });

    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}*/
// Firestoreinit.js
async function initializeFirestore() {
    // Get references to elements
    var emailCheckElement = document.getElementById('emailCheckElement');
    var submitHeading = document.getElementById('Submit');

    // Hide the emailCheckElement initially
    emailCheckElement.style.display = 'none';

    // Update the Submit heading
    submitHeading.innerText = 'Submitted';

    // Gather form data
    ContactData.getName = document.getElementById('nameInput').value;
    ContactData.getEmail = document.getElementById('emailInput').value;
    ContactData.getTel = document.getElementById('telInput').value;
    ContactData.getSubject = document.getElementById('subjectInput').value;
    ContactData.getMessage = document.getElementById('mesInput').value;

    try {
        // Add document to "Contacts" collection
        const docRef = await addDoc(collection(db, "Contacts"), {
            Name: ContactData.getName,
            Email: ContactData.getEmail,
            Tel: ContactData.getTel,
            Subject: ContactData.getSubject,
            Message: ContactData.getMessage
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding client's commit document: ", e);
    }

    try {
        // Add document to "mail" collection
        const docmail = await addDoc(collection(db, "mail"), {
            to: "yahan930718@gmail.com",
            message: {
                subject: "Contact Message Notify",
                text: ("Here is " + ContactData.getName + " Contact at " + currentDate + ".\nTel: " + ContactData.getTel + "\nE-mail:" + ContactData.getEmail +"\nSubject: " + ContactData.getSubject + "\nMessage: " + ContactData.getMessage + "\nPlease reply the message.")
            }
        });
        console.log("Document written with ID: ", docmail.id);
    } catch (e) {
        console.error("Error adding client's commit document: ", e);
    }

    // Show the emailCheckElement
    emailCheckElement.style.display = 'block';

    // Trigger the fadeInDown animation
    emailCheckElement.classList.add('animate__animated', 'animate__fadeInDown');

    // Clear form fields after a delay
    setTimeout(function () {
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('telInput').value = '';
        document.getElementById('subjectInput').value = '';
        document.getElementById('mesInput').value = '';
        console.log("SU");
    }, 1000); // Delay of 1 second
}


document.addEventListener('DOMContentLoaded', () => {
    window.changeSubmit = initializeFirestore;
});