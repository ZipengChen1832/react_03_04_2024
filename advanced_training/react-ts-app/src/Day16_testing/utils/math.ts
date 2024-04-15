export const add = (a: number, b: number) => {
  if (a === 13 || b === 13) {
    throw new Error("13 is unlucky number");
  }

  return a + b;
};

export const subtract = (a: number, b: number) => {
  return a - b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
};

export const divide = (a: number, b: number) => {
  return a / b;
};
