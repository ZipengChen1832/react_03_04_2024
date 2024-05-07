const form = document.getElementById("sumForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const sum = num1.value + num2.value;
  result.textContent = sum;
});

