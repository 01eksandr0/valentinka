const btn1 = document.querySelector(".page-1-btn");
const btn2 = document.querySelector(".page-2-btn");

const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const page3 = document.querySelector(".page-3");

const openPage2 = () => {
  page1.classList.add("is-opacity");
  setTimeout(() => page2.classList.remove("is-opacity"), 300);
};
btn1.addEventListener("click", openPage2);

const openPage3 = () => {
  page2.classList.add("is-opacity");
  setTimeout(() => page3.classList.remove("is-opacity"), 300);
};
btn2.addEventListener("click", openPage3);
