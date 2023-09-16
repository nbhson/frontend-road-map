function changeImg(src) {
  document.querySelector("#slide__img").src  = src;
}

function inputActive(parent, child, action, event) {
  document.querySelector(child).addEventListener(event, (e) => {
    document.querySelector(parent).classList.add(action);
  });
}

function inputUnActive(parent, child, action, event) {
  document.querySelector(child).addEventListener(event, (e) => {
    document.querySelector(parent).classList.remove(action);
  });
}

// input 1
inputActive(".navbar__search-input--1", ".navbar__search-input--1-text", "input-active", "focus");
inputUnActive(".navbar__search-input--1", ".navbar__search-input--1-text", "input-active", "focusout");

// input 2

inputActive(".navbar__search-input--2", ".navbar__search-input--2", "input-active", "mouseover");
inputUnActive(".navbar__search-input--2", ".navbar__search-input--2", "input-active", "mouseout");

// input 3
inputActive(".navbar__search-input--3", ".navbar__search-input--3", "input-active", "mouseover");
inputUnActive(".navbar__search-input--3", ".navbar__search-input--3", "input-active", "mouseout");

// slide show
inputActive(".slide__choose-item--1", ".slide__choose-item--1", "active", "mouseover");
inputUnActive(".slide__choose-item--1", ".slide__choose-item--1", "active", "mouseout");

inputActive(".slide__choose-item--2", ".slide__choose-item--2", "active", "mouseover");
inputUnActive(".slide__choose-item--2", ".slide__choose-item--2", "active", "mouseout");

inputActive(".slide__choose-item--3", ".slide__choose-item--3", "active", "mouseover");
inputUnActive(".slide__choose-item--3", ".slide__choose-item--3", "active", "mouseout");