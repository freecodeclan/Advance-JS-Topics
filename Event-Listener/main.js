let add = document.querySelector(".new");
add.style.cursor = "pointer";

function display() {
  console.log("I am event listener");
}

add.addEventListener("click", display); //-- Adding Event Listener

add.removeEventListener("click", display); //-- Removing event listener
