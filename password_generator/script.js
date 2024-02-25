let passwordBox = document.getElementById("Password");
let length = 8;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = upperCase.toLowerCase();
let specialChar = "!@#$%^&*()_+={}:;[]',.<>/?";
let number = "0123456789";
let allChar = upperCase + lowercase + specialChar + number;
let lastPass = []


function createPassword() {
    let password = "";
    
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += specialChar[Math.floor(Math.random() * specialChar.length)]


    while (length > password.length) {
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value = password;

    if (lastPass.length > 4) {
        firstElement = lastPass.shift();
        firstElement = password;
        lastPass.push(firstElement);

    } else {
        lastPass.push(password);
    }
    showLatestPass();
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function copyLatestPassword(index) {

    if(index >= 0 && index < lastPass.length ) {
        let temporaryInput = document.createElement("input");
        temporaryInput.value = lastPass[index];
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        document.body.removeChild(temporaryInput);
    }

}

function showLatestPass() {
    let latestPassContainer = document.querySelector(".latestPass");
    let text = "<ul>";
    for (i = 0; i < lastPass.length; i++) {
        text += "<li>" + lastPass[i] +'<img src="images/copy-svgrepo-com.svg" onclick="copyLatestPassword('+ i +')">' +  "</li>";
    }
    text += "</ul>";
    latestPassContainer.innerHTML = text;
 
}

