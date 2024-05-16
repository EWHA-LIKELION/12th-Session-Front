const form = document.querySelector(".todo-input");
const formLine = document.querySelector(".listTodo .lineTodo-input");
const btn = document.querySelector(".plus-button");
const btnImg = document.querySelector(".plus-button img");

// 초기화 함수
const init = () => {
  btn.addEventListener("click", displayForm);

  form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoItem(e);
    }
  });
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.visibility === "hidden"
    ? ((form.style.visibility = "visible"),
      (formLine.style.visibility = "visible"),
      (btnImg.style.transform = "rotate(0deg)"))
    : ((form.style.visibility = "hidden"),
      (formLine.style.visibility = "hidden"),
      (btnImg.style.transform = "rotate(-45deg)"),
      (document.querySelector(".todo-input").value = ""));
};

// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoFlex = document.createElement("div");
  const todoText = document.createElement("span");
  const todoEnd = document.createElement("button");
  const todoLine = document.createElement("div");

  //스타일 추가
  todoItem.classList.add("text");
  todoItem.classList.add("listTodo");
  todoFlex.classList.add("listFlex");
  todoEnd.classList.add("square");
  todoLine.classList.add("lineTodo");

  // [할 일 내용]
  todoText.innerText = text;
  todoEnd.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  todoText.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  todoItem.appendChild(todoFlex);
  todoFlex.appendChild(todoEnd);
  todoFlex.appendChild(todoText);
  todoItem.appendChild(todoLine);
  document.querySelector(".List").appendChild(todoItem);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.target.parentNode.parentNode;
  document.querySelector(".List").removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  const todoText = e.target.parentNode.querySelector("span").innerText;
  deleteTodoItem(e);
  printDoneItem(todoText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneFlex = document.createElement("div");
  const doneText = document.createElement("span");
  const doneTodo = document.createElement("button");
  const doneDel = document.createElement("button");
  const doneImg = document.createElement("img");
  const doneLine = document.createElement("div");

  //스타일 추가
  doneItem.classList.add("text");
  doneItem.classList.add("listDone");
  doneFlex.classList.add("listFlex");
  doneTodo.classList.add("listDoneBtn");
  doneImg.src = "-.svg";
  doneDel.classList.add("del-button");
  doneLine.classList.add("lineDone");

  // [끝낸 일 내용]
  doneText.innerText = text;
  doneTodo.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  doneDel.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  doneItem.appendChild(doneFlex);
  doneFlex.appendChild(doneText);
  doneFlex.appendChild(doneTodo);
  doneTodo.appendChild(doneDel);
  doneDel.appendChild(doneImg);
  doneItem.appendChild(doneLine);
  document.querySelector(".ListEnd").appendChild(doneItem);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.parentNode.parentNode.parentNode;
  document.querySelector(".ListEnd").removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  const doneText =
    e.target.parentNode.parentNode.querySelector("span").innerText;
  deleteDoneItem(e);
  printTodoItem(doneText);
};

// 시작 함수
init();
