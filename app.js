var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');
var ulright = document.getElementById('ulRight');


function inputLength (){
   return input.value.length;
}

function captureInput(event){
    if(event.keyCode === 13 && inputLength() > 0){
        addList();
    }
}

input.addEventListener('keypress', captureInput);

function buttonAdd(){
    if(inputLength() > 0){
        addList();
    }
}

button.addEventListener('click', buttonAdd);

function addList(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    
    var liRight = document.createElement('li');
    btnDelete = document.createElement('button');
    btnDelete.appendChild(document.createTextNode("Delete!"));
    ulright.appendChild(liRight);
    liRight.appendChild(btnDelete);

    btnDelete.onclick = function(){

        ulright.removeChild(liRight);
        ul.removeChild(li);
    }
}
 





