let inputBox = document.querySelector(".todo-input");
let addButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todo-list");

// 
document.addEventListener("DOMContentLoaded",getToDo);
addButton.addEventListener("click",addToDo);

function addToDo(e){
    //to prevent default action
     e.preventDefault();
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("ToDo");
    var todoitem = document.createElement("li");
    todoitem.innerText=inputBox.value;
    todoitem.classList.add("toDo-Item");


    todoDiv.appendChild(todoitem);
    todoList.appendChild(todoDiv);
    inputBox.value = "";
}



function getToDo()
{
    
}