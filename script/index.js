const btn_slideLeft = document.getElementById('btn_slideLeft');// 왼쪽 화살표 버튼
const btn_slideRight = document.getElementById('btn_slideRight');// 오른쪽 화살표 버튼
const cont_mainSlide = document.querySelector('.cont_mainSlide');// 메인페이지의 카드 슬라이드.
const kategorie = document.querySelector('.wrap_menuKategorie');// 상단메뉴 중 "판매캐릭터"의 상세메뉴
const kategorieMenu = document.querySelector('.menuKategorie')// 상단메뉴 중 "판매캐릭터"
const allImg = 4; // 모든 이미지의 수


let countImg = 0;
let timer = setInterval(auto_slide,8000); // 슬라이드 자동.


kategorie.addEventListener('mouseenter',function(){
  kategorieMenu.style.backgroundColor = "#f7edfb";
});
kategorie.addEventListener('mouseleave',function(){
  kategorieMenu.style.backgroundColor = "rgba( 255, 255, 255, 0)";
});


// 오른쪽 화살표 클릭
btn_slideRight.addEventListener('click',function(){
  if(countImg<allImg-1){
    countImg++;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
    clearInterval(timer);
    timer = setInterval(auto_slide,8000);
  }
  else{
    countImg=0;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
    clearInterval(timer);
    timer = setInterval(auto_slide,8000);
  }
});


// 왼쪽 화살표 클릭
btn_slideLeft.addEventListener('click',function(){
  if(countImg > 0){
    countImg--;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
    clearInterval(timer);
    timer = setInterval(auto_slide,8000);
  }
  else{
    countImg = 3;
    cont_mainSlide.style.transform = `translate(${countImg*(-100)}vw)`;
    timer = setInterval(auto_slide,8000);
  }
});




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



