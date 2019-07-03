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
var url=window.location.href;
var nombre=url.substring(url.indexOf("=")+1);
var usa=document.getElementById("usa");
usa.innerHTML="Usuario: "+nombre;

var tabla = document.getElementById('mensajes');
  db.collection("mensajes").orderBy("fecha","asc").onSnapshot((querySnapshot) => {
      tabla.innerHTML="";
      querySnapshot.forEach((doc) => {
          tabla.innerHTML +=
         `<tr>
           
           <td> ${doc.data().usuario}   :</td>
           <td>  ${doc.data().mensaje}</td>
      </tr>`
      });
  });

function guardarMensajes(){
    var sms= document.getElementById('mensaje').value;
    var fecha=new Date();
     db.collection("mensajes").add({
        usuario: nombre,
        mensaje: sms,
        fecha: fecha
    })
     .then(function(docRef){
     	console.log("Se guardo el mensaje",docRef.id);
     })
     .catch(function(error){
     	console.log("Error :",error);
     })

     document.getElementById("mensaje").value='';

}
