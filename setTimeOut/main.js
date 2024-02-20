const newElement = document.createElement("div");
newElement.className = "set";
newElement.id = "time";

let para = document.createElement("p");
newElement.appendChild(para);
para.textContent = "I am learning setTimeout method";

document.body.appendChild(newElement);
para.style.fontWeight = "bold";

newElement.addEventListener("click", function () {
  setTimeout(function () {
    console.log("I am setTimeOut");
  }, 1000);
});
