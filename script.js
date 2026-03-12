function add() {

let task = document.getElementById("task").value
let count = document.getElementById("count").value

if(count === "") {
alert("Enter number")
return
}

let li = document.createElement("li")

li.innerText = task + " : " + count

document.getElementById("list").appendChild(li)

// clear form
document.getElementById("count").value = ""

}

function addTask(){

let newTask = prompt("Enter new task name")

if(newTask){

let option = document.createElement("option")

option.text = newTask
option.value = newTask

document.getElementById("task").appendChild(option)

}

}