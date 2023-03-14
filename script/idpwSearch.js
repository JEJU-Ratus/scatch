const idpwSelect = document.querySelectorAll('.cont_idpwSelect a'),
  selectList = document.querySelectorAll('.selectList'),
  underLine = document.getElementById('underLine'),
  uname = document.getElementById('uname'),
  uname1 = document.getElementById('uname1'),
  uid = document.getElementById('uid'),
  tel = document.getElementById('tel'),
  tel1 = document.getElementById('tel1');

const REG_NAME = /^[가-힣]{2,30}$/,
  REG_UID = /^[a-z0-9]{1}[a-z0-9_-]{4,20}$/,
  REG_TEL = /^(010|011|016|017|018|019)(\d{3}|\d{4})(\d{4})$/;

let check_condition1 = true;
let check_condition2 = true;
for (let i = 0; i < idpwSelect.length; i++) {
  idpwSelect[i].addEventListener('click', function (e) {
    e.preventDefault();
    addUnderLine(e);
    addActive(e);
    for (let j = 0; j < selectList.length; j++) {
      selectList[j].parentElement.classList.remove('show');
    }
    selectList[i].parentElement.classList.add('show');
  });

}

function addUnderLine(e) {
  underLine.style.left = e.currentTarget.offsetLeft + 'px';
  underLine.style.width = e.currentTarget.offsetWidth + 'px';
  underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
}

function addActive(e) {
  idpwSelect.forEach(e2 => {
    e2.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

// 아이디 찾기
function idSearch_form() {
  idSearch_check();
  console.log(check_condition1);
  return check_condition1;
}

// 비밀번호 찾기

function pwSearch_form(){
  pwSearch_check();
  console.log(check_condition2);
  return check_condition2;
}



// 아이디 찾기 유효성 검사
function idSearch_check() {
  if (!REG_NAME.test(uname.value)) {
    if (!uname.value) {
      alert('이름을 입력해주세요.');
      check_condition1 = false;
      uname.focus();
      return;
    }
    else {
      alert('가입된 명의자가 없습니다.');
      check_condition1 = false;
      uname.focus();
      return;
    }
  }
  else tel_check();
}

function tel_check() {
  if (!REG_TEL.test(tel.value)) {
    if (!tel.value) {
      alert('전화번호를 입력해주세요. 예)01012345678');
      check_condition1 = false;
      tel.focus();
      return;
    }
    else {
      alert('형식에 맞게 전화번호를 입력해주세요. 예)01012345678');
      check_condition1 = false;
      tel.focus();
      return;
    }
  }
  else {
    check_condition1 = true;
  }
}

// 비밀번호 찾기 유효성 검사

function pwSearch_check(){
  if(!REG_UID.test(uid.value)){
    if(!uid.value){
      alert('아이디를 입력해주세요.');
      check_condition2 = false;
      uid.focus();
    }
    else{
      alert('가입되지 않은 아이디입니다.');
      check_condition2 = false;
      uid.focus();
    }
  }
  else name1_check();
}

function name1_check() {
  if (!REG_NAME.test(uname1.value)) {
    if (!uname1.value) {
      alert('이름을 입력해주세요.');
      check_condition2 = false;
      uname1.focus();
      return;
    }
    else {
      alert('가입된 명의자가 없습니다.');
      check_condition2 = false;
      uname1.focus();
      return;
    }
  }
  else tel1_check();
}

function tel1_check() {
  if (!REG_TEL.test(tel1.value)) {
    if (!tel1.value) {
      alert('전화번호를 입력해주세요. 예)01012345678');
      check_condition2 = false;
      tel1.focus();
      return;
    }
    else {
      alert('형식에 맞게 전화번호를 입력해주세요. 예)01012345678');
      check_condition2 = false;
      tel1.focus(); 
      return;
    }
  }
  else {
    check_condition2 = true;
  }
}