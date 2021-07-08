"use strict";
//Event for Sliding Big Title

const slide1 = document.querySelector("#sliding-1");
const slide2 = document.querySelector("#sliding-2");
const slide3 = document.querySelector("#sliding-3");
const slides = [slide1, slide2, slide3];
let num = 1;

setInterval(function () {
  if (num === 0 || num === 1 || num === 2) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[num].style.display = "block";
    num++;
  } else if (num > 2) {
    num = 0;
  }
}, 4000);

//Tab Component for Services

const tabContainer = document.querySelector("#service-tab-container");
const tabs = document.querySelectorAll(".service-tab");
const servicesContent = document.querySelectorAll(".service-content");

tabContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const click = e.target.closest(".service-tab");
  console.log(click);

  if (!click) console.log("no such element");
  tabs.forEach((tab) => tab.classList.remove("active-li"));
  click.classList.add("active-li");

  servicesContent.forEach((content) =>
    content.classList.remove(
      "active-row",
      "animate__animated",
      "animate__slideInRight"
    )
  );

  document
    .querySelector(`.service-content-${Math.floor(click.dataset.service)}`)
    .classList.add("active-row", "animate__animated", "animate__slideInRight");
});

//Tab Component for Products
