let time_1 = performance.now();
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 50; i++) {
  let newElement = document.createElement("h4");
  newElement.textContent = "I am Para " + i;

  fragment.appendChild(newElement);
}
console.log(document.body.appendChild(fragment));
let time_2 = performance.now();
console.log("Time taken by code to run ", time_2 - time_1);
