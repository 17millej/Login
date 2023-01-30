// JavaScript source code
const eHints = document.getElementById("hints");

function Login()
{
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    try {
        PresenceCheck(username, "Please enter your username");
        PresenceCheck(username, "Please enter your password");
        lengthCheck(password, 5, 10, "Please enter a passowrd between 5 and 10 characters");
    }
    catch (e) {
        eHints.innerText = e;
    }
}


function CreateUser() {

}

function lengthCheck(input, minLength, maxLength, message) {
    if (input.length > maxLength || input.Length < minLength) {
        eHints.innerText = message;
        throw message;
    }
}

function ResetPassword() {

}

function PresenceCheck(input, message) {
    if (input == "")
    {
        throw message;
    }
    else
    {
        eHints.innerText = "";
    }
}