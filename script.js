const taskCreationWindow = document.querySelector("#taskCreationWindow")
const taskStorage = []

class SubTask {
  constructor(title) {
    this.title = title
    this.isComplete = false
    this.percentageValue = Task.calcPercentageEachSubTask()
  }
}
class Task {
  constructor(taskTitle, completionPercentage, subTasks, assignedPerson) {
    this.taskTitle = taskTitle
    this.completionPercentage = 0
    this.subTasks = [subTasks]
    this.assignedPerson = assignedPerson
    this.isComplete = false
  }
  calcPercentageEachSubTask() {
    const lengthSubtask = this.subTasks.length
    const percentageAmountEach = floor(100 / lengthSubtask)
    return percentageAmountEach
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
  taskStorage.push(taskObject)
  document.querySelector("#taskInput").value = ""
  document.querySelector("#assignedPersonInput").value = ""
  subTasksContainerMain.replaceChildren()
  taskCreationWindow.style.display = "none"
})
