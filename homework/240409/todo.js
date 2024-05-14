const form = document.querySelector(".todo-form");
const form1 = document.querySelector("#form-first");
const form2 = document.querySelector("#form-second");
const form3 = document.querySelector("#form-third");
const btn = document.querySelector(".plus-button");
const btn1 = document.querySelector(".plus-button1");
const btn2 = document.querySelector(".plus-button2");
const btn3 = document.querySelector(".plus-button3");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const list1 = document.querySelector("#list-first");
const list2 = document.querySelector("#list-second");
const list3 = document.querySelector("#list-third");

// 초기화 함수
const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
  form1.addEventListener("submit", addTodoItem1);
  btn1.addEventListener("click", displayForm1);
  form2.addEventListener("submit", addTodoItem2);
  btn2.addEventListener("click", displayForm2);
  form3.addEventListener("submit", addTodoItem3);
  btn3.addEventListener("click", displayForm3);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display === "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};
const displayForm1 = () => {
  form1.style.display === "none"
    ? (form1.style.display = "block")
    : (form1.style.display = "none");
};
const displayForm2 = () => {
  form2.style.display === "none"
    ? (form2.style.display = "block")
    : (form2.style.display = "none");
};
const displayForm3 = () => {
  form3.style.display === "none"
    ? (form3.style.display = "block")
    : (form3.style.display = "none");
};
// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = input.value;
  if (todoContent) printTodoItem(todoContent);
};

const addTodoItem1 = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input1").value;
  if (todoContent) printTodoItem1(todoContent);
};

const addTodoItem2 = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input2").value;
  if (todoContent) printTodoItem2(todoContent);
};

