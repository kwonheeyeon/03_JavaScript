/** 구구단 표 만들기 */
function createTable(){
  // 시작 단
  const startInput = document.getElementById("start");

  // 종료단
  const endInput = document.getElementById("end");

  // 테이블 머리(제목)를 작성하는 영역(행)
  const theadRow = document.getElementById("thead-row");

  // 테이블 몸통(내용, 데이터)를 작성하는 영역
  const tbody = document.getElementById("tbody");

  // -------------------------------------------------------
  // 이전 #thead-row, #tbody에 작성된 내용을 모두 삭제
  theadRow.innerHTML = ""; // 빈칸을 대입해서 삭제한 효과
  tbody.innerHTML = "";
  // -------------------------------------------------------

  // 입력 받은 단을 number 타입으로 변경
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  // -------------------------------------------------------

  // 단(제목) 만들기
  
  // 시작 단 ~ 종료 단 반복문
  for(let dan = start ; dan <= end ; dan++){
    theadRow.innerHTML += `<th>${dan}단</th>`;
  }

  // -------------------------------------------------------

  // 구구단(내용) 만들기

  for(let row = 1 ; row <= 9 ; row++){
    let str = `<tr>`;
    for(let dan = start ; dan <= end; dan++){
      str += `<td>${dan} x ${row} = ${dan*row}</td>`
    }
    str += `</tr>`;

    // 만들어진 한 줄을 tbody에 누적
    tbody.innerHTML += str;
  }
}