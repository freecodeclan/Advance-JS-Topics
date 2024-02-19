let newPara = document.createElement("p"); //-- Creating new Element

newPara.className = "para"; //-- Creating class using JS

newPara.id = "p1"; //-- Creating id using JS
newPara.textContent = "I am Harsh Mehra"; //--- Adding text to new element 'p'

document.body.appendChild(newPara); //--- And, now adding that element to the body

const newPara1 = document.getElementById("p1"); //-- fetching element with the help of id
console.log(newPara1);
