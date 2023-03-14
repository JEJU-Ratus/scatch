const header = document.getElementById('header'),
kategorie = document.querySelector('.wrap_menuKategorie'),// 상단메뉴 중 "판매캐릭터"의 상세메뉴
kategorieMenu = document.querySelector('.menuKategorie');// 상단메뉴 중 "판매캐릭터" // 헤더 연결

let lastScrollTop = 0; //기준이되는 현재 스크롤의 위치

window.addEventListener('scroll',function(){
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){ // 스크롤 한 수치가 기존의 위치에 비교하면 어떤지
      header.style.top= "-80px"; // 스크롤 한 수치가 기존의 위치보다 수가 크다면 -> 헤더의 높이만큼 탑을 - 값을 줌
  }
  else{
    header.style.top = "0"; // 스크롤 수치가 기존의 위치보다 수가 작다면 -> 헤더를 다시 원래의 자리로
  }
  lastScrollTop = scrollTop; // 스크롤 수치를 다시 기준으로 삼는다.
});


kategorie.addEventListener('mouseenter',function(){
  kategorieMenu.style.backgroundColor = "#ca5bec57";
});
kategorie.addEventListener('mouseleave',function(){
  kategorieMenu.style.backgroundColor = "rgba( 255, 255, 255, 0)";
});