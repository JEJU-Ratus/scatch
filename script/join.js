const uname = document.getElementById('name'); //이름 파라미터의 연동
const year = document.getElementById('yy'); // 생년월일의 연도 파라미터 연동
const month = document.getElementById('mm')
const day = document.getElementById('dd'); // 생년월일의 일자 파라미터 연동
const uid = document.getElementById('uid'); // 사용자 아이디 파라미터 연동
const pwd = document.getElementById('pwd'); // 비밀번호 파라미터 연동
const pwdCheck = document.getElementById('pwdCheck'); // 비밀번호확인 파라미터 연동
const tel = document.getElementById('tel'); // 전화번호 파라미터 연동
const email = document.getElementById('email'); //email 파라미터 연동

//유효성 검증
const REG_NAME = /^[가-힣]{2,30}$/; // 이름 규칙
const REG_YEAR = /^(19[0-9][0-9]|20\d{2})$/; // 생년월일 중 연도 규칙
const REG_DAY = /^([1-9]|[1-2][0-9]|3[0-1])$/ // 생년월일 중 일 규칙
const REG_UID = /^[a-z0-9]{1}[a-z0-9_-]{4,20}$/; // user ID 규칙
const REG_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{9,20}$/;
const REG_TEL = /^(010|011|016|017|018|019)(\d{3}|\d{4})(\d{4})$/;

//하단은 RFC 5322 이메일 검증 양식을 이용함.
const REG_EMAIL = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/;

// 경고메시지 연동
const nameBlank = document.getElementById('nameBlank');
const nameReg = document.getElementById('nameReg');
const yearBlank = document.getElementById('yearBlank');
const yearReg = document.getElementById('yearReg');
const monthBlank = document.getElementById('monthBlank');
const dayBlank = document.getElementById('dayBlank');
const dayReg = document.getElementById('dayReg');
const uidBlank = document.getElementById('uidBlank');
const uidReg = document.getElementById('uidReg');
const pwdBlank = document.getElementById('pwdBlank');
const pwdReg = document.getElementById('pwdReg');
const pwdCheckBlank = document.getElementById('pwdCheckBlank');
const pwdCheckFalse = document.getElementById('pwdCheckFalse');
const telBlank = document.getElementById('telBlank');
const telReg = document.getElementById('telReg');
const emailBlank = document.getElementById('emailBlank');
const emailReg = document.getElementById('emailReg');

// 성공 메시지 연동
const nameSuccess = document.getElementById('nameSuccess');
const birthSuccess = document.getElementById('birthSuccess');
const uidSuccess = document.getElementById('uidSuccess');
const pwdSuccess = document.getElementById('pwdSuccess');
const pwdCheckSuccess = document.getElementById('pwdCheckSuccess');
const telSuccess = document.getElementById('telSuccess');
const emailSuccess = document.getElementById('emailSuccess');

let checkAll = []; // 유효성 결과 체크
let finalCheck = true; // 최종 결과
// 이벤트 핸들러(focusout)
uname.addEventListener('focusout',input_name);
year.addEventListener('focusout',input_year);
month.addEventListener('focusout',input_year);
day.addEventListener('focusout',input_year);
uid.addEventListener('focusout',input_uid);
pwd.addEventListener('focusout',input_pwd);
pwdCheck.addEventListener('focusout',input_pwdCheck);
tel.addEventListener('focusout',input_tel);
email.addEventListener('focusout',input_email);

// 이벤트 핸들러(focus())

function input_focus(){
const inputFocus = document.querySelectorAll('.focus');

  for(i = 0 ; i < inputFocus.length; i++) {
    if(!inputFocus[i].value){
      inputFocus[i].focus();
      return;
    }
  }
}



//유효성 검사 함수
function joinForm_check() {
  input_name(); // 이름
  input_year(); // 생년월일
  input_uid(); // 아이디
  input_pwd();// 비밀번호
  input_pwdCheck();// 비밀번호 확인
  input_tel();// 전화번호
  input_email();// 이메일
  


  for (i = 0; i <= checkAll.length; i++) {
    if (!checkAll[i]) {// 유효성 통과 체크
      finalCheck = checkAll[i];
      break;
    }
  }
  input_focus();

  return finalCheck;
}

