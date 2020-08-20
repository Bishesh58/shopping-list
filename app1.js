var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');


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
}


