// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-form");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
  // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
  // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display == "none"
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
  // button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  // button.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".todo-list").appendChild(li);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

/