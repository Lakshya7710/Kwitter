
var firebaseConfig = {
      apiKey: "AIzaSyCyllzbBgP6ZIBiWGnBMrAb4x5H4mON-kg",
      authDomain: "kwitter-26658.firebaseapp.com",
      databaseURL: "https://kwitter-26658.firebaseio.com",
      projectId: "kwitter-26658",
      storageBucket: "kwitter-26658.appspot.com",
      messagingSenderId: "431443473735",
      appId: "1:431443473735:web:b933ab10f0d36c261a8862"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

     function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"room is added"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names-" + Room_names);
       row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}