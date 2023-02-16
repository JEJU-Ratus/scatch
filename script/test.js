function loginForm_check(){
  const uid = document.querySelector('#uid'); // 사용자 아이디 파라미터 연동
  const pwd = document.querySelector('#pwd'); // 비밀번호 파라미터 연동
  const idBlank = document.querySelector('#error_idBlank');
  const pwBlank = document.querySelector('#error_pwBlank');

  let checkAll = true; // 유효성 검사 결과 최종 값이 들어갈 곳. 기본값 true
  
  if (!uid.value){
    idBlank.setAttribute('style','display: block');
      uid.focus();
      checkAll = false;
  }
  else if (!pwd.value){
    pwBlank.setAttribute('style','display: block');
      pwd.focus();
      checkAll = false;
  }

  if (!checkAll) {
    return false;
  }
}


function loginPwd_open() {
  const pword = document.querySelector('#pwd');
  const check = document.querySelector('#pwdOpen');

  if (check.checked) {
    pword.setAttribute('type', 'text');
  }
  else {
    pword.setAttribute('type', 'password');

  }
}