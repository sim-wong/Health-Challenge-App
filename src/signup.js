// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsWvn_oSvDQq_OCU4A5HfXLGY_ISEf9f4",
    authDomain: "health-challenge-prod.firebaseapp.com",
    projectId: "health-challenge-prod",
    storageBucket: "health-challenge-prod.appspot.com",
    messagingSenderId: "925066971100",
    appId: "1:925066971100:web:59ae6b3cf7c11da9dbf119"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const database = firebase.database();

// setup our signup function
function signup() {
    email = document.getElementById("email-input").value
    username = document.getElementById("username-input").value
    password = document.getElementById("password-input").value


    // validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert("Email or Password is incorrect.")
            // Stop running the code. 
        return
    }
    if (validate_field(username) == false) {
        alert("Username is incorrect.")
            // Stop running the code.
        return
    }

    // Authentication
    auth.createUserWithEmailAndUsernameAndPassword(email, username, password)
        .then(function() {
            // Declare user variable
            var user = auth.currentUser

            //Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                username: username,
                last_login: Date.now()
            }

            database_ref.child("users/" + user.uid).set(user_data)

            Alert("User Created!")
        })
        .catch(function(error) {
            // Firebase will this part for errors
            var error_code = error.error_code
            var error_message = error.error_message

            alert(error_message)
        })

}

function validate_email(email) {
    expressnion = /^[^@]+@\w+(\.\w+)+\w$/.test(str)
    if (expression.test(email) == true) {
        // email is good
        return true
    } else {
        // email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths of greater than 6
    if (password < 6) {
        // password is too short
        return false
    } else {
        // password is good
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        // fields are empty
        return false
    } else {
        // fields are filled
        return true
    }
}