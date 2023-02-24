function loginForm_check() { // 유효성 검사. ID와
  const uid = document.getElementById('uid'); // 사용자 아이디 파라미터 연동
  const pwd = document.getElementById('pwd'); // 비밀번호 파라미터 연동

  //경고메시지
  const idBlank = document.getElementById('idBlank');
  const pwBlank = document.getElementById('pwBlank');
  const idpwReg = document.getElementById('idpwReg');

  //유효성을이용해 로그인 아이디 틀린것처럼 만들기
  const REG_UID = /^[a-z0-9]{1}[a-z0-9_-]{4,20}$/; // user ID 규칙
  const REG_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{9,20}$/;//비밀번호 규칙

  let checkAll = true; // 유효성 검사 결과 최종 값이 들어갈 곳. 기본값 true

  if (!uid.value) {
    idBlank.classList.remove('wrap_fold');
    pwBlank.classList.add('wrap_fold');
    idpwReg.classList.add('wrap_fold');
    uid.focus();
    checkAll = false;
  }
  else if (!pwd.value) {
    idBlank.classList.add('wrap_fold');
    pwBlank.classList.remove('wrap_fold');
    idpwReg.classList.add('wrap_fold');
    pwd.focus();
    checkAll = false;
  }
  else if (!REG_UID.test(uid.value)) {
    idBlank.classList.add('wrap_fold');
    pwBlank.classList.add('wrap_fold');
    idpwReg.classList.remove('wrap_fold');
    uid.focus();
    checkAll = false;
  }
  else if (!REG_PWD.test(pwd.value)) {
    idBlank.classList.add('wrap_fold');
    pwBlank.classList.add('wrap_fold');
    idpwReg.classList.remove('wrap_fold');
    uid.focus();
    checkAll = false;
  }

  if (!checkAll) {
    return false;
  }
}

function loginPwd_open() {
  const pword = document.getElementById('pwd');
  const check = document.getElementById('pwdOpen');

  if (check.checked) {
    pword.setAttribute('type', 'text');
  }
  else {
    pword.setAttribute('type', 'password');

  }
}