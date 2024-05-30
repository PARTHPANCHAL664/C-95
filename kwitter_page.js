// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChNBlOWDAlZp4SqU9AzofjSvFNPiYeNBg",
    authDomain: "lets-chat-web-app---1-26118.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app---1-26118-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app---1-26118",
    storageBucket: "lets-chat-web-app---1-26118.appspot.com",
    messagingSenderId: "835558783119",
    appId: "1:835558783119:web:e3aaadb6c566e6e9e798fa"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout()
  {
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location = "index.html";
  }

  function send()
  {
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
        username: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
