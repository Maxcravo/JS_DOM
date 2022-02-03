function completed_task() {

  
  
  let element = document.getElementById("1")

  console.log(element.id);
  let complete = document.getElementById("complete_tasks");
  console.log(complete.checked);
    if (complete.checked == true) {
      element.style.color = "red"
    }
  
}


function new_task() {

  let create_elementos = [];

  let new_task = document.getElementById("add").value;
  // console.log(new_task);

  let new_task_div = document.getElementById("tasks");

  let new_element = document.createElement("li")
  let list = document.createElement("ul")


// for (let i = 0; index < array.length; index++) {

//   for (i; create_elementos < i.length; i++) {
//     new_element.id = create_elementos[i]
    
//   }
// }

  let complete_task = document.createElement("input");
  complete_task.type = "checkbox"
  complete_task.id = "complete_tasks"

  
  let new_task_item = document.createTextNode(new_task);
  new_task_div.appendChild(new_element);
  new_element.appendChild(new_task_item);
  new_element.appendChild(complete_task);

  // pegar o tamanho atual das tasks e usar esse valor para atribuir como ID em cada task
  let test = document.querySelectorAll("li").length
  console.log(test);

  // pegar cada task e atribuir o valor vindo do tamanho da mesma ao seu id
  // podendo depois acessar esse id individualmente para cada task
  let aaa = new_element.querySelectorAll("li");
  
  

  completed_task();

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
  let button = document.getElementById("add_submit");
  let input = document.getElementById("add");
  if (event.key === "Enter" ) {
    input.value = ""
  }
}


function limpar() {
  let input = document.getElementById("add");
  let button = document.getElementById("add_submit")
  button.addEventListener("click",input.value = "" )
}
  
  



