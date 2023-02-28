const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const postDate = document.getElementsByClassName('postDate');

for(i=0;i<postDate.length; i++){
  postDate[i].innerHTML = year +"."+month +"." + day;
}