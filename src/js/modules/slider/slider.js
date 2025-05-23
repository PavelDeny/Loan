export default class Slider {
  constructor({ page = "", btns = "", next = "", prev = "" } = {}) {
    this.page = document.querySelector(page);
    // this.slides = this.page.children;
    this.slides = Array.from(this.page.children); // <-- Исправлено здесь
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }
}
