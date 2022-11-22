const key = document.getElementById("fenceKey");
const arrowRight = document.getElementById("arrowRightBackyard");
function showKey() {
  key.hidden = false;
}

function hideKey() {
  key.hidden = true;
}

hideKey();

arrowRight.addEventListener("click", function () {
  showKey();
});

console.log(key);
