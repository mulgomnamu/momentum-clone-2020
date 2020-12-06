init();

function init(){
    getTime();
    setInterval(getTime, 1000);
    getName();
    paintImage();
    loadCoords();
    loadToDo();
    toDoForm.addEventListener("submit", toDoHandleSubmit);
}




