
function joinform_check() {
  const uname = document.querySelector('#name'); //이름 파라미터의 연동
  const year = document.querySelector('#yy'); // 생년월일의 연도 파라미터 연동
  const day = document.querySelector('#dd'); // 생년월일의 일자 파라미터 연동
  const uid = document.querySelector('#uid'); // 사용자 아이디 파라미터 연동
  const pwd = document.querySelector('#pwd'); // 비밀번호 파라미터 연동
  const pwdCheck = document.querySelector('#pwdCheck'); // 비밀번호확인 파라미터 연동
  const tel = document.querySelector('#tel'); // 전화번호 파라미터 연동
  const email = document.querySelector('#email'); //email 파라미터 연동

  const REG_NAME= /^[가-힣]{2,30}$/; // 이름 규칙
  const REG_YEAR= /^(19[0-9][0-9]|20\d{2})$/; // 생년월일 중 연도 규칙
  const REG_DAY = /^([1-9]|[1-2][0-9]|3[0-1])$/ // 생년월일 중 일 규칙
  const REG_UID = /^[a-z0-9]{1}[a-z0-9_-]{4,20}$/; // user ID 규칙
  const REG_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{9,20}$/;
  const REG_TEL = /^(010|011|016|017|018|019)(\d{3}|\d{4})(\d{4})/;
  //하단은 RFC 5322 이메일 검증 양식을 이용함.
  const REG_EMAIL = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/;
  let checkAll = true; // 유효성 검사 결과 최종 값이 들어갈 곳. 기본값 true

  if (!REG_NAME.test(uname.value)) { // 이름 규칙 확인
    alert("이름은 한글 2~30자 이내로 작성해주세요."); // 창띄우기
    uname.focus(); // 이름으로 돌아가기
    checkAll = false;
  }
  else if(!REG_YEAR.test(year.value)){
    alert("연도를 정확하게 입력해주세요. 예)1999, 2023, ...");
    year.focus();
    checkAll = false;
    console.log(checkAll);
  }
  else if(!REG_DAY.test(dd.value)){
    alert("일자를 정확하게 입력해주세요. 예)1~31 ...");
    day.focus();
    checkAll = false;
  }
  else if(!REG_UID.test(uid.value)){
    alert("아이디는 영문 소문자로 시작하며 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
    uid.focus();
    checkAll = false;
  }
  else if(!REG_PWD.test(pwd.value)){
    alert("비밀번호는 영문 대소문자, 숫자, 특수문자(!,@,#)를 꼭 포함하여 9~20자로 해야합니다.");
    pwd.focus();
    checkAll = false;
  }
  else if(pwd.value !== pwdCheck.value){
    alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
    pwdCheck.focus();
    checkAll = false;
  }
  else if(!REG_TEL.test(tel.value)){
    alert("전화번호 형식이 잘못되었습니다. 예)01034567890");
    tel.focus();
    checkAll = false;
  }
  else if(!REG_EMAIL.test(email.value)){
    alert("이메일 형식이 잘못되었습니다.");
    email.focus();
    checkAll = false;
  }
  
 


  if(!checkAll){
    return false;
  }
}

function pwd_open(){
  const pword = document.getElementsByName('pwd');
  const check = document.querySelector('#pwdOpen');

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