let inputBox = document.querySelector(".todo-input");
let addButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todo-list");

// 
document.addEventListener("DOMContentLoaded",getToDo);
addButton.addEventListener("click",addToDo);
todoList.addEventListener("click",deleteToDo);

function addToDo(e){
    //to prevent default action
     e.preventDefault();
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("ToDo");
    var todoitem = document.createElement("li");
    todoitem.innerText=inputBox.value;
    todoitem.classList.add("toDo-Item");



    todoDiv.appendChild(todoitem);
    
    inputBox.value = "";


    var deleteButton = document.createElement("button");
    deleteButton.classList.add("Delete-todo");
    deleteButton.innerText="Delete";
    todoDiv.appendChild(deleteButton);

    var completeButton = document.createElement("button");
    completeButton.classList.add("Completed-todo");
    completeButton.innerText="Completed";
     todoDiv.appendChild(completeButton);




    todoList.appendChild(todoDiv);
}

function deleteToDo(e){
    var item = e.target;
    if(item.classList[0]==="Delete-todo"){
        var todo = item.parentElement;
        todo.remove();
    }

}



function getToDo()
{
    
}


// var student = {
//     name: "Sam",
//     class: "12th",
//     array1: [1,2,3,4,5,6,7,8,9],
//     SayHello: function(){
//         console.log("hello");
//     }
// }
// console.log(student.array1[4]);
// student.SayHello();