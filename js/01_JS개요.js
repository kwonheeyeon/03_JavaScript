/* .js 파일 내부를 <sciript> 태그 내부라고 생각 */

// 함수 선언(기능을 만듦)
function externalFn() {
  // 함수 정의(기능이 어떻게 동작하는지)

  alert("External 확인 버튼이 클릭됨");
  alert("이번엔 alert 두 번");
}


// -----------------------------------------------
// JS 맛보기
// - 버튼 클릭 시 body 태그의 글자색, 배경색을 변경

// HTML 문서에서 body 태그 선택
const body = document.querySelector("body");

// 라이트 모드 변경 함수(기능) 선언
function lightMode() {
  // 함수 정의
  body.style.color = "black"; // body 태그의 글자색을 balck으로 설정
  body.style.backgroundColor = "white"; // body 태그의 배경색을 white로 설정
}

// 다크 모드 변경 함수(기능) 선언
function darkMode() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
}