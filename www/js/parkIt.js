init = () => {
  document.addEventListener("deviceready", onDeviceReady, false);
  document
    .getElementById("cameraTakePicture")
    .addEventListener("click", cameraTakePicture);
  document
    .getElementById("cameraGetPicture")
    .addEventListener("click", cameraGetPicture);
  document
    .getElementById("saveToStorage")
    .addEventListener("click", saveToStorage);
  storage = window.localStorage;
};
