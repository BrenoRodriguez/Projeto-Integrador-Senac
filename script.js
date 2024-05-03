const taskCreationWindow = document.querySelector("#taskCreationWindow")
const taskStorage = []
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
  const subTasksContainerMain = document.querySelector(".subTasksContainer")

  subTaskLabel.innerText = `Sub-tarefa:`
  subTaskContainer.class = "subTaskContainers"
  subTaskInput.class = "subTaskInput"
  subTaskLabel.class = "subTaskLabel"
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
document.querySelector("#addTaskButton").addEventListener("click", function () {})
