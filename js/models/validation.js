function Validation() {
    this.emptyCheck = function (value, spanId, mess) {
        if (value === "") {
            getEle(spanId).style.display = "block"
            getEle(spanId).style.color = "red"
            getEle(spanId).style.fontSize = "14px"
            getEle(spanId).innerHTML = mess
            return false
        }
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    }
    this.nameSakeTask = function(value,spanId,mess,arr){
        var exist = false;
        for(let i = 0; i < arr.length;i++){
            var task = arr[i]
            if(task.taskName === value){
                exist = true
                break
            }
        }
        if (exist) {
            getEle(spanId).style.display = "block"
            getEle(spanId).style.color = "red"
            getEle(spanId).style.fontSize = "14px"
            getEle(spanId).innerHTML = mess
            return false;
          }
      
          getEle(spanId).style.display = "none";
          getEle(spanId).innerHTML = "";
          return true;
    }
    this.nameSakeCledTask = function(value,spanId,mess,arrCompleted){
        var exist = false;
        for(let i = 0; i < arrCompleted.length;i++){
            var completedTask = arrCompleted[i]
            if(completedTask.taskName === value){
                exist = true
                break
            }
        }
        if (exist) {
            getEle(spanId).style.display = "block"
            getEle(spanId).style.color = "red"
            getEle(spanId).style.fontSize = "14px"
            getEle(spanId).innerHTML = mess
            return false;
          }
      
          getEle(spanId).style.display = "none";
          getEle(spanId).innerHTML = "";
          return true;
    }
}