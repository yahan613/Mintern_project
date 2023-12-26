console.log("hello_view");
// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
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

let view = [0, 0, 0, 0, 0];



//點閱率
//const firestore = firebase.firestore();

// 要查詢的文檔路徑

const docRef = doc(db, "Blogview", "zw7peSikR5tXj08KGZd8");
/*async function fetchData() {
    const docSnap = await getDoc(docRef);
    // ... 其他代码
}*/

//catch firestore data
const docSnap = await getDoc(docRef);
const blogData = docSnap.data();

if (docSnap.exists()) {
    console.log("View data:", docSnap.data());
    view[0] = blogData.Blog1;
    view[1] = blogData.Blog2;
    view[2] = blogData.Blog3;
    view[3] = blogData.Blog4;
    view[4] = blogData.Blog5;
    console.log("HIHI", view);
    var viewElement = document.getElementById("view-data1");
    viewElement.innerHTML = '  View: ' + view[0];
    var viewElement2 = document.getElementById("view-data2");
    viewElement2.innerHTML = '  View: ' + view[1];
    var viewElement3 = document.getElementById("view-data3");
    viewElement3.innerHTML = '  View: ' + view[2];
    var viewElement4 = document.getElementById("view-data4");
    viewElement4.innerHTML = '  View: ' + view[3];
    var viewElement5 = document.getElementById("view-data5");
    viewElement5.innerHTML = '  View: ' + view[4];
} else {
    // docSnap.data() will be undefined in this case
    console.log("No such viewdocument!");
}

window.blogview1 = async function () {
    view[0]++;
    console.log("onclick event triggered. Performing blogview1() action.", view[0]);
    // Add the rest of your blogview1() logic here
    const docRef = doc(db, 'Blogview', 'zw7peSikR5tXj08KGZd8');
    // 要更新的資料
    const updatedData = {
        Blog1: view[0],
        // 其他欄位...
    };
    try {
        // 使用 updateDoc 方法進行更新
        await updateDoc(docRef, updatedData);
        console.log('文件更新成功！');
    } catch (e) {
        console.error('更新文件時發生錯誤：', e);
    }
    var viewElement = document.getElementById("view-data1");
    viewElement.innerHTML = '  View: ' + view[0];
}

window.blogview2 = async function () {
    view[1]++;
    console.log("onclick event triggered. Performing blogview2() action.", view[1]);
    // Add the rest of your blogview1() logic here
    const docRef = doc(db, 'Blogview', 'zw7peSikR5tXj08KGZd8');
    // 要更新的資料
    const updatedData = {
        Blog2: view[1],
        // 其他欄位...
    };

    try {
        // 使用 updateDoc 方法進行更新
        await updateDoc(docRef, updatedData);
        console.log('文件更新成功！');
    } catch (e) {
        console.error('更新文件時發生錯誤：', e);
    }
    var viewElement = document.getElementById("view-data2");
    viewElement.innerHTML = '  View: ' + view[1];
}

window.blogview3 = async function () {
    view[2]++;
    console.log("onclick event triggered. Performing blogview3() action.", view[2]);
    // Add the rest of your blogview1() logic here
    const docRef = doc(db, 'Blogview', 'zw7peSikR5tXj08KGZd8');
    // 要更新的資料
    const updatedData = {
        Blog3: view[2],
        // 其他欄位...
    };

    try {
        // 使用 updateDoc 方法進行更新
        await updateDoc(docRef, updatedData);
        console.log('文件更新成功！');
    } catch (e) {
        console.error('更新文件時發生錯誤：', e);
    }
    var viewElement = document.getElementById("view-data3");
    viewElement.innerHTML = '  View: ' + view[2];
}

window.blogview4 = async function () {
    view[3]++;
    console.log("onclick event triggered. Performing blogview4() action.", view[3]);
    // Add the rest of your blogview1() logic here
    const docRef = doc(db, 'Blogview', 'zw7peSikR5tXj08KGZd8');
    // 要更新的資料
    const updatedData = {
        Blog4: view[3],
        // 其他欄位...
    };

    try {
        // 使用 updateDoc 方法進行更新
        await updateDoc(docRef, updatedData);
        console.log('文件更新成功！');
    } catch (e) {
        console.error('更新文件時發生錯誤：', e);
    }
    var viewElement = document.getElementById("view-data4");
    viewElement.innerHTML = '  View: ' + view[3];
}

window.blogview5 = async function () {
    view[4]++;
    console.log("onclick event triggered. Performing blogview5() action.", view[4]);
    // Add the rest of your blogview1() logic here
    const docRef = doc(db, 'Blogview', 'zw7peSikR5tXj08KGZd8');
    // 要更新的資料
    const updatedData = {
        Blog5: view[4],
        // 其他欄位...
    };

    try {
        // 使用 updateDoc 方法進行更新
        await updateDoc(docRef, updatedData);
        console.log('文件更新成功！');
    } catch (e) {
        console.error('更新文件時發生錯誤：', e);
    }
    var viewElement = document.getElementById("view-data5");
    viewElement.innerHTML = '  View: ' + view[4]; 
}