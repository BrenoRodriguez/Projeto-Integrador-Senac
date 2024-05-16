import { SubTask } from "./Modules/SubTask.js"
import { Task } from "./Modules/Task.js"
import { displayTask } from "./Modules/displayTasks.js"

const taskCreationWindow = document.querySelector("#taskCreationWindow")
let counterSubTask = 0

// Open Task Creation Window:

document.querySelector("#openTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "flex"
})

// Close Task Creation Window:

document.querySelector("#closeTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "none"
})

// Add and Remove Sub-Task:
document.querySelector("#addSubTask").addEventListener("click", function (ev) {

  ev.preventDefault()
  if (counterSubTask <= 4){
    const subTaskContainer = document.querySelector("#subTaskContainer")
    const subTaskDiv = document.createElement("div")
    const subTaskHeader = document.createElement("div")
    const subTaskLabel = document.createElement("label")
    const subTaskInput = document.createElement("input")
    const subTaskRemove = document.createElement("i")
    // Setting Up:
    subTaskHeader.className = "subTaskHeader"
    subTaskDiv.className = "subTaskDiv"
    subTaskLabel.innerText = "Sub-Tarefa"
    subTaskLabel.className = "labels subTaskLabel"
    subTaskInput.type = "text"
    subTaskInput.className = "inputs subTaskInput"
    subTaskRemove.className = "fa-solid fa-xmark closeMark removeTaskButton"

    // Removing:

    subTaskRemove.addEventListener("click", function (ev) {
      ev.preventDefault()
      const subTaskElement = subTaskRemove.parentElement.parentElement
      subTaskElement.remove()
      counterSubTask--
    })
    counterSubTask++
    // Adding:
    subTaskHeader.append(subTaskLabel, subTaskRemove)
    subTaskDiv.append(subTaskHeader, subTaskInput)
    subTaskContainer.appendChild(subTaskDiv)
  }

})

// Storage Task:

document.querySelector("#submitTask").addEventListener("click", function (ev) {
  ev.preventDefault()
  const subTaskContainer = document.querySelector("#subTaskContainer")
  const newTask = new Task()
  const taskInput = document.querySelector("#taskInput")
  const personInput = document.querySelector("#personInput")
  const newSubTasks = []

  // Storage Sub-Task:
  document.querySelectorAll(".subTaskDiv").forEach(function (container) {
    let newSubTask = new SubTask()
    newSubTask.title = `${container.querySelector(".subTaskInput").value}`
    newTask.subTaskContainer.push(newSubTask)
  })

  //Sub Task Value
  newTask.subTaskContainer.forEach(function(subTaskparam){
    subTaskparam.percentageValue = newTask.subTaskPercentage()
  })


  // Assigning Values:
  newTask.taskTitle = `${taskInput.value}`
  newTask.assignedPerson = `${personInput.value}`

  displayTask(newTask)

  // Cleaning Inputs:
  taskInput.value = ""
  personInput.value = ""
  subTaskContainer.replaceChildren
  taskCreationWindow.style.display = "none"
})
