/* 각각 따로 얻어올 경우
const keyQ = document.querySelector("#keyQ");
const keyW = document.querySelector("#keyW");
const keyE = document.querySelector("#keyE");
const keyR = document.querySelector("#keyR");

문서 전체에 keydown 이벤트 리스너 추가
document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  // e.key : 입력한 key
  console.log(e.key);

  switch(e.key.toUpperCase()){
    case 'Q' : keyQ.style.backgroundColor = "skyblue"; break;
    case 'W' : keyW.style.backgroundColor = "skyblue"; break;
    case 'E' : keyE.style.backgroundColor = "skyblue"; break;
    case 'R' : keyR.style.backgroundColor = "skyblue"; break;
    default : 
  }
})

문서 전체에 keyup 이벤트 리스너 추가
document.addEventListener("keyup", function(e){
  switch(e.key.toUpperCase()){
    case 'Q' : keyQ.style.backgroundColor = "white"; break;
    case 'W' : keyW.style.backgroundColor = "white"; break;
    case 'E' : keyE.style.backgroundColor = "white"; break;
    case 'R' : keyR.style.backgroundColor = "white"; break;
    default : 
  }
})
*/

// 준비한 이미지 파일명을 저장할 배열
const images = ["포차코_1.jpg", "포차코_2.jpg", "포차코_3.png", "포차코_4.jpg"];

/* 클래스가 key인 요소를 모두 얻어와 배열에 저장 */
const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  // e.key : 입력한 key
  console.log(e.key);

  let index; // 인덱스를 저장할 변수

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환
  switch(e.key.toUpperCase()){
    case 'Q' : index = 0; break;
    case 'W' : index = 1; break;
    case 'E' : index = 2; break;
    case 'R' : index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }

  // keys[index].style.backgroundColor = "skyblue"; // 중복되는 코드 제거

  // 배경을 이미지로 지정
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

  // 글자색 투명으로 변경
  // rgba(red, green, blue, alpha)
  // rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~ 1(불투명);
  keys[index].style.color = "rgba(0, 0, 0, 0)"; // rgb(0, 0, 0) : 검은색
});

document.addEventListener("keyup", function(e){
  let index;
  
  switch(e.key.toUpperCase()){
    case 'Q' : index = 0; break;
    case 'W' : index = 1; break;
    case 'E' : index = 2; break;
    case 'R' : index = 3; break;
    default : return;
  }

  // keys[index].style.backgroundColor = "white";

  // 배경 이미지 제거
  keys[index].style.backgroundImage = "none";

  // 글자색 검은색
  keys[index].style.color = "rgba(0, 0, 0, 1)";
});

/** 이미지가 마우스 따라다니게 하기 */

// 숨겨놓은 이미지
const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove", function(e){
  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX - 10}px`;
  cursorImage.style.top = `${e.pageY}px`;
});