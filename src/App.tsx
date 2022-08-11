import React, {useState} from 'react';
import { Layout } from 'antd';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const { Header, Content } = Layout;

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BM0O7qk9QlQaS34WRtqt8GrD0axtrvT016NX3STUvXIL2kfyDp2nuJu-lAePxI5BuQV4Ffwb9FtuvknQy5I9xzQ' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
});

function App() {
  return (
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
  );
}

export default App;
