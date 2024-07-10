const startBtn = document.querySelector("#startBtn");
const rpsBtn = document.querySelectorAll(".rpsBtn");

const rps = ["가위", "바위", "보"];
let gameCount = 0;
let userCount;

let win = 0;
let tie = 0;
let defeat = 0;

startBtn.addEventListener("click", function(){
  userCount = prompt("진행할 판 수를 입력해주세요");

  for(let i=0; i<rpsBtn.length; i++){
    rpsBtn[i].addEventListener("click", function(){
      if(gameCount >= userCount){
        alert("게임이 종료되었습니다. 다시하려면 GAMESTART 버튼을 눌러주세요");
        return;
      }

      const userRps = rps[i];
      gameCount++;

      const comNum = Math.floor(Math.random()*2);
      const comRps = rps[comNum];

      if(userRps === comRps){
        alert("비김");
        tie++;
      }
      else if((userRps === "가위" && comRps === "보")
           || (userRps === "바위" && comRps === "가위")
           || (userRps === "보" && comRps === "바위")){
        alert("이김");
        win++;
      } else{
        alert("짐");
        defeat++;
      }
    })
    
  }
})