const plateCreate = document.querySelector("#plateCreate");
const lottoPlate = document.querySelector("#lottoPlate");

plateCreate.addEventListener("click", ()=>{

  lottoPlate.innerHTML = '';
  let lottoCount = 0;
  

  for(let i=1; i<=45; i++){
    const lottoDiv = document.createElement("div");
    lottoDiv.innerText = i;
    lottoPlate.append(lottoDiv);

    lottoDiv.addEventListener("click", ()=>{
      lottoCount++;
      console.log("버튼클릭",lottoCount);

      if(lottoCount > 6){
        alert("6개까지만 선택할 수 있습니다");
        lottoCount--;
        console.log("개수초과",lottoCount);
        return;
      }

      if(lottoDiv.style.backgroundColor !== "pink"){
        lottoDiv.style.backgroundColor = "pink";
        console.log("추가",lottoCount);
      } else{
        lottoDiv.style.backgroundColor = "white";
        lottoCount--;
        console.log("삭제",lottoCount);
      }

    })
  }
});