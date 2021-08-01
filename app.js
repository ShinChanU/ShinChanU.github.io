'use strict';

const click_li = document.querySelectorAll(".main_list li");
const main_page = document.querySelector(".main_page");

function clickList(event) {
  const list_name = event.target.innerText;
  let page_name = document.getElementsByClassName(`${list_name}_page`);
  page_name[0].classList.remove("hidden");
  for (let i = 0; i < click_li.length; i++) {
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
  for (let i = 0; i < click_li.length; i++) {
    const element = click_li[i];
    element.addEventListener("click", clickList);
  }
}

click();