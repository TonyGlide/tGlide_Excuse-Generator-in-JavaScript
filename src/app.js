/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "my grandma", "The mailman", "The bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function selectArrayElement(arrayName, arrayLength) {
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  let escuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  const htmlElement = document.querySelector(".excuse");
  htmlElement.innerHTML = escuse;
};
