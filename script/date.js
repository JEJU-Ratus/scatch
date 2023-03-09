// 오늘 일자 출력하는 함수
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const postDate = document.querySelectorAll('.postDate');

for(i=0; i< postDate.length;i++){
  postDate[i].innerHTML = year + "." + month + "." + day;
}

