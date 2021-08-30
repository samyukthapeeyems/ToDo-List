let inputBox = document.querySelector(".todo-input");
let addButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todo-list");

// addEventListener adds an event listener over the event.
// When the event is dispatched, the callback function is set.
document.addEventListener("DOMContentLoaded",getToDo);
addButton.addEventListener("click",addToDo);
todoList.addEventListener("click",deleteToDo);

function addToDo(e){
    //to prevent default action
     e.preventDefault();
    render(inputBox.value);
}

function deleteToDo(e){
    var item = e.target;
    if(item.classList[0]==="Delete-todo"){
        var todo = item.parentElement;
        removeToDo(todo);
        todo.remove();
    }
    if(item.classList[0]==="Completed-todo"){
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function saveToDo(newtodo){
    let todos = getToDosFromStorage();
    
    // todo is pushed to the array.
    todos.push(newtodo);
    // todos array is stringified and the value is stored in the localstorage.
    let a =  JSON.stringify(todos);
    localStorage.setItem("todos", a);
}

function removeToDo(todo){
    let todos = getToDosFromStorage();
    
    let todoText = todo.children[0].innerText;
    let todoIndex = todos.indexOf(todoText);
    // splices the desired value from the required index of todos array. 
    todos.splice(todoIndex, 1);
    let b = JSON.stringify(todos);
    localStorage.setItem("todos",b);   
}

function render(a){
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("ToDo");
    var todoitem = document.createElement("li");
    todoitem.innerText= a;
    todoitem.classList.add("toDo-Item");

    todoDiv.appendChild(todoitem);
    if(inputBox.value!==""){
        saveToDo(todoitem.innerText);
        inputBox.value = "";
    }

    var deleteButton = document.createElement("button");
    
    deleteButton.innerHTML="Delete";
    deleteButton.classList.add("Delete-todo");
    todoDiv.appendChild(deleteButton);

    var completeButton = document.createElement("button");
    
    completeButton.innerHTML="Completed";
    completeButton.classList.add("Completed-todo");
    todoDiv.appendChild(completeButton);
    
    todoList.appendChild(todoDiv);
}

function getToDo(){
    let todos = getToDosFromStorage();
    todos.forEach((todo)=>{
    render(todo);
    })
    
    
}

function getToDosFromStorage(){
    let todos;
    // gets todos from localstorage
    let storedToDos = localStorage.getItem("todos");
    // if todos is not there in localstorage,an empty array is assigned to todos.
    // else the todos from localstorage is assigned to the array.
    if(storedToDos===null){
        todos = [];
    }
    else{
        todos=JSON.parse(storedToDos);
    }
    return todos;
}


// var student = {
//     name: "Sam",
//     class: "12th",
//     array1: [1,2,3,4,5,6,7,8,9],
//     SayHello: function(){
//         console.log("hello");
//     }
// }
// console.log(JSON.stringify(student));
// student.SayHello();

// let num = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<num.length;i++){
//     if(num[i] == 10){
//         console.log(i);
//     }

// }