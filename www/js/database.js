var firebaseConfig = {
  apiKey: "AIzaSyDnRFrcygm3gRwg_Wl25bVD2D3J3eyXsJE",
  authDomain: "parkit-312105.firebaseapp.com",
  projectId: "parkit-312105",
  storageBucket: "parkit-312105.appspot.com",
  messagingSenderId: "313841233287",
  appId: "1:313841233287:web:5577dde7523946ce863722",
  measurementId: "G-K7Y1Z0REVY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function () {
    console.log("Have permission");
  })
  .then(function () {
    console.log(token);
  })
  .catch(function (err) {
    console.log("Error Occured");
  });
