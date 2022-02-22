//signup
const signupForm = document.querySelectorAll("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm["email-input"].value;
    const username = signupForm["username-input"].value;
    const password = signupForm["password-input"].value;

    // sign up the user
    auth.createUserWithEmailAndUsernameAndPassword(email, username, password).then(cred => {
        console.log(cred);
        signupForm.reset();
    })
})