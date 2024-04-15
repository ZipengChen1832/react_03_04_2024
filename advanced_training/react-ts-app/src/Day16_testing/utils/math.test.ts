import { add, divide, multiply, subtract } from "./math";

describe("Math", () => {
  test("should be able to add two numbers", () => {
    expect(add(1, 1)).toBe(2);
    expect(add(-3, -3)).toBe(-6);
    expect(add(0, 0)).toBe(0);
  });

  test("should be able to subtract two numbers", () => {
    expect(subtract(1, 1)).toBe(0);
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(5, -3)).toBe(8);
    expect(subtract(5, -3)).toBe(8);
  });

  test("should be able to multiply two numbers", () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(5, -3)).toBe(-15);
  });

  test("should be able to divide two numbers", () => {
    expect(divide(1, 1)).toBe(1);
    expect(divide(2, 1)).toBe(2);
    expect(divide(5, -3)).toBe(-1.6666666666666667);
    expect(divide(5, 0)).toBe(Infinity);
  });

  test("should throw error if a wrong type is passed", () => {
    expect(() => {
      add(1, 1);
    }).not.toThrowError();

    expect(() => {
      add(13, 1);
    }).toThrowError();
  });

  test("misc", () => {
    expect(true).toBeTruthy();
    expect(false).not.toBeTruthy();
  });
});