const addTodoItem3 = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input3").value;
  if (todoContent) printTodoItem3(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  const todoItem = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const todoText = document.createElement("span");
  const todoDel = document.createElement("img");
  todoDel.src = "./images/-버튼 기본.png";

  todoItem.className = "todoItem";
  checkbox.className = "checkbox";
  todoText.className = "todoText";
  todoDel.className = "todoDel";

  // [할 일 내용]
  todoText.innerText = text;
  todoText.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  todoDel.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  list.appendChild(todoItem);

  document.querySelector(".todo-list").appendChild(todoItem);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 입력 받은 할 일 출력 함수
const printTodoItem1 = (text) => {
  const todoItem1 = document.createElement("div");
  const checkbox1 = document.createElement("input");
  checkbox1.type = "checkbox";
  const todoText1 = document.createElement("span");
  const todoDel1 = document.createElement("img");
  todoDel1.src = "./images/-버튼 기본.png";

  todoItem1.className = "todoItem1";
  checkbox1.className = "checkbox1";
  todoText1.className = "todoText1";
  todoDel1.className = "todoDel1";
  // [할 일 내용]
  todoText1.innerText = text;
  todoText1.addEventListener("click", toggleTodoToDone1);

  // [할 일 삭제 버튼]
  todoDel1.innerText = "삭제";
  todoDel1.addEventListener("click", deleteTodoItem1);

  // [생성한 요소들 연결]
  todoItem1.appendChild(checkbox1);
  todoItem1.appendChild(todoText1);
  todoItem1.appendChild(todoDel1);
  list1.appendChild(todoItem1);

  // [input 창 초기화]
  document.querySelector(".todo-input1").value = "";
};

const printTodoItem2 = (text) => {
  const todoItem2 = document.createElement("div");
  const checkbox2 = document.createElement("input");
  checkbox2.type = "checkbox";
  const todoText2 = document.createElement("span");
  const todoDel2 = document.createElement("img");
  todoDel2.src = "./images/-버튼 기본.png";

  todoItem2.className = "todoItem2";
  checkbox2.className = "checkbox2";
  todoText2.className = "todoText2";
  todoDel2.className = "todoDel2";
  // [할 일 내용]
  todoText2.innerText = text;
  todoText2.addEventListener("click", toggleTodoToDone2);

  // [할 일 삭제 버튼]
  todoDel2.innerText = "삭제";
  todoDel2.addEventListener("click", deleteTodoItem2);

  // [생성한 요소들 연결]
  todoItem2.appendChild(checkbox2);
  todoItem2.appendChild(todoText2);
  todoItem2.appendChild(todoDel2);
  list2.appendChild(todoItem2);

  // [input 창 초기화]
  document.querySelector(".todo-input2").value = "";
};

const printTodoItem3 = (text) => {
  const todoItem3 = document.createElement("div");
  const checkbox3 = document.createElement("input");
  checkbox3.type = "checkbox";
  const todoText3 = document.createElement("span");
  const todoDel3 = document.createElement("img");
  todoDel3.src = "./images/-버튼 기본.png";
  todoItem3.className = "todoItem3";
  checkbox3.className = "checkbox3";
  todoText3.className = "todoText3";
  todoDel3.className = "todoDel3";
  // [할 일 내용]
  todoText3.innerText = text;
  todoText3.addEventListener("click", toggleTodoToDone3);

  // [할 일 삭제 버튼]
  todoDel3.innerText = "삭제";
  todoDel3.addEventListener("click", deleteTodoItem3);

  // [생성한 요소들 연결]
  todoItem3.appendChild(checkbox3);
  todoItem3.appendChild(todoText3);
  todoItem3.appendChild(todoDel3);
  list3.appendChild(todoItem3);

  // [input 창 초기화]
  document.querySelector(".todo-input3").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  list.removeChild(target);
};
const deleteTodoItem1 = (e) => {
  const target = e.target.parentNode;
  list1.removeChild(target);
};
const deleteTodoItem2 = (e) => {
  const target = e.target.parentNode;
  list2.removeChild(target);
};
const deleteTodoItem3 = (e) => {
  const target = e.target.parentNode;
  list3.removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};
const toggleTodoToDone1 = (e) => {
  deleteTodoItem1(e);
  printDoneItem1(e.target.innerText);
};
const toggleTodoToDone2 = (e) => {
  deleteTodoItem2(e);
  printDoneItem2(e.target.innerText);
};
const toggleTodoToDone3 = (e) => {
  deleteTodoItem3(e);
  printDoneItem3(e.target.innerText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");

  // [끝낸 일 내용]
  doneText.innerText = text;
  doneText.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  doneDel.innerText = "삭제";
  doneDel.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector(".done-list").appendChild(doneItem);
};
const printDoneItem1 = (text) => {
  const doneItem1 = document.createElement("input");
  doneItem1.type = "checkbox";
  const doneText1 = document.createElement("span");
  const doneDel1 = document.createElement("button");

  // [끝낸 일 내용]
  doneText1.innerText = text;
  doneText1.addEventListener("click", toggleDoneToDo1);

  // [끝낸 일 삭제 버튼]
  doneDel1.innerText = "삭제";
  doneDel1.addEventListener("click", deleteDoneItem1);

  // [생성한 요소들 연결]
  doneItem1.appendChild(doneText);
  doneItem1.appendChild(doneDel);
  document.querySelector(".done-list1").appendChild(doneItem1);
};
const printDoneItem2 = (text) => {
  const doneItem2 = document.createElement("li");
  const doneText2 = document.createElement("span");
  const doneDel2 = document.createElement("button");

  // [끝낸 일 내용]
  doneText2.innerText = text;
  doneText2.addEventListener("click", toggleDoneToDo2);

  // [끝낸 일 삭제 버튼]
  doneDel2.innerText = "삭제";
  doneDel2.addEventListener("click", deleteDoneItem2);

  // [생성한 요소들 연결]
  doneItem2.appendChild(doneText2);
  doneItem2.appendChild(doneDel2);
  document2.querySelector(".done-list2").appendChild(doneItem2);
};
const printDoneItem3 = (text) => {
  const doneItem3 = document.createElement("li");
  const doneText3 = document.createElement("span");
  const doneDel3 = document.createElement("button");

  // [끝낸 일 내용]
  doneText3.innerText = text;
  doneText3.addEventListener("click", toggleDoneToDo3);

  // [끝낸 일 삭제 버튼]
  doneDel3.innerText = "삭제";
  doneDel3.addEventListener("click", deleteDoneItem3);

  // [생성한 요소들 연결]
  doneItem3.appendChild(doneText3);
  doneItem3.appendChild(doneDel3);
  document.querySelector(".done-list3").appendChild(doneItem3);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};
const deleteDoneItem1 = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list1").removeChild(target);
};
const deleteDoneItem2 = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list2").removeChild(target);
};
const deleteDoneItem3 = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list3").removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};
// 시작 함수
init();
