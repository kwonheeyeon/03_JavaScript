/* 
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/

/** 12345 출력 */
function check1(){
  // num이 1부터 시작해서
    // 1씩 증가하다가
    // num 값이 5이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1 ; num <=5 ; num++){
    console.log(num);
  }
}

/** 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
  for(let num = 1 ; num <= 10 ; num++){
    console.log(num);
  }
}

/** 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
  for(let num = 5 ; num <= 13 ; num++){
    console.log(num);
  }
}

/** 1부터 5까지 1씩 증가한 숫자를 한 줄로 출력하기 */
function check4(){
  let result = '' ; // 결과 저장용 변수에 빈칸(string)

  for(let num = 1 ; num <= 5 ; num++){
    result += num;
  }

  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5(){
  let sum = 0; // 더했을 때 영향이 없는 숫자 0을 대입

  for(let num = 1 ; num <= 10 ; num++){
    sum += num;
  }

  console.log(sum);
}

/** 1부터 10까지 2씩 증가하며 출력하기 */
function check6(){
  for(let num = 1 ; num <= 10 ; num += 2){
    console.log(num);
  }
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check7(){
  for(let num = 3 ; num <= 30; num += 3){
      console.log(num);
  }
}

/** 1부터 20까지 4의 배수만 출력하고 4의 배수 합계도 구하기 */
function check8(){
  let sum = 0;

  for(let num = 1 ; num <= 20 ; num++){
    if(num % 4 === 0){
      console.log(num);
      sum += num;
    }
  }

  console.log(`합계 : ${sum}`);
}

/** 입력 받은 범위 내 지정된 배수 출력 / 합계 구하기 */
function check9(){
  const start = Number((document.getElementById("start9")).value);
  const end = Number((document.getElementById("end9")).value);
  const multiple = Number((document.getElementById("multiple9")).value);
  
  let sum = 0;

  for(let num = start ; num <= end ; num++){
    if(num % multiple === 0){
      console.log(num);
      sum += num;
    }
  }

  console.log(`합계 : ${sum}`);
}

/** 입력 받은 단(2~9)의 구구단 출력하기 */
function check10(){
  const input = document.getElementById("dan10");
  const dan = Number(input.value);

  // 단이 입력되지 않은 경우
  if(input.value.length === 0){
    alert("단을 입력해주세요");
    return;
  }

  // 단이 2~9사이가 아닌경우
  if(dan < 2 || dan > 9){
    alert("2 ~ 9 사이의 숫자를 입력해주세요");
    return;
  }

  for(let num = 1 ; num <= 9; num++){
    console.log(`${dan} x ${num} = ${dan*num}`);
  }
}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check11(){
  for(let num = 10 ; num > 0 ; num--){
    console.log(num);
  }
}

/** 입력 받은 단 거꾸로 출력하기 */
function check12(){
  const input = document.getElementById("dan12");
  const dan = Number(input.value);

  if(input.value.length === 0){
    alert("단을 입력해주세요");
    return;
  }

  if(dan < 2 || dan > 9){
    alert("2 ~ 9 사이의 숫자를 입력해주세요");
    return;
  }

  for(let num = 9 ; num > 0; num--){
    console.log(`${dan} x ${num} = ${dan*num}`);
  }
}

/** 특정 배수마다 지정된 모양으로 출력하기 */
function check13(){
  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  // 배수
  const multiple = Number(input.value);

  let str = ''; // 출력될 문자열을 저장할 변수

  // 출력 모양
  const shape = output.value;

  for(let num = 1 ; num <= 20 ; num++){
    if(num % multiple === 0){
      str += `${shape} `;
    } else{
      str += `${num} `;
    }

    // num === 10 인 경우 줄 변경 <br> 추가
    if(num === 10) str += "<br>";
  }

  // 화면에 결과를 출력
  result.innerHTML = str;
}

/** 다음 모양 출력하기
    1234
    1234
    1234
*/
function check14(){
  for(let row = 1 ; row <= 3; row++){
    let str = '';

    for(let col = 1 ; col <= 4 ; col++){
      str += col;
    }
    
    // 안 쪽 for문 반복 결과를 출력
    console.log(str);
    console.log("=========");
  }
}

/** 다음 모양 출력하기
    12345
    12345
    12345
    12345
*/
function check15(){
  for(let row = 0 ; row < 4 ; row++){
    let str = '';

    for(let col = 0 ; col < 5 ; col++){
      str += col+1;
    }
    
    console.log(str);
    console.log("=========");
  }
}

/** 다음 모양 출력하기
    654321
    654321
    654321
*/
function check16(){
  for(let row = 0 ; row < 3 ; row++){
    let str = '';

    for(let col = 6 ; col > 0 ; col--){
      str += col;
    }
    
    console.log(str);
    console.log("=========");
  }
}

/** 다음 모양 출력하기
    1
    12
    123
    1234
*/
function check17(){
  for(let row = 1 ; row < 5; row++){
    let str = '';

    for(let col = 1 ; col <= row ; col++){
      str += col;
    }

    console.log(str);
  }
}

/** 다음 모양 출력하기
    *
    **
    ***
    ****
*/
function check18(){
  for(let row = 1 ; row < 5; row++){
    let str = '';

    for(let col = 1 ; col <= row ; col++){
      str += '*';
    }

    console.log(str);
  }
}

/** 다음 모양 출력하기
    12345
    1234
    123
    12
    1
*/
function check19(){
  // 5,4,3,2,1 행으로 생각
  for(let row = 5 ; row > 0 ; row--){
    let str = '';

    for(let col = 1 ; col <= row ; col++){
      str += col;
    }

    console.log(str);
  }
}

/** 1부터 30사이의 정수 중 4의 배수의 개수 구하기 */
function check20(){
  let count = 0;

  for(let num = 1 ; num <= 30 ; num++){
    if(num % 4 === 0){
      count++;
    }
  }

  alert(`count : ${count}`);
}

/** 1부터 30사이의 정수 중 4의 배수의 개수 구하기 */
function check21(){
  const input = Number((document.getElementById("input21").value));
  let count = 0;

  for(let num = 1 ; num <= 100 ; num++){
    if(num % input === 0) count++;
  }

  alert(`count : ${count}`);
}

/** 다음 모양 출력하기
    1 2 3 4
    5 6 7 8
    9 10 11 12
*/
function check22(){
  let count = 1;

  for(let row = 0 ; row < 3 ; row++){
    let str = '';

    for(let col = 0; col < 4 ; col++){
      str += count++ + " ";
    }
    console.log(str);
    console.log("===========");
  }
}

/*
  while(조건식){
        조건식이 true인 경우 반복 수행할 코드;
  }
*/
/** 0이 입력될 때까지 입력된 값 누적하기 */
function check23(){
  let sum = 0;
  let value;
  while((value = Number(prompt("숫자 입력"))) !== 0){
    sum += value;
  }

  alert(`합계 : ${sum}`);  
}

/** 메뉴 주문하기 */
function check24(){
  // 메뉴 가격
  const gimbap = 4000;
  const ramen = 4500;
  const porkcutlet = 9000;

  // 주문 개수
  let gimbapCount = 0;
  let ramenCount = 0;
  let porkcutletCount = 0;

  // prompt에 입력된 값을 저장할 변수
  let input; // 선언만 한 경우 -> undefined

  // input이 undefined이기 때문에
  // while문 첫 반복은 무조건 수행됨!!
  while(input !== null){
    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null
    //        -> 취소 선택 시 while문 다음 반복 수행 X
    input = prompt("메뉴 번호 입력");

    // input값에 따라서 알맞는 case 수행
    switch(input){
      case '1' : gimbapCount++; break;
      case '2' : ramenCount++; break;
      case '3' : porkcutletCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요");
    }
  }

  let html = ''; // 화면에 출력될 html 코드를 저장할 변수

  if(gimbapCount > 0){
    html += `<li>김밥(${gimbapCount}개) : ${gimbap * gimbapCount}원</li>`
  }
  
  if(ramenCount > 0){
    html += `<li>라면(${ramenCount}개) : ${ramen * ramenCount}원</li>`
  }

  if(porkcutletCount > 0){
    html += `<li>돈까스(${porkcutletCount}개) : ${porkcutlet * porkcutletCount}원</li>`
  }

  // 주문한 메뉴 합계 저장
  const sum = (gimbap * gimbapCount) + (ramen * ramenCount) + (porkcutlet * porkcutletCount);

  html += `<li>합계 : ${sum}원</li>`;

  // id가 "result24"인 요소에 내용으로 html 변수 값 추가
  // + HTML 태그 해석
  document.getElementById("result24").innerHTML = html;
}