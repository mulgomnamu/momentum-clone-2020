const nameHere = document.querySelector("#nameHere"),
    name = document.querySelector(".js-name"),
    setNameForm = document.querySelector("#setName");

const NAME_LS = 'name';

setNameForm.addEventListener("submit", setNameToLS);

function getName(){
    const nameLS = localStorage.getItem(NAME_LS),
        inputName = document.createElement("input") ;

    if(nameLS !== null){
        nameHere.innerText = `${nameLS}.`;
    }else{
        inputName.id = "nameTemp";
        inputName.classList = "editing";
        inputName.size = 2;
        inputName.onkeyup = function(){
            const resize = this.value.length;
            this.size = resize;
        }
        setNameForm.appendChild(inputName);

        inputName.focus();
    }
}

function setNameToLS(event){
    event.preventDefault();
    const getName = event.target.childNodes[0].value;

    localStorage.setItem(NAME_LS,getName);

    changeNameForm(getName);
}

function changeNameForm(name){
    nameHere.innerText = name;
    setNameForm.removeChild(document.querySelector("#nameTemp"));
}