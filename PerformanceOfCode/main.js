const time_1 = performance.now();
for (let i = 1; i <= 50; i++) {
  let newElement = document.createElement("h4");
  newElement.textContent = "I am Para " + i;

  document.body.appendChild(newElement);
}
const time_2 = performance.now();
console.log("Time taken by code snippet first is ", time_2 - time_1);

const t1 = performance.now();
let myDiv = document.createElement("div");
for (let i = 1; i <= 50; i++) {
  let newElement = document.createElement("h4");
  newElement.textContent = "I am optimized para " + i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
const t2 = performance.now();
console.log("Time taken by second code snippet is ", t2 - t1);
