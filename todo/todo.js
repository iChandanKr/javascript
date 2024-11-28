import { todoList } from "./task.js";

const title = document.querySelector("#task-input");
const description = document.querySelector("#task-description");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskContainer = document.querySelector("#todo-list");
const dialogBox = document.querySelector("#dialog");
const dialogBoxTitle = document.querySelector("#dialog").children[0];
const dialogBoxDesc = document.querySelector("#dialog").children[1];
const dialogBoxBtn = document.querySelector("#dialog").children[2];

let arr = todoList;
let taskIdToUpdate;
function renderDom() {
  taskContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = arr[i].title;
    listItem.dataset.id = arr[i].id;
    listItem.addEventListener("click", function () {
      console.log(this.getAttribute("data-id"));
      taskIdToUpdate;
    });
    listItem.appendChild(taskSpan);
    listItem.dataset.id = arr[i].id;
    listItem.dataset.title = arr[i].title;
    listItem.dataset.description = arr[i].description;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.addEventListener("click", function () {
      const currentTaskId = this.parentNode.parentNode.getAttribute("data-id");
      markAsDone(currentTaskId);

      listItem.classList.toggle("completed");
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✗";
    deleteBtn.addEventListener("click", function () {
      console.log(
        "title is ",
        this.parentNode.parentNode.getAttribute("data-id")
      );
      deleteTask(this.parentNode.parentNode.getAttribute("data-id"));
    });
    deleteBtn.classList.add("delete-btn");

    // edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.addEventListener("click", function () {
      taskIdToUpdate = this.parentNode.parentNode.getAttribute("data-id");
      //   description.value =
      //     ;
      dialogBoxTitle.value =
        this.parentNode.parentNode.getAttribute("data-title");
      dialogBoxDesc.value =
        this.parentNode.parentNode.getAttribute("data-description");
      dialogBoxBtn.addEventListener("click", updateTask);

      dialogBox.removeAttribute("hidden");
    });

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(editBtn);
    listItem.appendChild(buttonsDiv);
    taskContainer.appendChild(listItem);
  }

  addTaskBtn.addEventListener("click", addTask);
}
renderDom();

function deleteTask(id) {
  console.log(id);
  arr = arr.filter((task) => task.id != id);
  console.log(arr);
  renderDom();
}

function addTask() {
  if (title.value == "" || description.value == "") {
    alert("please enter title and description of task");
    return;
  }
  arr.push({
    id: todoList[todoList.length - 1].id + 1,
    title: title.value.trim(),
    description: description.value.trim(),
    isCompleted: false,
    favourite: false,
  });
  title.value = "";
  description.value = "";
  renderDom();
}

function markAsDone(id) {
  arr = arr.map((task) => {
    if (task.id == id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
}

function updateTask() {
  console.log(taskIdToUpdate);
  const newTitle = dialogBoxTitle.value;
  const newDes = dialogBoxDesc.value;
  const id = taskIdToUpdate;
  arr = arr.map((task) => {
    if (task.id == id) {
        console.log(id)
      return { ...task, title: newTitle, description: newDes };
    }
    return task;
  });
  console.log(arr);
  dialogBox.setAttribute("hidden", true);
  taskIdToUpdate = undefined;
  renderDom();
}
