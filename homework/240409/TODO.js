// 감정 버튼 기능
const buttonBad = document.querySelector(".button_bad");
const buttonGood = document.querySelector(".button_good");
const buttonSoso = document.querySelector(".button_soso");
const buttonHappy = document.querySelector(".button_happy");

buttonBad.addEventListener("click", () => {
  toggleButtonImage(buttonBad, "button_bad.png", "button_bad--clicked.png");
});

buttonGood.addEventListener("click", () => {
  toggleButtonImage(buttonGood, "button_good.png", "button_good--clicked.png");
});

buttonSoso.addEventListener("click", () => {
  toggleButtonImage(buttonSoso, "button_soso.png", "button_soso--clicked.png");
});

buttonHappy.addEventListener("click", () => {
  toggleButtonImage(
    buttonHappy,
    "button_happy.png",
    "button_happy--clicked.png"
  );
});

const toggleButtonImage = (button, originalSrc, clickedSrc) => {
  const img = button.querySelector("img");
  if (img.src.includes(originalSrc)) {
    img.src = clickedSrc;
  } else {
    img.src = originalSrc;
  }
};

// 투두리스트 기능
const form = document.querySelector(".box_addtodo");
const btn = document.querySelector(".plus");

// 초기화 함수
const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display === "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};

// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoDone = document.createElement("todoToDone");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("todoDel");

  // [할 일 내용]
  todoText.innerText = text;

  const DoneImg = document.createElement("img");
  DoneImg.src = "button_todo.png";
  todoDone.appendChild(DoneImg);
  todoDone.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  const deleteImg = document.createElement("img");
  deleteImg.src = "button_delete.png";
  todoDel.appendChild(deleteImg);
  todoDel.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  todoItem.appendChild(todoDone);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".box_todo").appendChild(todoItem);

  // [input 창 초기화]
  document.querySelector(".input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.target.closest("li"); // 부모 li 요소를 찾음
  if (target) {
    target.parentNode.removeChild(target); // 부모 노드에서 대상을 삭제
  }
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  const text = e.target.closest("li").querySelector("span").innerText; // span 요소의 텍스트 가져오기
  deleteTodoItem(e);
  printDoneItem(text);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneTodo = document.createElement("doneTodo");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("doneDel");

  // [끝낸 일 내용]
  doneText.innerText = text;
  doneText.classList.add("task_description"); //task_description 의 css 속성 값 가져오기

  const CheckImg = document.createElement("img");
  CheckImg.src = "button_done.png";
  doneTodo.appendChild(CheckImg);
  doneTodo.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  const DelImg2 = document.createElement("img");
  DelImg2.src = "button_delete.png";
  doneDel.appendChild(DelImg2);
  doneDel.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  doneItem.appendChild(doneTodo);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector(".box_done").appendChild(doneItem);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.closest("li");
  if (target) {
    target.parentNode.removeChild(target);
  }
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  const text = e.target.closest("li").querySelector("span").innerText; // span 요소의 텍스트 가져오기
  deleteDoneItem(e);
  printTodoItem(text);
};

// 시작 함수
init();
