function GetTask() {
  let taskTitle = localStorage.getItem();

}

function ReceiveParams() {

  let data = new URLSearchParams(window.location.search);
  let info = data.get("task")
  console.log(data)
  let title = document.getElementById("Title");


  title.append(info);

}
