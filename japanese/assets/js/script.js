const toggleTranslation = (e) => {
  const translation = e.target.previousSibling.previousSibling;

  if (translation.className === "hide") {
    translation.className = "kana text-center";
    e.target.innerText = "Hide";
    e.target.style.backgroundColor = "rgb(189, 14, 81)";
  } else {
    translation.className = "hide";
    e.target.innerText = "Show";
    e.target.style.backgroundColor = "blue";
  }
};

const check = (e, answer) => {
  const label = e.target.previousSibling.previousSibling;
 
  const input = e.target; 

  if (e.target.value.toLowerCase() !== answer) {
    label.style.border = "5px solid red";
    input.style.border = "5px solid red";
    label.innerText = "Wrong! X_x";
  } else {
    label.style.border = "5px solid green";
    input.style.border = "5px solid green";
    label.innerText = "Correct! ^_^";
  }
};
