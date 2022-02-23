function completed_task() {

  let element = document.querySelectorAll('input[type=checkbox]');

  for (let k = 0; k < element.length; k++) {
    element[k].addEventListener("click", function() {
      if (element[k].checked == true) {
        document.getElementsByTagName('li').item(k).style.color = "red";
        document.getElementsByTagName('li').item(k).style.textDecoration = "line-through";
      }
      if (element[k].checked == false) {
        document.getElementsByTagName('li').item(k).style.color = "black";
        document.getElementsByTagName('li').item(k).style.textDecoration = "none";
      }
    })
  }
}

function redirect() {

  let element = document.querySelectorAll('li');

  for (let k = 0; k < element.length; k++) {
    element[k].addEventListener("click", function() {
      window.location.replace("http://127.0.0.1:5500/projeto-to-do-list/task_page/Task_page.html")

    })
  }
}

function new_task() {

  let new_task = document.getElementById("add").value;
  // console.log(new_task);

  let new_task_div = document.getElementById("tasks");

  let new_element = document.createElement("li")
  let list = document.createElement("ul");

  let complete_task = document.createElement("input");
  complete_task.type = "checkbox";
  complete_task.id = "complete_tasks";

  let new_task_item = document.createTextNode(new_task);
  new_task_div.appendChild(new_element);
  new_element.appendChild(new_task_item);
  new_element.appendChild(complete_task);

  // pegar o tamanho atual das tasks e usar esse valor para atribuir como ID em cada task
  let test = document.querySelectorAll("li")
  console.log(test);

  for (let k = 0; k < test.length; k++) {
    new_element.id = k
    console.log(new_element.id);
    for (let i = 0; i < test.length; i++) {
      complete_task.id = k
      console.log("ss");
    }
  }


  // pegar cada task e atribuir o valor vindo do tamanho da mesma ao seu id
  // podendo depois acessar esse id individualmente para cada task

  completed_task();
  redirect();
  return new_task_item
}
/* função que vai remover o indicador de lista caso não seja criado uma
task */

function validate(e) {
  if (event.key === "Enter") {
    e.preventDefault();
    new_task();
  }
}

function clearInput() {

  let input = document.getElementById("add");
  if (event.key === "Enter") {
    input.value = ""
  }
}


function limpar() {
  let input = document.getElementById("add");
  let button = document.getElementById("add_submit")
  button.addEventListener("click", input.value = "")
}





