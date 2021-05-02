firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

function cameraTakePicture() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
  });

  function onSuccess(imageData) {
    var image = document.getElementById("myImage");
    image.style.display = "block";

    image.src = "data:image/jpeg;base64," + imageData;
    var filename = Math.random().toString(36).substring(7);
    var storageRef = firebase.storage().ref("/images/" + filename);

    var message = "data:image/jpg;base64," + imageData;
    storageRef.putString(message, "data_url").then(function (snapshot) {});
  }

  function onFail(message) {
    alert("Failed because: " + message);
  }
}

function cameraGetPicture() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
    targetWidth: 50,
    targetHeight: 50,
  });

  function onSuccess(imageData) {
    var image = document.getElementById("myImage");
    image.style.display = "block";

    image.src = "data:image/jpeg;base64," + imageData;
    var filename = Math.random().toString(36).substring(7);
    var storageRef = firebase.storage().ref("/images/" + filename);

    var message = "data:image/jpg;base64," + imageData;

    storageRef.putString(message, "data_url").then(function (snapshot) {});
    // saveToStorage();
  }

  function onFail(message) {
    alert("Failed because: " + message);
  }
}
function saveToStorage() {
  alert("Picture Saved");
}
