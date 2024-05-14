const form = document.querySelector(".todo-form");
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display === "none"
    ? (form.style.display = "flex")
    : (form.style.display = "none");
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
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");
  const todoCheck = document.createElement("button");

  // [할 일 내용]
  todoText.innerHTML = `
  <div class="todo-inputtext">${text}</div>
`;

  // [할 일 삭제 버튼]
  todoDel.innerHTML = `
<svg class="todoDel" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 2.23242L12.7058 2.23242" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.49756 2.23219V1H8.57804V2.23219" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.41699 2.23242V13.0141H11.3504V2.23242" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.57324 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.0376 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.50195 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  todoDel.addEventListener("click", deleteTodoItem);

  //끝낸 일로 옮기기 버튼
  todoCheck.innerHTML = `<svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="33" height="35" rx="5" fill="#FBF8F1"/>
  </svg>
  `;

  todoCheck.addEventListener("click", toggleTodoToDone);

  // [생성한 요소들 연결]
  todoItem.appendChild(todoCheck);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".todo-list").appendChild(todoItem);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.currentTarget.parentNode;
  target.parentNode.removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  const todoItem = e.currentTarget.parentNode;
  const todoContent = todoItem.querySelector(".todo-inputtext").innerText;
  printDoneItem(todoContent);
  deleteTodoItem(e);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");
  const doneCheck = document.createElement("button");

  // [끝낸 일 내용]
  doneText.innerHTML = `
  <div class="done-inputtext">${text}</div>
`;
  doneText.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  doneDel.innerHTML = `
  <svg class="doneDel" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 2.23242L12.7058 2.23242" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.49756 2.23219V1H8.57804V2.23219" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.41699 2.23242V13.0141H11.3504V2.23242" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.57324 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.0376 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.50195 4.69629V10.8572" stroke="#D4B3A0" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  doneDel.addEventListener("click", deleteDoneItem);

  //끝낸 일 -> 할 일 이동 버튼
  doneCheck.innerHTML = `<svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="33" height="35" rx="5" fill="#FBF8F1"/>
  <path d="M9 17.0256L15.7556 26L25 12" stroke="#D4B3A0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
  `;

  doneCheck.addEventListener("click", toggleDoneToDo);

  // [생성한 요소들 연결]
  doneItem.appendChild(doneCheck);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector(".done-list").appendChild(doneItem);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.currentTarget.parentNode;
  target.parentNode.removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  const text =
    e.currentTarget.parentNode.querySelector(".done-inputtext").innerText;
  printTodoItem(text);
};

// 시작 함수
init();
