export default class ImageSlider {
  #currentPostion = 0;

  #slideNumber = 0;

  #slideWidth = 0;

  sliderWrapEl;

  sliderListEl;

  nextBtnEl;

  previousBtnEl;

  indicatorWrapEl;

  controlWrapEl;

  pauseEl;

  playEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber();
    this.initSliderWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById("slider-wrap");
    this.sliderListEl = this.sliderWrapEl.querySelector("#slider");
    this.nextBtnEl = this.sliderWrapEl.querySelector("#next");
    this.previousBtnEl = this.sliderWrapEl.querySelector("#previous");
    this.indicatorWrapEl = this.sliderWrapEl.querySelector("#indicator-wrap");
  }

  initSliderNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll("li").length;
  }

  initSliderWidth() {
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }

  addEvent() {
    this.nextBtnEl.addEventListener("click", this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener("click", this.moveToLeft.bind(this));
    this.indicatorWrapEl.addEventListener(
      "click",
      this.onClickIndicator.bind(this)
    );
  }

  moveToRight() {
    this.#currentPostion += 1;
    if (this.#currentPostion === this.#slideNumber) {
      this.#currentPostion = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPostion
    }px`;
    this.setIndicator();
  }

  moveToLeft() {
    this.#currentPostion -= 1;
    if (this.#currentPostion === -1) {
      this.#currentPostion = this.#slideNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPostion
    }px`;
    this.setIndicator();
  }

  createIndicator() {
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < this.#slideNumber; i += 1) {
      const li = document.createElement("li");
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector("ul").appendChild(docFragment);
  }

  setIndicator() {
    this.indicatorWrapEl.querySelector("li.active")?.classList.remove("active");
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPostion + 1})`)
      .classList.add("active");
  }

  onClickIndicator(event) {
    const indexPosition = parseInt(event.target.dataset.index, 10);
    if (Number.isInteger(indexPosition)) {
      this.#currentPostion = indexPosition;
      this.sliderListEl.style.left = `-${
        this.#slideWidth * this.#currentPostion
      }px`;
      this.setIndicator();
    }
  }
}
