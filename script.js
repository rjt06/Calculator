const inputBox = document.querySelector(".input-box");

greyZero();

document.querySelector(".one-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "1";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".two-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "2";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".three-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "3";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".four-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "4";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".five-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "5";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".six-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "6";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".seven-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "7";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".eight-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "8";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".nine-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "9";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".zero-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "0";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".point-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += ".";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".ac-btn").addEventListener("click", () => {
  inputBox.innerHTML = "0";
  greyZero();
});

document.querySelector(".backspace-btn").addEventListener("click", () => {
  inputBox.innerHTML = inputBox.innerHTML.slice(0, -1);
});

document.querySelector(".bracket-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 15) {
    inputBox.innerHTML = `(-${inputBox.innerHTML})`;
  } else if (inputBox.innerText.length > 15) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".divide-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "/";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".into-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "*";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".minus-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "-";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".plus-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "+";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".modulo-btn").addEventListener("click", () => {
  commonFunctions();
  if (inputBox.innerText.length < 20) {
    inputBox.innerHTML += "%";
  } else if (inputBox.innerText.length > 20) {
    inputBox.innerHTML += "";
  }
});

document.querySelector(".equal-btn").addEventListener("click", () => {
  inputBox.innerHTML = eval(inputBox.innerHTML);
  commonFunctions();
  inputBox.innerHTML = inputBox.innerHTML.slice(0, 18);
});

function makeEmpty() {
  if (inputBox.innerHTML === "0") {
    inputBox.innerHTML = "";
  }
}

function greyZero() {
  if (inputBox.innerHTML === "0") {
    inputBox.style.color = "grey";
  }
}

function whiteText() {
  inputBox.style.color = "white";
}

function maxLength11() {
  if (inputBox.innerText.length >= 11) {
    inputBox.style.fontSize = "4rem";
  }
}

function maxLength16() {
  if (inputBox.innerText.length >= 16) {
    inputBox.style.fontSize = "3rem";
  }
}

function commonFunctions() {
  makeEmpty();
  whiteText();
  maxLength11();
  maxLength16();
}