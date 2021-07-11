const mainTodoTitle = document.querySelector(".mainTodo");
const todayForm = mainTodoTitle.querySelector("form");
const todayInput = todayForm.querySelector("input");

const MAIN_TODO = "mainTodo";

function handleMainTodo(event){
    event.preventDefault();
    const inputTodo = todayInput.value;
    localStorage.setItem(MAIN_TODO, inputTodo);
    paintMainTodo(inputTodo);
}

function paintMainTodo(todo){
    todayForm.classList.add(HIDDEN_CLASS);
    const mainTodo = document.createElement("h3");
    mainTodo.innerText = todo;
    mainTodoTitle.appendChild(mainTodo);
}

const toDo = localStorage.getItem(MAIN_TODO);

function init(){
    if(toDo){
        paintMainTodo(toDo);
    }
    else{
        todayForm.addEventListener("submit", handleMainTodo);
    }
}

init();