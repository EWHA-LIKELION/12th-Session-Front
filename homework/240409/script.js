const form = document.querySelector(".write");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector("#textarea").textContent;
  if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
  const li = document.createElement("li");
  const doBox = document.createElement("span");
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  doneBtn.className = "doneBtn";
  doBox.className = "doBox";
  deleteBtn.className = "deleteBtn";

  doneBtn.innerText = text;
  doBox.innerText = text;

  doneBtn.addEventListener("click", toggleTodoToDone);

  deleteBtn.addEventListener("click", deleteTodoItem);

  li.appendChild(doneBtn);
  li.appendChild(doBox);
  li.appendChild(deleteBtn);

  document.querySelector(".ttd-list").appendChild(li);

  document.querySelector("#textarea").textContent = "";

  doneBtn.style.height = `${doBox.offsetHeight}px`;
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode;

  const todoList = document.querySelector(".ttd-list");
  todoList.removeChild(target);
};

const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

const printDoneItem = (text) => {
  const li = document.createElement("li");
  const doneBox = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const reBtn = document.createElement("button");

  deleteBtn.className = "deleteBtn";
  reBtn.className = "reBtn";
  doneBox.className = "doneBox";

  reBtn.innerText = text;
  doneBox.innerText = text;

  reBtn.addEventListener("click", toggleDoneToDo);

  deleteBtn.addEventListener("click", deleteDoneItem);

  li.appendChild(reBtn);
  li.appendChild(doneBox);
  li.appendChild(deleteBtn);

  document.querySelector(".d-list").appendChild(li);
  reBtn.style.height = `${doneBox.offsetHeight}px`;
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode;

  const todoList = document.querySelector(".d-list");
  todoList.removeChild(target);
};

const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

init();
