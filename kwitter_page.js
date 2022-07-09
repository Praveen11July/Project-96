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
room_name = localStorage.getItem("room_name")

function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
});
document.getElementById("msg").innerHTML = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
