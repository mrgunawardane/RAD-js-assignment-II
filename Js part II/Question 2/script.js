const nowTime = document.querySelector(".now"),
remainTime = document.querySelector(".remain");

let current = new Date();
nowTime.innerText = current.toLocaleTimeString();
let hour = 24 - current.getHours();
remainTime.innerText = hour.toString();
