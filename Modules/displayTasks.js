export function displayTask(taskParam) {
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
