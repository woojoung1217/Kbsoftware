const selected = document.querySelector(".selected");
const deselected = document.querySelector(".nav-manu");

function toggleSelected(event){
  console.log("??");
}

function test(event){
  console.log(event);
}

selected.addEventListener("click", test);
deselected.addEventListener("click", toggleSelected);