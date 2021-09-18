const selected = document.querySelector(".selected");
const manues = document.querySelectorAll(".nav-manu");

function toggleSelected(event){
  for(let i = 0; i < manues.length; i++){
    manues[i].classList.remove("selected-manu");
    manues[i].children[0].classList.remove("selected-title")
  }
  event.currentTarget.classList.add("selected-manu");
  event.currentTarget.children[0].classList.add("selected-title");
}

for(let i = 0; i< manues.length; i++){
  manues[i].addEventListener("click", toggleSelected);
}