import { SubTask } from "./Modules/SubTask.js"
import { Task } from "./Modules/Task.js"
import { displayTask } from "./Modules/displayTasks.js"

const taskCreationWindow = document.querySelector("#taskCreationWindow")

// Open Task Creation Window:

document.querySelector("#openTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "block"
})

// Close Task Creation Window:

document.querySelector("#closeTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "none"
})

// Add and Remove Sub-Task:

document.querySelector("#addSubTask").addEventListener("click", function (ev) {
  ev.preventDefault()
  const subTaskContainer = document.querySelector("#subTaskContainer")
  const subTaskDiv = document.createElement("div")
  const subTaskLabel = document.createElement("label")
  const subTaskInput = document.createElement("input")
  const subTaskRemove = document.createElement("button")

  // Setting Up:

  subTaskDiv.className = "subTaskDiv"
  subTaskLabel.innerText = "Sub-Tarefa:"
  subTaskLabel.className = "subTaskLabel"
  subTaskInput.type = "text"
  subTaskInput.className = "subTaskInput"
  subTaskRemove.innerText = "X"
  subTaskRemove.className = "removeTaskButton"

  // Removing:

  subTaskRemove.addEventListener("click", function (ev) {
    ev.preventDefault()
    const subTaskElement = subTaskRemove.parentElement
    subTaskElement.remove()
  })

  // Adding:

  subTaskDiv.append(subTaskLabel, subTaskInput, subTaskRemove)
  subTaskContainer.appendChild(subTaskDiv)
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

  // Assigning Values:
  newTask.taskTitle = `${taskInput.value}`
  newTask.assignedPerson = `${personInput.value}`
  newTask.subTaskPercentage()
  displayTask(newTask)

  // Cleaning Inputs:
  taskInput.value = ""
  personInput.value = ""
  subTaskContainer.replaceChildren
  taskCreationWindow.style.display = "none"
})
