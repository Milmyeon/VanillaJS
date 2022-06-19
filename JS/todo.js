
const myform = document.querySelector("form#todo-form");
const inputValue = myform.querySelector("input");
const mybutton = myform.querySelector("button#todo-button");
const list = document.querySelector("ul#todo-list");
const TODOS_KEY = "toDos";
let toDos= [];


function savedToDo(){
localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}



function deletToDo(event){

    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    savedToDo();

}

 
function paintToDo(newToDo){
    
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deletToDo);
    span.innerText = newToDo.text;
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

}

function toDoFormSubmit(event){

    event.preventDefault();
    const newToDo = inputValue.value;
    inputValue.value = "";
    const newTodoObj = {
        text:newToDo,
        id:Date.now(),

    };


    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savedToDo();
  
    }

    
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {

    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}
myform.addEventListener("submit", toDoFormSubmit);

