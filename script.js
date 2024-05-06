const taskCreationWindow = document.querySelector("#taskCreationWindow")
const taskStorage = []

class Task {
  constructor(taskTitle, subTasks, assignedPerson) {
    this.taskTitle = taskTitle
    this.completionPercentage = 0
    this.subTasks = [subTasks]
    this.assignedPerson = assignedPerson
    this.isComplete = false
  }
  calcPercentageEachSubTask() {
    const lengthSubtask = this.subTasks.length
    const percentageAmountEach = Math.floor(100 / lengthSubtask)
    this.subTasks.forEach(function (subtask) {
      subtask.percentageValue = percentageAmountEach
    })
  }
}
class SubTask {
  constructor(title) {
    this.title = title
    this.isComplete = false
    this.percentageValue
  }
}
// Open Task Creation Window:
document.querySelector("#openTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "block"
})

// Close Task Window:
document.querySelector("#closeTaskCreation").addEventListener("click", function (ev) {
  ev.preventDefault()
  taskCreationWindow.style.display = "none"
})

// Create Sub-Task and Remove:
document.querySelector("#createSubTask").addEventListener("click", function (ev) {
  ev.preventDefault()
  const subTaskLabel = document.createElement("label")
  const subTaskInput = document.createElement("input")
  const subTaskRemove = document.createElement("button")
  const subTaskContainer = document.createElement("div")
  const subTasksContainerMain = document.querySelector("#subTasksContainer")

  subTaskLabel.innerText = `Sub-tarefa:`
  subTaskContainer.className = "subTaskContainers"
  subTaskInput.className = "subTaskInput"
  subTaskLabel.className = "subTaskLabel"
  subTaskRemove.innerText = "X"

  // Remove Part:
  subTaskRemove.addEventListener("click", function (ev) {
    ev.preventDefault()
    const idTask = subTaskRemove.parentElement
    idTask.remove()
  })

  subTaskContainer.append(subTaskLabel, subTaskInput, subTaskRemove)
  subTasksContainerMain.appendChild(subTaskContainer)
})

// Storage Task:
document.querySelector("#addTaskButton").addEventListener("click", function (ev) {
  ev.preventDefault()
  const subTasksForTask = []
  const taskObject = new Task()
  const subTasksContainerMain = document.querySelector("#subTasksContainer")
  // Sub-Task Storage:
  document.querySelectorAll(".subTaskContainers").forEach(function (container) {
    let childrenValue = new SubTask()
    childrenValue.title = `${container.querySelector("input").value}`
    subTasksForTask.push(childrenValue)
  })
  taskObject.taskTitle = `${document.querySelector("#taskInput").value}`
  taskObject.subTasks = subTasksForTask
  taskObject.assignedPerson = `${document.querySelector("#assignedPersonInput").value}`
  taskObject.calcPercentageEachSubTask()
  displayTask(taskObject)
  document.querySelector("#taskInput").value = ""
  document.querySelector("#assignedPersonInput").value = ""
  subTasksContainerMain.replaceChildren()
  taskCreationWindow.style.display = "none"
})

/* Display Tasks */

function displayTask(taskParam) {
  const taskDiv = document.createElement("div")
  const taskHeader = document.createElement("h2")
  const allSubTasks = document.createElement("div")
  const taskPercentage = document.createElement("p")
  const taskPerson = document.createElement("p")

  taskParam.subTasks.forEach(function (subtask) {
    const subTaskContainer = document.createElement("div")
    const subTaskText = document.createElement("h3")
    const subTaskInput = document.createElement("input")
    subTaskText.innerText = subtask.title
    subTaskInput.type = "checkbox"
    subTaskInput.dataset = `${subtask.percentageValue}`
    subTaskContainer.className = "subTaskContainer"
    subTaskContainer.append(subTaskText, subTaskInput)
    allSubTasks.append(subTaskContainer)
  })

  taskPercentage.innerText = "0%"
  taskHeader.innerText = taskParam.taskTitle
  taskPerson.innerText = taskParam.assignedPerson
  taskDiv.append(taskHeader, taskPercentage, taskPerson, allSubTasks)
  document.querySelector("main").append(taskDiv)
}
