function loginForm_check() { // 유효성 검사. ID와
  const uid = document.querySelector('#uid'); // 사용자 아이디 파라미터 연동
  const pwd = document.querySelector('#pwd'); // 비밀번호 파라미터 연동
  const idBlank = document.querySelector('#error_idBlank');
  const pwBlank = document.querySelector('#error_pwBlank');

  const REG_UID = /^[a-z0-9]{1}[a-z0-9_-]{4,20}$/; // user ID 규칙


  let checkAll = true; // 유효성 검사 결과 최종 값이 들어갈 곳. 기본값 true

  if (!uid.value){
    idBlank.setAttribute('style','display: block');
    pwBlank.setAttribute('style', `display: none`);
    console.log(`비번의 스타일` + pwBlank.getAttribute('style'))
      uid.focus();
      checkAll = false;
  }
  else if (!pwd.value){
    pwBlank.setAttribute('style','display: block');
    idBlank.setAttribute('style',`display : none`);
      pwd.focus();
      console.log(`아이디의 스타일` + idBlank.getAttribute('style'))
      checkAll = false;
  }
  else if(!REG_UID.test(uid.value)){
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
      uid.focus();
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