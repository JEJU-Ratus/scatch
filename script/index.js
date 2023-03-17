const btn_slideLeft = document.getElementsByClassName('btn_slideLeft'),// 왼쪽 화살표 버튼
  btn_slideRight = document.getElementsByClassName('btn_slideRight'),// 오른쪽 화살표 버튼
  cont_mainSlide = document.querySelector('.cont_mainSlide'),// 메인페이지의 카드 슬라이드.
  playPause = document.getElementsByClassName('playPause'), // 슬라이드 on/off 버튼
  allImg = 4; // 모든 이미지의 수

let countImg = 0, // 현재 노출 이미지 번호
  timer = setInterval(auto_slide, 4000), // 슬라이드 자동.
  powerOnOff = 1;



  //재생 및 정지 버튼 조작
  for(let i=0;i<playPause.length;i++){
    playPause[i].addEventListener('click',function(){
      if(powerOnOff > 0){ // powerOnOff 가 1일때 재생 0일때 정지
        powerOnOff--;
        for(i=0;i<playPause.length;i++){
          playPause[i].src = "images/play.png";
        }
        clearInterval(timer); //정지
      }
      else{
        powerOnOff++
        for(i=0;i<playPause.length;i++){
          playPause[i].src = "images/pause.png";
        }
        timer = setInterval(auto_slide, 4000) // 재생
      }
    })
  }

//왼쪽 화살표 클릭
for(i=0;i<btn_slideLeft.length;i++){
  btn_slideLeft[i].addEventListener('click',function(){
    if(countImg > 0){
      countImg--;
      adjust_countImg();
    }
    else{
      countImg = 3;
      adjust_countImg();
    }
  });
}

//오른쪽 화살표 클릭
for(i=0;i<btn_slideRight.length;i++){
  btn_slideRight[i].addEventListener('click',function(){
    if(countImg < allImg -1){
      countImg++;
      adjust_countImg();
    }
    else{
      countImg = 0;
      adjust_countImg();
    }
  });
}


// 현재 노출 이미지 번호 조정 함수
function adjust_countImg() {
  cont_mainSlide.style.transform = `translate(${countImg * (-100)}vw)`;
  clearInterval(timer);
  if(powerOnOff >0){
    timer = setInterval(auto_slide, 4000);
  }
}

function auto_slide() {
  if (countImg < allImg - 1) {
    countImg++;
    cont_mainSlide.style.transform = `translate(${countImg * (-100)}vw)`;
  }
  else {
    countImg = 0;
    cont_mainSlide.style.transform = `translate(${countImg * (-100)}vw)`;
  }
}

