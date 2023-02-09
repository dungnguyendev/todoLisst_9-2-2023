function taskList() {
  //property
  this.arr = [];
  this.arrCompleted = [];
  //method
  this.addTask = function (task) {
    this.arr.push(task);
  };
  this.addCompleted = function (idTask) {
    var b = this.mapTask(idTask)
    console.log(b);
    var a = this.arr[b]
    console.log(a);
    this.arrCompleted.push(a);
  };
  this.addTask1 = function (idTask) {
    var b = this.mapCompleted(idTask)
    console.log(b);
    var a = this.arrCompleted[b]
    console.log(a);
    this.arr.push(a);
  };

  // tìm vị trí theo id 
  this.mapTask = function (idTask) {
    var index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].idTask == idTask) {
        index = i;
      }
    }
    return index
  }
  this.mapCompleted = function (idTask) {
    var index = -1;
    for (let i = 0; i < this.arrCompleted.length; i++) {
      if (this.arrCompleted[i].idTask == idTask) {
        index = i;
      }
    }
    return index
  }
  this.mapTask = function (idTask) {
    var index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].idTask == idTask) {
        index = i;
      }
    }
    return index
  }
  //xoa
  this.deleteTask = function (idTask) {
    var index = this.mapTask(idTask)
    console.log(index);
    if (index !== -1) {
      this.arr.splice(index, 1)
    }
  }

  this.deleteCompleted = function (idTask) {
    var index = this.mapCompleted(idTask)
    console.log(index);
    if (index !== -1) {
      this.arrCompleted.splice(index, 1)
    }
  }
}