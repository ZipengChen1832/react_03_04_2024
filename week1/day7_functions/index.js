//lexical scoping

// const a = "a"
// if(true){
//   const b = "b"
//   console.log(a)
// }

//closure
//inner function has access to outer function's variables
//event after the outer function has returned
//it can be used to create private variables

const innerFunc = (function () {
  let count = 0;

  return function () {
    return {
      // count: count,
      getCount: () => {
        return count;
      },
      add() {
        count += 1;
      },
    };
  };
})();

// //currying
const obj = innerFunc();
console.log(obj.getCount());
obj.add();
console.log(obj.getCount());

// const foo = () => {
//   //explicit return: when you are using the "return"
//   return 5;
// };

// const foo = () => ({
//   name: "Joe",
//   age: 12,
// });

// console.log(foo());

// const a = (x) => (y) => (z) => x + y + z;

// console.log(a(5)(10)(59));

const sum = (function (a, b) {
  // console.log(a, b);
  return a + b;
})(1, 2);

//debouncing

const debounce = (cb, delay = 1000) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// window.addEventListener(
//   "mousemove",
//   debounce((event) => {
//     console.log(event.pageX);
//   })
// );

const input = document.getElementById("query");

input.addEventListener(
  "input",
  debounce((e) => {
    console.log(e.target.value);
  }, 100)
);



let nukeId;
const launch = document.querySelector(".launch");
const cancel = document.querySelector(".cancel");
const timer = document.querySelector(".timer");

launch.addEventListener("click", () => {
  nukeId = setInterval(() => {
    const timeLeft = Number(timer.textContent);
    if (timeLeft === 0) {
      clearInterval(nukeId);
      alert("Exploded");
      return;
    }

    timer.textContent = timeLeft - 1;
  }, 1000);
});

cancel.addEventListener("click", () => {
  clearInterval(nukeId);
});

// console.log("sum", sum);

// function foo(a, b, ...args) {
//   console.log(a, b, args);
// }

// foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
