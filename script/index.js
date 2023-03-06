const btn_slideLeft = document.getElementById('btn_slideLeft');
const btn_slideRight = document.getElementById('btn_slideRight');
const cont_mainSlide = document.querySelector('.cont_mainSlide');
const allImg = 4;


let countImg = 0;


// 오른쪽 화살표 클릭
btn_slideRight.addEventListener('click',function(){
  if(countImg<allImg-1){
    countImg++;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
  else{
    countImg=0;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
});

// 왼쪽 화살표 클릭
btn_slideLeft.addEventListener('click',function(){
  if(countImg > 0){
    countImg--;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
  else{
    countImg = 3;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
  }
});