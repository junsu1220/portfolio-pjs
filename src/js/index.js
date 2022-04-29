import "../scss/style.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import Slider from "./ImageSlider";
import Theme from "./theme";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const toTopEl = document.querySelector("#to-top");
const toHomeEl = document.querySelector("#home");
const toAboutEl = document.querySelector("#about-me");
const toSkillsEl = document.querySelector("#skills");
const toProjectsEl = document.querySelector("#projects");
const toAlgorithmEl = document.querySelector("#algorithm");

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
toHomeEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
toAboutEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 550,
  });
});
toSkillsEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 1430,
  });
});
toProjectsEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 2280,
  });
});
toAlgorithmEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 3200,
  });
});

new Theme();
new Slider();
