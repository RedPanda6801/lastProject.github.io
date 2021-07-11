const loginForm = document.querySelector(".loginPage form");
const loginInput = loginForm.querySelector("input");
const mainPage = document.querySelector(".mainPage");
const mainTitle = mainPage.querySelector("h2");
const logoutBtn = document.querySelector(".logout");

const HIDDEN_CLASS = "hidden";
const USER_KEY = "username";

function paintTitle(name){
    mainPage.classList.remove(HIDDEN_CLASS);    
    mainTitle.innerText = `Hello ${name}!`;
}

function handleLogin(event){
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem(USER_KEY, name);
    paintTitle(name);
    loginInput.value = "";
    loginForm.classList.add(HIDDEN_CLASS);
}

function handleLogout(){
    localStorage.removeItem(USER_KEY);
    loginForm.classList.remove(HIDDEN_CLASS);
    mainPage.classList.add(HIDDEN_CLASS);
}

const username = localStorage.getItem(USER_KEY);

function init(){
    if(username == null){
        loginForm.addEventListener("submit", handleLogin);
    }
    else{
        loginForm.classList.add(HIDDEN_CLASS);
        paintTitle(username);
    }
    logoutBtn.addEventListener("click", handleLogout);
}

init();