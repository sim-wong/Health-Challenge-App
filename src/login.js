document.getElementById("signUpBtn").addEventListener("click", function(){
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registrationForm").style.display = "block";
    })

document.getElementById("registrationBtn").addEventListener("click",function(){
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("registrationForm").style.display = "none";
    })