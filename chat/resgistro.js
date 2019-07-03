var firebaseConfig = {
    apiKey: "AIzaSyA23ee74wm2b_r0BkPV50xZH5bcXwZWKy4",
    authDomain: "proyecto-firebase-5f7f8.firebaseapp.com",
    databaseURL: "https://proyecto-firebase-5f7f8.firebaseio.com",
    projectId: "proyecto-firebase-5f7f8",
    storageBucket: "proyecto-firebase-5f7f8.appspot.com",
    messagingSenderId: "494553707256",
    appId: "1:494553707256:web:180f772d4ada5643"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
function guardarDatos() {
    //CAPTURAR DATOS DEL FORMULARIO 
    var usu = document.getElementById('usu').value;
    var pass = document.getElementById('pass').value;

    db.collection("usuarios").add({
        usuario: usu,
        password: pass
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            //LIMPIAR LOS INPUTS DEL FORMULARIO 
            location.href ="index.html";
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
		
		
}