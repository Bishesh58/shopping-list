//SELECTORS
const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");


//checking if input is empty
function inputLength(e){
    //this is to prevent submitting form (refreshing)
    e.preventDefault();
    if(taskInput.value.length > 0 ){
        addList();
    }
}

//EVENT LISTENERS
addButton.addEventListener('click', inputLength);
taskList.addEventListener('click', deleteCheck);


//FUNCTIONS
function addList(ev){
    
    //create Div & li and append li to Div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add('tasks');
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.innerText = taskInput.value;
    taskDiv.appendChild(newTask);

    //create completed button with class and append to Div 
    const completedButton = document.createElement("button");
    completedButton.innerHTML ='<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);

    //create delete button with class & append to Div
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteButton.classList.add("delete-btn");
    taskDiv.appendChild(deleteButton); 

    //now append everything to actual ul list
    taskList.appendChild(taskDiv);
    //clear the input
    taskInput.value = "";
}


function deleteCheck(ev){
    const item = ev.target;

//delete tasks
    if(item.classList[0] === 'delete-btn'){
        const div = item.parentElement;
        div.remove();
    }

//toggle checkmark
    if(item.classList[0] === 'complete-btn' || item.classList[0] === 'task-item'){
        const task = item.parentElement;
        task.classList.toggle('completed');
        task.classList.toggle('colorChange');
    }
}
