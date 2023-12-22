window.onload = function () {
  var element = document.getElementById("align-self-stretch");

  var left = document.getElementById("icon-zuojiantou");
  var right = document.getElementById("icon-youjiantou");
  if (element) {
    console.log("Element found");
    element.addEventListener("scroll", function () {
      var scrollPosition = Math.ceil(element.scrollLeft + element.clientWidth);
      console.log("Scroll position: " + scrollPosition);
      console.log(element.scrollWidth);
      console.log(element.scrollLeft);
      if (scrollPosition === element.scrollWidth) {
        right.style.display = "none";
        left.style.display = "block";
      }

      if (element.scrollLeft === 0) {
        right.style.display = "block";
        left.style.display = "none";
      }
    });
  } else {
    console.log("Element not found");
  }

  var box = document.getElementById("box");
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  if (box) {
    if (isMobileDevice()) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }
};
var nav = document.getElementById("casetify-menu");
function handleNav() {
  nav.style.visibility = "visible";
}

function handleMiss() {
  nav.style.visibility = "hidden";
}

var product = document.getElementById("product-authentication");
var three = document.getElementById("three");
var six = document.getElementById("six");

function handleCode() {
  product.style.display = "block";
  three.style.display = "none";
  six.style.display = "none";
}
