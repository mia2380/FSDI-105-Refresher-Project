let listTasks = [];//empty array
//constructor
function Task(description,priority){
    this.title=description;//this is the problematic ***
    this.priority=priority;
}

//global variable
let inputPractice = document.getElementById('txtPractice'); //getting the HTML element 
let selectPriority = document.getElementById('selPriority'); //getting the HTML element
let task="";

function register(){
    let newTask = new Task(inputPractice.value,selectPriority.value);
    listTasks.push(newTask);
    display(newTask);
    inputPractice.value = "";//clearing the input
    inputPractice.className="error";//adding the class
}

function display(aTask){
    let tasksSection = document.getElementById("tasks");//getting the HTML element
    //task += "<div class='task'>"  + inputPractice.value + "</p>"; //create the task HTML element
    task+=`<li class="task">${aTask.title} ---  ${aTask.priority} <button>🗑️</button></li>`;
    tasksSection.innerHTML=task;//injecting the task into the HTML
}    