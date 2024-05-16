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
    const subTaskPercentage = Math.round(100 / containerLength)
    return subTaskPercentage
  }
}