function input_name() {
  // 이름 유효성 테스트 및 결과 메시지 출력

  if (!REG_NAME.test(uname.value)) { // 이름 규칙 확인
    if (!uname.value) {
      nameBlank.classList.remove('wrap_fold'); // 이름을 입력하세요 - 펼치기
      nameReg.classList.add('wrap_fold'); // 이름은 한글 2~30자 이내로 작성해주세요. - 가리기
      nameSuccess.classList.add('wrap_fold');
      checkAll[0] = false;
    }
    else {
      nameBlank.classList.add('wrap_fold');// 이름은 한글 2~30자 이내로 작성해주세요. - 펼치기
      nameReg.classList.remove('wrap_fold'); //이름을 입력하세요 - 가리기
      nameSuccess.classList.add('wrap_fold');// 이름으로 돌아가기

      checkAll[0] = false;
    }
  }
  else {
    nameBlank.classList.add('wrap_fold');
    nameReg.classList.add('wrap_fold');
    nameSuccess.classList.remove('wrap_fold');
    checkAll[0] = true;
  }
}
function input_year() {
  // 생년월일 유효성 테스트 및 결과 메시지 출력
  if (!REG_YEAR.test(year.value)) {
    if (!year.value) {
      yearBlank.classList.remove('wrap_fold');
      yearReg.classList.add('wrap_fold');
      monthBlank.classList.add('wrap_fold');
      dayBlank.classList.add('wrap_fold');
      dayReg.classList.add('wrap_fold');
      birthSuccess.classList.add('wrap_fold');

      checkAll[1] = false;
    }
    else {
      yearBlank.classList.add('wrap_fold');
      yearReg.classList.remove('wrap_fold');
      monthBlank.classList.add('wrap_fold');
      dayBlank.classList.add('wrap_fold');
      dayReg.classList.add('wrap_fold');
      birthSuccess.classList.add('wrap_fold');

      checkAll[1] = false;
    }
  }
  else {
    input_month();
  }
}
function input_month() {
  if (!month.value) {
    yearBlank.classList.add('wrap_fold');
    yearReg.classList.add('wrap_fold');
    monthBlank.classList.remove('wrap_fold');
    dayBlank.classList.add('wrap_fold');
    dayReg.classList.add('wrap_fold');
    birthSuccess.classList.add('wrap_fold');

    checkAll[1] = false;
  }
    else {
      input_day();
    }
}
function input_day() {
  if (!REG_DAY.test(dd.value)) {
    if (!day.value) {
      yearBlank.classList.add('wrap_fold');
      yearReg.classList.add('wrap_fold');
      monthBlank.classList.add('wrap_fold');
      dayBlank.classList.remove('wrap_fold');
      dayReg.classList.add('wrap_fold');
      birthSuccess.classList.add('wrap_fold');

      checkAll[1] = false;
    }
    else {
      yearBlank.classList.add('wrap_fold');
      yearReg.classList.add('wrap_fold');
      monthBlank.classList.add('wrap_fold');
      dayBlank.classList.add('wrap_fold');
      dayReg.classList.remove('wrap_fold');
      birthSuccess.classList.add('wrap_fold');

      checkAll[1] = false;
    }
  }
  else {
    yearBlank.classList.add('wrap_fold');
    yearReg.classList.add('wrap_fold');
    monthBlank.classList.add('wrap_fold');
    dayBlank.classList.add('wrap_fold');
    dayReg.classList.add('wrap_fold');
    birthSuccess.classList.remove('wrap_fold');
    checkAll[1] = true;
  }
}
function input_uid() {
  // 아이디 유효성 테스트 및 결과 메시지 출력

  if (!REG_UID.test(uid.value)) {
    if (!uid.value) {
      uidBlank.classList.remove('wrap_fold');
      uidReg.classList.add('wrap_fold');
      uidSuccess.classList.add('wrap_fold');

      checkAll[2] = false;
    }
    else {
      uidBlank.classList.add('wrap_fold');
      uidReg.classList.remove('wrap_fold');
      uidSuccess.classList.add('wrap_fold');

      checkAll[2] = false;
    }
  }
  else {
    uidBlank.classList.add('wrap_fold');
    uidReg.classList.add('wrap_fold');
    uidSuccess.classList.remove('wrap_fold');
    checkAll[2] = true;
  }

}
function input_pwd() {
  // 비밀번호 유효성 검사 및 결과 출력
  if (!REG_PWD.test(pwd.value)) {
    if (!pwd.value) {
      pwdBlank.classList.remove('wrap_fold');
      pwdReg.classList.add('wrap_fold');
      pwdSuccess.classList.add('wrap_fold');

      checkAll[3] = false;
    }
    else {
      pwdBlank.classList.add('wrap_fold');
      pwdReg.classList.remove('wrap_fold');
      pwdSuccess.classList.add('wrap_fold');

      checkAll[3] = false;
    }
  }
  else {
    pwdBlank.classList.add('wrap_fold');
    pwdReg.classList.add('wrap_fold');
    pwdSuccess.classList.remove('wrap_fold');
    checkAll[3] = true;
  }
}
function input_pwdCheck(){
  // 비밀번호 재확인 및 결과 메시지 출력
  if (pwd.value !== pwdCheck.value) {
    if (!pwdCheck.value) {
      pwdCheckBlank.classList.remove('wrap_fold');
      pwdCheckFalse.classList.add('wrap_fold');
      pwdCheckSuccess.classList.add('wrap_fold');

      checkAll[4] = false;
    }
    else {
      pwdCheckBlank.classList.add('wrap_fold');
      pwdCheckFalse.classList.remove('wrap_fold');
      pwdCheckSuccess.classList.add('wrap_fold');

      checkAll[4] = false;
    }
  }
  else {
    if(!pwdCheck.value){
      pwdCheckBlank.classList.add('wrap_fold');
      pwdCheckFalse.classList.add('wrap_fold');
      pwdCheckSuccess.classList.add('wrap_fold');
      checkAll[4] = false;
    }
    else{
      pwdCheckBlank.classList.add('wrap_fold');
      pwdCheckFalse.classList.add('wrap_fold');
      pwdCheckSuccess.classList.remove('wrap_fold');
      checkAll[4] = true;
    }

  }
}
function input_tel(){
  //전화번호 유효성 테스트 및 결과 메시지 출력
  if (!REG_TEL.test(tel.value)) {
    if (!tel.value) {
      telBlank.classList.remove('wrap_fold');
      telReg.classList.add('wrap_fold');
      telSuccess.classList.add('wrap_fold');

      checkAll[5] = false;
    }
    else {
      telBlank.classList.add('wrap_fold');
      telReg.classList.remove('wrap_fold');
      telSuccess.classList.add('wrap_fold');

      checkAll[5] = false;
    }
  }
  else {
    telBlank.classList.add('wrap_fold');
    telReg.classList.add('wrap_fold');
    telSuccess.classList.remove('wrap_fold');
    checkAll[5] = true;
  }
}
function input_email(){
  if (!REG_EMAIL.test(email.value)) {
    if (!email.value) {
      emailBlank.classList.remove('wrap_fold');
      emailReg.classList.add('wrap_fold');
      emailSuccess.classList.add('wrap_fold');

      checkAll[6] = false;
    }
    else {
      emailBlank.classList.add('wrap_fold');
      emailReg.classList.remove('wrap_fold');
      emailSuccess.classList.add('wrap_fold');
      checkAll[6] = false;
    }
  }
  else {
    emailBlank.classList.add('wrap_fold');
    emailReg.classList.add('wrap_fold');
    emailSuccess.classList.remove('wrap_fold');
    checkAll[6] = true;
  }
}
// 회원가입,로그인 - 비밀번호 표시 체크 함수
function pwd_open() {
  const pword = document.getElementsByName('pwd');
  const check = document.getElementById('pwdOpen');

  if (check.checked) {
    pword.forEach(pw => {
      pw.setAttribute('type', 'text');
    })
  }
  else {
    pword.forEach(pw => {
      pw.setAttribute('type', 'password');
    })
  }
}


