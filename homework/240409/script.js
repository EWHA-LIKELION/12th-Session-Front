const form = document.querySelector(".write");

// 초기화 함수
const init = () => {
  form.addEventListener("submit", addTodoItem);
};

//할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector("#textarea").textContent;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력하는 함수
const printTodoItem = (text) => {
  const li = document.createElement("li");
  const doBox = document.createElement("span");
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  // 생성한 엘리먼트에 CSS 스타일 부여
  doneBtn.className = "doneBtn";
  doBox.className = "doBox";
  deleteBtn.className = "deleteBtn";

  // 생성한 엘리먼트에 할 일 text 할당
  doneBtn.innerText = text;
  doBox.innerText = text;

  // 끝낸 일로 옮기기 버튼
  doneBtn.addEventListener("click", toggleTodoToDone);

  // 삭제 버튼
  deleteBtn.addEventListener("click", deleteTodoItem);

  // 생성한 엘리먼트들 리스트업
  li.appendChild(doneBtn);
  li.appendChild(doBox);
  li.appendChild(deleteBtn);
  document.querySelector(".ttd-list").appendChild(li);

  // 입력창 초기화
  document.querySelector("#textarea").textContent = "";

  // 왼쪽 버튼 높이 입력창과 동일하게
  doneBtn.style.height = `${doBox.offsetHeight}px`;
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;

  const todoList = document.querySelector(".ttd-list");
  todoList.removeChild(target);
};

// 할 일을 끝낸 일로 옮기는 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력하는 함수
const printDoneItem = (text) => {
  const li = document.createElement("li");
  const doneBox = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const reBtn = document.createElement("button");

  // 생성한 엘리먼트에 CSS 스타일 부여
  deleteBtn.className = "deleteBtn";
  reBtn.className = "reBtn";
  doneBox.className = "doneBox";

  // 생성한 엘리먼트에 할 일 text 할당
  reBtn.innerText = text;
  doneBox.innerText = text;

  // 끝낸 일을 할 일로 옮기기 버튼
  reBtn.addEventListener("click", toggleDoneToDo);

  // 끝낸 일 삭제 버튼
  deleteBtn.addEventListener("click", deleteDoneItem);

  // 생성한 엘리먼트들 리스트업
  li.appendChild(reBtn);
  li.appendChild(doneBox);
  li.appendChild(deleteBtn);
  document.querySelector(".d-list").appendChild(li);

  // 왼쪽 버튼 높이 입력창과 동일하게
  reBtn.style.height = `${doneBox.offsetHeight}px`;
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;

  const todoList = document.querySelector(".d-list");
  todoList.removeChild(target);
};

//끝낸 일을 할 일로 옮기는 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

init();
