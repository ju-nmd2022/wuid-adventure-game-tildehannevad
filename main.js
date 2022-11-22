const FIRST = "./photos/backyard.jpg";
const SECOND = "./photos/fence.jpg";
const THIRD = "./photos/dogpark.jpeg";
const FORTH = "./photos/road.jpg";

const backyard = document.getElementById("canvas");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const key = document.getElementById("fenceKey");

let accessKey = false;

let currentScene = 1;
let sceneCount = 0;
chanceScene(currentScene);

function chanceScene(scene) {
  let imageSource;
  hideKey();
  if (scene == 1) {
    currentScene = 1;
    imageSource = FIRST;
    sceneCount += 1;
    if (sceneCount > 1) {
      showKey();
    }
  } else if (scene == 2) {
    currentScene = 2;
    imageSource = SECOND;
  } else if (scene == 3) {
    currentScene = 3;
    imageSource = THIRD;
    sceneCount += 1;
    if (sceneCount > 1) {
      showKey();
    }
  } else if (scene == 4) {
    currentScene = 4;
    imageSource = FORTH;
    sceneCount += 1;
    if (sceneCount > 1) {
      showKey();
    }
  }

  if (imageSource != null) {
    backyard.src = imageSource;
  }
}

arrowLeft.addEventListener("click", function () {
  let nextPage = currentScene - 1;
  if (nextPage <= 0) {
    nextPage = 4;
  }
  chanceScene(nextPage);
});

arrowRight.addEventListener("click", function () {
  let nextPage = currentScene + 1;
  if (nextPage > 4) {
    nextPage = 1;
  }
  chanceScene(nextPage);
});

function showKey() {
  key.hidden = false;
}

function hideKey() {
  key.hidden = true;
}
