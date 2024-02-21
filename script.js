const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
let namaku = document.getElementById("namaku");

nameForm.addEventListener("submit",
function(event){
    event.preventDefault();
    namaku.textContent = nameInput.value;
    alert("nama kau: "+nameInput.value);
});

//Increment Decrement
const numberDisplay = document.getElementById("number");
const Increment = document.getElementById("btn-increment");
const Decrement = document.getElementById("btn-decrement");
let number = 0;
Increment.addEventListener("click",function(){
    number++;
    numberDisplay.textContent = number;
});
Decrement.addEventListener("click", function(){
    number--;
    numberDisplay.textContent = number;
});

//change color
const backgroundDiv = document.getElementById("background");
const redBtn = document.getElementById("btn-red");
const greenBtn = document.getElementById("btn-green");
const blueBtn = document.getElementById("btn-blue");
const randomBtn = document.getElementById("btn-random");

redBtn.addEventListener("click", function(){
    backgroundDiv.style.backgroundColor = "red";
});
greenBtn.addEventListener("click", function(){
    backgroundDiv.style.backgroundColor = "green";
});
blueBtn.addEventListener("click", function(){
    backgroundDiv.style.backgroundColor = "blue";
});
randomBtn.addEventListener("click", function(){
    backgroundDiv.style.backgroundColor = randomColor();
});

function randomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++){
        color = color + letters[Math.floor(Math.random()*16)];

    }
    return color;
}

//todo list
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");


let todo = [];


todoForm.addEventListener("submit", function (event) {
  event.preventDefault();


  const todoText = todoInput.value;


  if (todoText !== "") {
    const todoItem = todoText;
    todo.push(todoItem);
    renderTodoItem(todoItem);
    todoInput.value = "";
  }


  function renderTodoItem(todoItem) {
    const list = document.createElement("li");
    list.textContent = todoItem;
    todoList.appendChild(list);
  }
});
