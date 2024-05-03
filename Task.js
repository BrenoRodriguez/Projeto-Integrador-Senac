export default class Task {
  constructor(taskTitle, completionPercentage, subTasks, assignedPerson) {
    this.taskTitle = taskTitle
    this.completionPercentage = completionPercentage
    this.subTasks = [subTasks]
    this.assignedPerson = assignedPerson
    this.isComplete = false
  }
}
