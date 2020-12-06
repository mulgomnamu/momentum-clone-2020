const toDo = document.querySelector(".js-toDo"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoForm = document.querySelector(".js-toDoForm"),
    toDoAdd = toDoForm.querySelector("input");

const TODO_LS = "todo";
let num = new Date().getTime();

let toDos = [];

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODO_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }else{

    }
}

function paintToDo(text){
    let id = num++;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("input");
    const toDoObj = {
        text,
        id
    }

    span.innerText = text;
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "❌");
    deleteBtn.addEventListener("click", toDoDeleted);

    li.id = id;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

    toDos.push(toDoObj);
    
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function toDoHandleSubmit(event){
    event.preventDefault;
    const currentValue = toDoAdd.value;
    paintToDo(currentValue);
    toDOAdd.value = "";
}

function toDoFinished(event){
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.childNodes[1];
    span.classList.add("fin");

    dtoDos
}

function toDoDeleted(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function (toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDos();
}