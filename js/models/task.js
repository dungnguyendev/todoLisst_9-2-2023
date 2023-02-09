function task(_taskName, _status) {
    var min = 1
    var max = 100
    var _id = Math.floor(Math.random() * (max - min + 1)) + min;
    this.idTask = _id;
    this.taskName = _taskName;
    this.status = _status;
    // this.status = _status;
}