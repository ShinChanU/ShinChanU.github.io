'use strict';

// 메뉴 list 클릭시 페이지 이동
const click_li = document.querySelectorAll(".main_list li");
const main_page = document.querySelector(".main_page");

function clickList(event) {
  const list_name = event.target.innerText;
  let page_name = document.getElementsByClassName(`${list_name}_page`);
  page_name[0].classList.remove("hidden");
  for (let i = 0; i < click_li.length - 1; i++) {
    const element = click_li[i];
    let eleInnerText = element.innerText;
    if (eleInnerText !== list_name) {
      page_name = document.getElementsByClassName(`${eleInnerText}_page`)
      page_name[0].classList.add("hidden");
    }
  }
  main_page.classList.add("hidden");
}

function click() {
  for (let i = 0; i < click_li.length - 1; i++) {
    const element = click_li[i];
    element.addEventListener("click", clickList);
  }
}

click();

// 현재 창 닫기
function closeTabClick() {
  window.close();
}

// 메뉴에서 단축키 입력시 발생
// 더 좋은 코드 필요
function keyChangePage(x) {
  switch (x.key) {
    case 'a':
      document.getElementsByClassName("about_page")[0].classList.remove("hidden");
      document.getElementsByClassName("skill_page")[0].classList.add("hidden");
      document.getElementsByClassName("project_page")[0].classList.add("hidden");
      document.getElementsByClassName("contact_page")[0].classList.add("hidden");
      document.getElementsByClassName("main_page")[0].classList.add("hidden");
      break;
    case 's':
      document.getElementsByClassName("skill_page")[0].classList.remove("hidden");
      document.getElementsByClassName("about_page")[0].classList.add("hidden");
      document.getElementsByClassName("project_page")[0].classList.add("hidden");
      document.getElementsByClassName("contact_page")[0].classList.add("hidden");
      document.getElementsByClassName("main_page")[0].classList.add("hidden");
      break;
    case 'p':
      document.getElementsByClassName("project_page")[0].classList.remove("hidden");
      document.getElementsByClassName("skill_page")[0].classList.add("hidden");
      document.getElementsByClassName("about_page")[0].classList.add("hidden");
      document.getElementsByClassName("contact_page")[0].classList.add("hidden");
      document.getElementsByClassName("main_page")[0].classList.add("hidden");
      break;
    case 'c':
      document.getElementsByClassName("contact_page")[0].classList.remove("hidden");
      document.getElementsByClassName("skill_page")[0].classList.add("hidden");
      document.getElementsByClassName("project_page")[0].classList.add("hidden");
      document.getElementsByClassName("about_page")[0].classList.add("hidden");
      document.getElementsByClassName("main_page")[0].classList.add("hidden");
      break;
    case 'm':
      document.getElementsByClassName("main_page")[0].classList.remove("hidden");
      document.getElementsByClassName("skill_page")[0].classList.add("hidden");
      document.getElementsByClassName("project_page")[0].classList.add("hidden");
      document.getElementsByClassName("about_page")[0].classList.add("hidden");
      document.getElementsByClassName("contact_page")[0].classList.add("hidden");
      break;
    case 'Escape':
      window.close();
      break;
  }
}

window.addEventListener("keydown", (x) => keyChangePage(x));