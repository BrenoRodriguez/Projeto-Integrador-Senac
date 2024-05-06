export class Task {
  constructor() {
    this.taskTitle = ""
    this.taskPercentage = 0
    this.assignedPerson = ""
    this.subTaskContainer = []
    this.isComplete = false
  }
  subTaskPercentage() {
    const containerLength = this.subTaskContainer.length
    const subTaskPercentage = Math.floor(100 / containerLength)
    this.subTaskContainer.forEach(function (subTaskParam) {
      subTaskParam.subTaskPercentage = subTaskPercentage
    })
  }
}
