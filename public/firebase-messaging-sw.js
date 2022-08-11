// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyCInxX-0q7OQe37LsYZ00syon4zwwOgoI0",
    authDomain: "cloud-message-5e20f.firebaseapp.com",
    projectId: "cloud-message-5e20f",
    storageBucket: "cloud-message-5e20f.appspot.com",
    messagingSenderId: "296439644653",
    appId: "1:296439644653:web:33fcc678943eb74eeb27e4",
    measurementId: "G-TXX9H0ETYY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});