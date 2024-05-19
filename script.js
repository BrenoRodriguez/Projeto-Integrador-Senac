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


class Task {
  constructor() {
    this.taskTitle = ""
    this.taskPercentage = 0
    this.assignedPerson = ""
    this.subTaskContainer = []
    this.isComplete = false
  }
  subTaskPercentage() {
    const containerLength = this.subTaskContainer.length
    const subTaskPercentage = Math.round(100 / containerLength)
    return subTaskPercentage
  }
}
class SubTask {
  constructor(title) {
    this.title = title
    this.isComplete = false
    this.percentageValue
  }
}

function displayTask(taskParam) {
  const taskContainer = document.querySelector(".tasksContainer")
  const taskWrapper = document.createElement("div")
  const taskTitle = document.createElement("h3")
  const taskPerson = document.createElement("p")
  const taskPercentage = document.createElement("p")
  const subTasksContainer = document.createElement("div")
  const cardHeader = document.createElement("div")

  // Handling Sub-Tasks:
  taskParam.subTaskContainer.forEach(function (subTaskParam) {
    const subTaskWrapper = document.createElement("div")
    const subTaskTitle = document.createElement("h4")
    const subTaskCheckbox = document.createElement("input")

    subTaskWrapper.className = "subTaskWrapper"
    subTaskTitle.innerText = subTaskParam.title
    subTaskTitle.className = "subTaskTitle"
    subTaskCheckbox.type = "checkbox"
    subTaskCheckbox.dataset.amount = subTaskParam.percentageValue
    subTaskCheckbox.className = "subTaskCheckbox notClicked"

    subTaskCheckbox.addEventListener("click", function(ev){
      const cardPercentageElement = subTaskCheckbox.parentElement.parentElement.parentElement.firstChild.lastChild
      const subTaskParagraph = subTaskCheckbox.parentElement.lastChild

      if(subTaskCheckbox.className === "subTaskCheckbox notClicked"){
        console.log("aaaa")
        subTaskParagraph.style.textDecoration = "line-through"
        cardPercentageElement.dataset.percentage = Number(cardPercentageElement.dataset.percentage) + Number(subTaskCheckbox.dataset.amount)
        cardPercentageElement.innerText = `${cardPercentageElement.dataset.percentage}%`
        if(cardPercentageElement.innerText == "99%"){
          cardPercentageElement.innerText = "100%"
        }
        subTaskCheckbox.className =  "subTaskCheckbox isClicked"
      } else {
        console.log("bbbb")
        subTaskCheckbox.className =  "subTaskCheckbox notClicked"
        subTaskParagraph.style.textDecoration = "none"
        cardPercentageElement.dataset.percentage = Number(cardPercentageElement.dataset.percentage) - Number(subTaskCheckbox.dataset.amount)
        cardPercentageElement.innerText = `${cardPercentageElement.dataset.percentage}%`
      }
    })


    subTaskWrapper.append(subTaskCheckbox,subTaskTitle)
    subTasksContainer.appendChild(subTaskWrapper)
  })

  taskTitle.innerText = taskParam.taskTitle
  taskTitle.className = "taskTitle"
  taskPerson.innerText = taskParam.assignedPerson
  taskPerson.className = "taskPerson"
  taskPercentage.innerText = "0%"
  taskPercentage.className = "taskPercentage"
  taskPercentage.dataset.percentage = "0"
  taskWrapper.className = "taskCard"
  cardHeader.className = "cardHeader"
  subTasksContainer.className = "subTaskContainer"

 cardHeader.append(taskTitle, taskPercentage)
  taskWrapper.append(cardHeader, taskPerson, subTasksContainer)
  taskContainer.append(taskWrapper)
}
