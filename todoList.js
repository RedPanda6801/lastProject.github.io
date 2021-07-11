const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".list");

let arrayTodo = [];
const TODO_KEY = "keyTodo";

const arrayManagement=(element)=>{
    for(let i=0; i < arrayTodo.length; i++){
        if(element == arrayTodo[i].text){
            alert("already insert element!");
            return true;
        }
    }
    return false;
}

function saveTodoList(){
    localStorage.setItem(TODO_KEY, JSON.stringify(arrayTodo));
}

function delTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = arrayTodo.filter(toDo=>{
        return toDo.id != parseInt(li.id);
    });
    arrayTodo = cleanTodos;
    saveTodoList();
}

function paintTodoList(text){
    if(arrayManagement(text))return;
    const toDo = document.createElement("li");
    const del = document.createElement("button");
    const span = document.createElement("span");
    del.style.blockSize = "20px";
    del.style.backgroundColor = "transparent";
    del.innerText = "✂️";
    del.addEventListener("click",delTodo);
    const newId = arrayTodo.length+1;
    span.innerText=text;
    toDo.id = newId;
    toDo.appendChild(span);
    toDo.appendChild(del);
    todoList.appendChild(toDo);
    const todoObj = {
        text: text,
        id: newId
    };
    arrayTodo.push(todoObj);
    saveTodoList();
}

function hadleTodoList(event){
    event.preventDefault(); // this code didn't work...TT
    const inputTodo = todoInput.value;
    if(inputTodo == "") return; // So this is substitute code!
    paintTodoList(inputTodo);
    todoInput.value = "";
}

function loadTodoList(){
    const loadArray = localStorage.getItem(TODO_KEY);
    if(loadArray != null){
        const parseTodos = JSON.parse(loadArray);
        parseTodos.forEach(toDo => {
            paintTodoList(toDo.text);
        });
    }
}

function init(){
    loadTodoList();
    todoForm.addEventListener("submit", hadleTodoList);
}

init();