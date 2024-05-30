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

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("roomname", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();
function redirectToroomname(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location = "index.html";
}