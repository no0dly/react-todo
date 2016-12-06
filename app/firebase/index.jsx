import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyC0H2buKUMyjbV6VG8OwW8Z-dgda-tIFFI",
        authDomain: "todo-app-9b988.firebaseapp.com",
        databaseURL: "https://todo-app-9b988.firebaseio.com",
        storageBucket: "todo-app-9b988.appspot.com",
        messagingSenderId: "899595068116"
    };

    firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
