/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here

//   let who = ["The dog",  "my grandma", "The mailman", "The bird"];
//   let action = ["ate", "peed", "crushed", "broke"];
//   let what = ["my homework", "my phone", "the car"];
//   let when = [
//     "before the class",
//     "when I was sleeping",
//     "while I was exercising",
//     "during my lunch",
//     "while I was praying"
//   ];

//   function selectArrayElement(arrayName, arrayLength) {
//     let randomNumber = Math.floor(Math.random() * arrayLength);
//     let selectedElement = arrayName[randomNumber];
//     return selectedElement;
//   }

//   let randomWho = selectArrayElement(who, who.length);
//   let randomAction = selectArrayElement(action, action.length);
//   let randomWhat = selectArrayElement(what, what.length);
//   let randomWhen = selectArrayElement(when, when.length);

//   let escuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
//   let htmlElement = document.querySelector(".excuse");
//   htmlElement.innerHTML = escuse;
// };

let excuseData = [
  {
    excuse: "My dog ate my homework.",
    imageUrl:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    excuse: "I left it at my grandma's house.",
    imageUrl:
      "https://images.unsplash.com/photo-1564228511783-821f2f547f44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
  },
  {
    excuse: "I was not feeling well.",
    imageUrl:
      "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    excuse: "My internet was down!",
    imageUrl:
      "hhttps://images.unsplash.com/photo-1485735662814-c4f66e49dbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
  },
  {
    excuse:
      "https://images.unsplash.com/photo-1501673618753-48ce9418287b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
    imageUrl: "https://picsum.photos/200/300"
  }
];

function generateExcuse() {
  // Randomly select an excuse object
  let randomIndex1 = Math.floor(Math.random() * excuseData.length);
  let selectedExcuse = excuseData[randomIndex1];

  // Update the webpage
  document.getElementById("excuseText").textContent = selectedExcuse.excuse;
  document.getElementById("excuseImage").src = selectedExcuse.imageUrl;
}
