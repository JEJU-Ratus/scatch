const btn_delete = document.getElementById('btn_delete');

btn_delete.addEventListener('click',function(){
  const delete_message = confirm("삭제하시겠습니까?");

  if(delete_message){
    console.log("확인")
    alert("삭제되었습니다.");
    location.replace("../afterLogin/kategorie2-afterLogin.html");
  } 
  else{
    console.log("취소");
  }
});