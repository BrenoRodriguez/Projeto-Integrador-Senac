export function displayTask(taskParam) {
  const taskContainer = document.querySelector(".tasksContainer")
  const taskWrapper = document.createElement("div")
  const taskTitle = document.createElement("h3")
  const taskPerson = document.createElement("p")
  const taskPercentage = document.createElement("p")
  const subTasksContainer = document.createElement("div")

  // Handling Sub-Tasks:
  taskParam.subTaskContainer.forEach(function (subTaskParam) {
    const subTaskWrapper = document.createElement("div")
    const subTaskTitle = document.createElement("h4")
    const subTaskCheckbox = document.createElement("input")

    subTaskWrapper.className = "subTaskWrapper"
    subTaskTitle.innerText = subTaskParam.title
    subTaskTitle.className = "subTaskTitle"
    subTaskCheckbox.type = "checkbox"
    subTaskCheckbox.setAttribute = ("data-percentage-value", subTaskParam.percentageValue)
    subTaskCheckbox.className = "subTaskCheckbox"

    subTaskWrapper.append(subTaskTitle, subTaskCheckbox)
    subTasksContainer.appendChild(subTaskWrapper)
  })

  taskTitle.innerText = taskParam.taskTitle
  taskTitle.className = "taskTitle"
  taskPerson.innerText = taskParam.assignedPerson
  taskPerson.className = "taskPerson"
  taskPercentage.innerText = "0%"
  taskPercentage.className = "taskPercentage"
  taskWrapper.className = "taskCard"

  taskWrapper.append(taskTitle, taskPerson, taskPercentage, subTasksContainer)
  taskContainer.append(taskWrapper)
}
