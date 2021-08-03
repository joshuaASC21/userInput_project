let userName = document.querySelector("#username");
let password= document.querySelector("#password");

let sucessMessage= document.querySelector("#success");

let body= document.querySelector("body");
let errorMessage= document.querySelector("#error");
let submitButton= document.querySelector("#submit-button");

submitButton.onclick= function(event){
    event.preventDefault();

   
    let userNameInput= document.createElement("text");
    userNameInput.innerHTML = userName.value;

    let passwordInput= document.createElement('password')
    passwordInput.innerHTML= password.value;
    if (userName.value== "Baby Yoda" && password.value== "Squirtle"){
        sucessMessage.style.display= "block";
        body.style.backgroundColor= "rgb(20,230,10)";


    }
     else {
        errorMessage.style.display= "block";
        sucessMessage.style.display= "none";
        body.style.backgroundColor= "firebrick";
    }

}



