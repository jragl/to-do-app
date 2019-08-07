function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  // create an array to hold my To-Do Items
  let toDos = [];
  let id = 0;

  function renderTheUI(){
//  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  toDoList.textContent = "";

    toDos.forEach(function(toDo){
      // create a new li - add <li></li> to html
      const newLi = document.createElement("li");
      // create a new input
      const checkbox = document.createElement("input");
      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // create a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete!";

      // listen for "Delete"
      deleteBtn.addEventListener("click", event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })

        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    })

  }

  function createNewToDo(){
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value){ return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    //console.log(toDos);

    newToDoText.value = "";
    renderTheUI();
  }

  addToDoForm.addEventListener("submit",event => {
    event.preventDefault();
    createNewToDo();
    //console.log(toDos);
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
