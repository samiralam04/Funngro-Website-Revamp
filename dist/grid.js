"use strict";

function hoverEffect(target) {
  var targetBox = document.querySelector(".partners-box.".concat(target));
  var otherBoxes = document.querySelectorAll(".partners-box:not(.".concat(target, ")"));
  targetBox.classList.add('scaled');
  otherBoxes.forEach(function (box) {
    return box.classList.add('hidden');
  });
}

function resetEffect(target) {
  var targetBox = document.querySelector(".partners-box.".concat(target));
  var otherBoxes = document.querySelectorAll(".partners-box:not(.".concat(target, ")"));
  targetBox.classList.remove('scaled');
  otherBoxes.forEach(function (box) {
    return box.classList.remove('hidden');
  });
}
//# sourceMappingURL=gridthree.dev.js.map
