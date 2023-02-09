//đối tượng
var myTask = new taskList();
var validation = new Validation();
// Hàm rút gọn cú pháp
function getEle(id) {
  return document.getElementById(id);
}

getLocalStorage()
// Lấy thông tin task
function getProfileTask() {
  let newItem = getEle("newTask").value

  // validation

  var isValid = true

  isValid &=
    validation.emptyCheck(newItem, "tbMytask", "(*) Vui lòng nhập task của bạn") &&
    validation.nameSakeTask(newItem, "tbMytask", "(*) Bạn đang bị trùng thông tin task, Vui nhập task mới", myTask.arr) &&
    validation.nameSakeCledTask(newItem, "tbMytask", "(*) Bạn đang bị trùng thông tin task completed, Vui lòng nhập task mới", myTask.arrCompleted)

  if (!isValid) return null;

  let tas = new task(newItem, "todo")
  return tas
}
getEle("addItem").addEventListener("click", function () {
  var task = getProfileTask()
  if (task) {
    myTask.addTask(task)
    setLocalStorage()
    renderTask(myTask.arr)
  }
})
// render list task && completedTask

function renderTask(data) {
  var contextHTML = ""
  data.forEach((item, index) => {
    contextHTML += `
            <li>
                  <span>${item.taskName}</span>
                  <div class="buttons">
                      <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteTassk('${item.idTask}')">
                          <i class="fa fa-trash-alt"></i>
                      </button>
                      <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="changeTask('${item.idTask}')" >
                          <i class="far fa-check-circle"></i>
                          <i class="fas fa-check-circle"></i>
                      </button>
                  </div>
              </li>
            `
    // change "todo" -> "completed"
  });

  getEle("todo").innerHTML = contextHTML

}
function renderCompleted(data) {
  var contextHTML = ""
  data.forEach((item, index) => {
    contextHTML += `
            <li>
                  <span>${item.taskName}</span>
                  <div class="buttons">
                      <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteCompleted('${item.idTask}')">
                          <i class="fa fa-trash-alt"></i>
                      </button>
                      <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="changeCompleted('${item.idTask}')" >
                          <i class="far fa-check-circle"></i>
                          <i class="fas fa-check-circle"></i>
                      </button>
                  </div>
              </li>
            `
    // change "todo" -> "completed"
  });

  getEle("completed").innerHTML = contextHTML

}

// delete task

function deleteTassk(id) {

  myTask.deleteTask(id)
  renderTask(myTask.arr)
  console.log(myTask.arr);

}
function deleteCompleted(id) {

  myTask.deleteCompleted(id)
  renderCompleted(myTask.arrCompleted)
  console.log(myTask.arrCompleted);

}

// change todo -> completed

function changeTask(id) {

  myTask.addCompleted(id)
  console.log(myTask.arrCompleted);
  renderCompleted(myTask.arrCompleted)

  myTask.deleteTask(id)
  renderTask(myTask.arr)

}
function changeCompleted(id, status) {
  console.log(status);

  console.log(id)
  myTask.addTask1(id)
  renderTask(myTask.arr)

  myTask.deleteCompleted(id)
  renderCompleted(myTask.arrCompleted)

}

/**
 * Luu task
 */
function setLocalStorage() {
  //convert data JSON => String
  var dataStringTask = JSON.stringify(myTask.arr);
  var dataStringCompletedTask = JSON.stringify(myTask.arrCompleted);
  localStorage.setItem("Task", dataStringTask);
  localStorage.setItem("completeTask", dataStringCompletedTask);
}

/**
 * Lấy data từ LocalStorage
 */
function getLocalStorage() {
  var dataStringTask = localStorage.getItem("Task");
  var dataStringCompletedTask = localStorage.getItem("completeTask");
  //convert string => JSON
  myTask.arr = JSON.parse(dataStringTask);
  myTask.arrCompleted = JSON.parse(dataStringCompletedTask);
  //render ul
  renderTask(myTask.arr);
  renderCompleted(myTask.arrCompleted);
}

