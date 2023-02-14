function joinform_check() {
  const uname = document.querySelector('#name'); //이름 파라미터의 값를 가져옴.

  const regName = /^[가-힣]{2,30}$/; // 이름 규칙
  let checkAll = true; // 유효성 검사 결과 최종 값이 들어갈 곳. 기본값 true
  if (!regName.test(uname.value)) { // 이름 규칙 확인
    alert("이름은 한글 2~30자 이내로 작성해주세요."); // 창띄우기
    uname.focus(); // 이름으로 돌아가기
    checkAll = false;
  }

  if(!checkAll){
    return false;
  }
}