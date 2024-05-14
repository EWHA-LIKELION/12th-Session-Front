var coin = 0;
// 1. span 태그를 생성하고 변수 newSpan에 저장
var newSpan = document.createElement("span")
// 2. id가 money인 요소 아래에 newSpan을 자손으로 추가
document.querySelector("#money").appendChild(newSpan)
// 3. newSpan 내부 텍스트에 "현재 금액 : n원" 삽입
newSpan.innerText = "현재 금액 : " + coin + "원"
// 4. newSpan의 id를 "current"로 설정
newSpan.setAttribute("id", "current")

// 5. 자판기의 물품들의 색상을 구매 가능 여부에 따라 변경하는 함수
//  - coin이 1000 이상, 700 이상, 500 이상, 그 이하일 때로 나누어
//  - 조건문을 작성하고, id로 알맞은 요소를 선택해 style의 color 속성 변경
function color_change() {
  if (coin >= 1000){
    document.querySelector("#coffee").style.color = "blue";
    document.querySelector("#tea").style.color = "blue";
    document.querySelector("#water").style.color = "blue";
  } 
  else if (coin >= 700){
    document.querySelector("#coffee").style.color = "blue";
    document.querySelector("#tea").style.color = "red";
    document.querySelector("#water").style.color = "blue";
  } 
  else if (coin >= 500){
    document.querySelector("#coffee").style.color = "red";
    document.querySelector("#tea").style.color = "red";
    document.querySelector("#water").style.color = "blue";
  } 
  else {
    document.querySelector("#coffee").style.color = "red";
    document.querySelector("#tea").style.color = "red";
    document.querySelector("#water").style.color = "red";
  } 
}

// 6. 금액을 투입하면 coin이 그만큼 증가하고 alert로 알리는 함수 3개
//  - 현재 남은 금액에도 바로 변경 사항이 반영되어야 함
function click_btn1() {
  coin += 1000;
  color_change();
  document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";
  alert("1000원이 충전되었습니다.")
}
function click_btn2() {
  coin += 500;
  color_change();
  document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";
  alert("500원이 충전되었습니다.")
}
function click_btn3() {
  coin += 100;
  color_change();
  document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";
  alert("100원이 충전되었습니다.")
}


// 7. 구매할 물품을 선택하면 coin이 그만큼 감소하고 alert로 알리는 함수 3개
//  - 현재 남은 금액에도 바로 변경 사항이 반영되어야 함
//  - 잔액이 부족한지 조건문으로 검사하고 구매 불가할 때는 alert로 알려야 함
function click_tea() {
  if (coin < 1000) {
    alert("잔액이 부족합니다.")
  }
  else {
    coin -= 1000;
    color_change();
    document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";;
    alert("옥수수수염차를 구매하였습니다.")
  }
}
function click_coffee() {
  if (coin < 700) {
    alert("잔액이 부족합니다.")
  }
  else {
    coin -= 700;
    color_change();
    document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";;
    alert("커피를 구매하였습니다.")
  }
}
function click_water() {
  if (coin < 500){
    alert("잔액이 부족합니다.")
  }
  else {
    coin -= 500;
    color_change();
    document.getElementById("current").innerHTML = "현재 금액 : " + coin + "원";;
    alert("물을 구매하였습니다.")
  }
}

// 8. 물품 목록 버튼 3개에 각각 click 이벤트 리스너 추가
document.querySelector("#coffee").addEventListener("click", click_coffee)
document.querySelector("#tea").addEventListener("click", click_tea)
document.querySelector("#water").addEventListener("click", click_water)

// 9. 금액 투입 버튼 3개에 각각 click 이벤트 리스너 추가
document.querySelector("#btn1").addEventListener("click", click_btn1)
document.querySelector("#btn2").addEventListener("click", click_btn2)
document.querySelector("#btn3").addEventListener("click", click_btn3)