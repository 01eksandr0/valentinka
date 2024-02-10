const btn1 = document.querySelector(".page-1-btn");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");

const openPage2 = () => {
  page1.classList.add("is-opacity");
  page2.classList.remove("is-opacity");
  window.navigator.vibrate([
    100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30,
    100,
  ]);
};
btn1.addEventListener("click", openPage2);
