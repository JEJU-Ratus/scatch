const btn_slideLeft = document.querySelector('.btn_slideLeft'),// 왼쪽 화살표 버튼
btn_slideRight = document.querySelector('.btn_slideRight'),// 오른쪽 화살표 버튼
cont_mainSlide = document.querySelector('.cont_mainSlide'),// 메인페이지의 카드 슬라이드.
allImg = 4; // 모든 이미지의 수

let countImg = 0; // 현재 노출 이미지 번호
let timer = setInterval(auto_slide,8000); // 슬라이드 자동.


// 오른쪽 화살표 클릭
btn_slideRight.addEventListener('click',function(){
  if(countImg<allImg-1){
    countImg++;
    adjust_countImg();
  }
  else{
    countImg=0;
    adjust_countImg();
  }
});


// 왼쪽 화살표 클릭
btn_slideLeft.addEventListener('click',function(){
  if(countImg > 0){
    countImg--;
    adjust_countImg();
  }
  else{
    countImg = 3;
    adjust_countImg();
  }
});


// 현재 노출 이미지 번호 조정 함수
function adjust_countImg(){
  cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
    clearInterval(timer);
    timer = setInterval(auto_slide,8000);
}

function auto_slide(){
  if(countImg<allImg-1){
    countImg++;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
  else{
    countImg = 0;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
}