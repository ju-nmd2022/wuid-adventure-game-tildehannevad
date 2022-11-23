const FIRST = "./photos/backyard.jpg";
const SECOND = "./photos/fence.jpg";
const THIRD = "./photos/dogpark.jpeg";
const FORTH = "./photos/road.jpg";

const backyard = document.getElementById("canvas");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const key = document.getElementById("fenceKey");
const inventoryKey = document.getElementById("inventoryKey");
const inventoryDogbone = document.getElementById("inventoryDogbone");
const inventoryDogCollar = document.getElementById("inventoryDogCollar");
const errorMessage = document.getElementById("guide");
const dogbone = document.getElementById("parkDogbone");
const dogCollar = document.getElementById("parkDogCollar");
const deadDog = document.getElementById("deadDog");
const aliveDog = document.getElementById("aliveDog");
const finnish = document.getElementById("finnish");
const gameOver = document.getElementById("gameOver");

const keyKey = "fenceKey";

let accessKey = false;
let hasKey = false;
let hasDogCollar = false;
let hasDogbone = false;
let currentScene = 1;
let sceneCount = 0;
inventoryKey.style.filter = "opacity(0.25)";
inventoryDogbone.style.filter = "opacity(0.25)";
inventoryDogCollar.style.filter = "opacity(0.25)";
chanceScene(currentScene);

getPreviousInventory();

hideErrorMessage();

function saveInventory() {
  sessionStorage.setItem(keyKey, hasKey.toString());
}

function getPreviousInventory() {
  // key
  let hasKeyValue = sessionStorage.getItem(keyKey);
  hasKey = hasKeyValue === "true";
  if (hasKey) {
    inventoryKey.style.filter = "";
  }
}

function chanceScene(scene) {
  let imageSource;
  hideErrorMessage();
  hideDogbone();
  hideDogCollar();
  hideDeadDog();
  hideAliveDog();
  hideFinnish();
  hideGameOver();
  hideKey();
  if (scene == 1) {
    showKey();
    currentScene = 1;
    imageSource = FIRST;
    //sceneCount += 1;
  } else if (scene == 2) {
    if (hasKey) {
      hideKey();
      hideErrorMessage();
      currentScene = 2;
      imageSource = SECOND;
      //sceneCount += 1;
    } else {
      showErrorMessage(
        "You must take the key with you before continuing to the next page!"
      );
    }
  } else if (scene == 3) {
    showDogCollar();
    showDogbone();
    currentScene = 3;
    imageSource = THIRD;
    //sceneCount += 1;
  } else if (scene == 4) {
    if (hasDogCollar && hasDogbone) {
      hideDogbone();
      hideDogCollar();
      hideErrorMessage();
      let rand = Math.floor(Math.random() * 2) + 1;
      if (rand == 2) {
        showAliveDog();
        showFinnish();
      } else {
        showDeadDog();
        showGameOver();
      }
      currentScene = 4;
      imageSource = FORTH;
      //sceneCount += 1;
    } else {
      showErrorMessage(
        "You must take the bone and dog collar with you before continuing to the next page!"
      );
    }
  }

  console.log(arrowRight);

  if (imageSource != null) {
    backyard.src = imageSource;
  }
}

arrowLeft.addEventListener("click", function () {
  let nextPage = currentScene - 1;
  if (nextPage <= 0) {
    nextPage = 0;
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

key.addEventListener("click", function () {
  inventoryKey.style.filter = "";
  if (!hasKey) {
    hasKey = true;
    hideKey();
    saveInventory();
  }
});

dogbone.addEventListener("click", function () {
  inventoryDogbone.style.filter = "";
  if (!hasDogbone) {
    hasDogbone = true;
    hideDogbone();
  }
});

dogCollar.addEventListener("click", function () {
  inventoryDogCollar.style.filter = "";
  if (!hasDogCollar) {
    hasDogCollar = true;
    hideDogCollar();
  }
});

function showKey() {
  key.hidden = false;
}

function hideKey() {
  key.hidden = true;
}

function hideDogbone() {
  dogbone.hidden = true;
}

function showDogbone() {
  dogbone.hidden = false;
}

function hideDogCollar() {
  dogCollar.hidden = true;
}

function showDogCollar() {
  dogCollar.hidden = false;
}

function hideErrorMessage() {
  errorMessage.style.display = "none";
}

function hideAliveDog() {
  aliveDog.hidden = true;
}

function showAliveDog() {
  aliveDog.hidden = false;
}

function hideDeadDog() {
  deadDog.hidden = true;
}

function showDeadDog() {
  deadDog.hidden = false;
}

function hideFinnish() {
  finnish.hidden = true;
}

function showFinnish() {
  finnish.hidden = false;
}

function hideGameOver() {
  gameOver.hidden = true;
}

function showGameOver() {
  gameOver.hidden = false;
}

function showErrorMessage(message) {
  errorMessage.style.display = "flex";
  errorMessage.innerHTML = message;
}

function showKey() {
  if (!hasKey) {
    key.hidden = false;
  }
}

function showDogCollar() {
  if (!hasDogCollar) {
    dogCollar.hidden = false;
  }
}

function showDogbone() {
  if (!hasDogbone) {
    dogbone.hidden = false;
  }
}
