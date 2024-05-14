<<<<<<< HEAD
// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-form");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
=======
const form = document.querySelector(".todo-form");
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
<<<<<<< HEAD
  // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
  // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
=======
  form.addEventListener("submit", addTodoItem);
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
<<<<<<< HEAD
  // 삼항연산자를 사용해서 form 태그의 display 값이 "none"이면 "block"으로, 아니면 "none"으로 바뀌게 해주세요.
  form.style.display == "none"
=======
  form.style.display === "none"
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
    ? (form.style.display = "block")
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
<<<<<<< HEAD
  // createElement를 사용해 li, span, button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [할 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".todo-list").appendChild(li);
=======
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");

  // [할 일 내용]
  todoText.innerText = text;
  todoText.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  todoDel.innerText = "삭제";
  todoDel.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".todo-list").appendChild(todoItem);
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
<<<<<<< HEAD
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentNode;
  // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const todoList = document.querySelector(".todo-list");
  todoList.removeChild(target);
=======
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
<<<<<<< HEAD
  // createElement를 사용해 li, span. button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [끝낸 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleDoneToDo 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteDoneItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // done-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".done-list").appendChild(li);

  console.log(text); // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
=======
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
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
<<<<<<< HEAD
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentNode;
  // 클래스명이 done-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const doneList = document.querySelector(".done-list");
  doneList.removeChild(target);
=======
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
>>>>>>> 308a5c4fbc951220ea9e568b884e786699ba2121
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

// 시작 함수
init();
