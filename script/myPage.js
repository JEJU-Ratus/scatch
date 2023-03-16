const profile = document.querySelector('.cont_profile'),
  front = document.querySelector('.front'),
  back = document.querySelector('.back'),
  siteInput = document.getElementsByClassName('siteInput'),
  site = document.getElementsByClassName('site'),
  btn_editSite = document.getElementById('btn_editSite'),
  siteInputBox = document.querySelector('.siteInputBox'),
  siteList = document.querySelector('.siteList');

let click_myPage = 0;
let siteLink = [];

profile.addEventListener('click', function(){
  if(click_myPage < 2){
    if(click_myPage === 0){
      click_myPage = 1;
      front.style.transform = 'rotateY(180deg)';
      back.style.transform = 'rotateY(0deg)';
      btn_editSite.style.display = 'block';
    }
    else{
      click_myPage = 0;
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'rotateY(-180deg)';
      btn_editSite.style.display = 'none';
    }
  }
})

btn_editSite.addEventListener('click',function(){
  if(btn_editSite.textContent === '수정'){
  click_myPage = 2;
  btn_editSite.textContent = '저장';
  siteList.style.display = 'none';
  siteInputBox.style.display = 'block';
  }
  else{
  click_myPage = 1;
  btn_editSite.textContent = '수정';
  siteList.style.display = 'block';
  siteInputBox.style.display = 'none';
  }
});

function changeSiteLink() {
  for (let i = 0; i < siteInput.length; i++) {
    siteLink[i] = siteInput[i].value;
    if (siteLink[i].startsWith("http://") || siteLink[i].startsWith("https://")) { // URL 유효성 검사
      let link = document.createElement("a"); // 새로운 a 태그 생성
      link.href = siteLink[i]; // href 속성 설정
      link.textContent = siteLink[i]; // 텍스트 내용 설정
      link.target = '_blank';
      site[i].textContent = ""; // 기존에 있던 텍스트 내용 초기화
      site[i].appendChild(link); // 새로운 a 태그를 자식 요소로 추가
    } else {
      site[i].textContent = siteLink[i];
    }
  }
}

for (let i = 0; i < site.length; i++) {
  site[i].addEventListener('click', function(x) {
    x.stopPropagation();
  });
}




// function changeSiteLink(){
//   for(i = 0; i < siteInput.length; i++){
//     siteLink[i] = siteInput[i].value;
//     site[i].textContent = siteLink[i];
//   }
// }