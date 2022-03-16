// let btn = document.querySelector(".btn");
// let inp = document.querySelector(".inp");
// let div = document.querySelector(".div");
// let timerid;

// function timer() {
//   if (!Number(inp.value)) {
//     alert("Введите число");
//     return;
//   } else {
//     clearInterval(timerid);
//     div.textContent = inp.value;
//     timerid = setInterval(() => {
//       if (div.textContent == 0) {
//         clearInterval(timerid);
//       } else {
//         div.textContent -= 1;
//       }
//     }, 1000);
//   }
// }

// btn.addEventListener("click", timer);

let h2 = document.querySelector(".h2");
let input = document.querySelector(".input");
let timeout;

function time() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    h2.textContent = input.value;
  }, 300);
}

input.addEventListener("input", time);
