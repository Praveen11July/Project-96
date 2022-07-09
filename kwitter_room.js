
var firebaseConfig = {
      apiKey: "AIzaSyBIxWTb7kuRozhU-UfE_iagac2ahSNYGlc",
      authDomain: "kwitter-app-253f6.firebaseapp.com",
      databaseURL: "https://kwitter-app-253f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-253f6",
      storageBucket: "kwitter-app-253f6.appspot.com",
      messagingSenderId: "200537216936",
      appId: "1:200537216936:web:f5878d7e592239d9956f9d",
      measurementId: "G-P3H2RPW7M4"
    };
    
    // Initialize Firebase
    
     firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"   
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row
});});}

getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name) ;
      window.location = "kwitter_page.html"
}
function logout() {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "index.html"


}
