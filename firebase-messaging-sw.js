importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyBBpSkf55mLURMpgEmsVCyKxGyvlwJSiMA",
  authDomain: "push-eb9ba.firebaseapp.com",
  projectId: "push-eb9ba",
  storageBucket: "push-eb9ba.appspot.com",
  messagingSenderId: "342170600709",
  appId: "1:342170600709:web:33f625b35bb3c16b0d236c"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Получено уведомление:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon ?? null
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});