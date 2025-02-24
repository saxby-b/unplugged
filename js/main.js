let changeDate = document.querySelector(".copyright span");
const d = new Date();
const year = d.getFullYear();
changeDate.innerText = year;