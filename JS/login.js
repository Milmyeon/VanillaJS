const form = document.querySelector("form#logIn-Form")
const loginInput = document.querySelector("form#logIn-Form input");
const button = form.querySelector("button");
const myname = document.querySelector("h1#greeting");


function formSubmit(value){

value.preventDefault();
form.classList.add("hidden");
let username = loginInput.value;
localStorage.setItem('username',username);
greeting(username);
}


function greeting(username){

    myname.innerText = `Hello ${username}`;
    myname.classList.remove("hidden");


}


 
const savedId = localStorage.getItem("username");
console.log(savedId);
if(savedId === null) {
    
    form.classList.remove("hidden");
    form.addEventListener("submit", formSubmit);
   
}
else{
    greeting(savedId);

}