import {
  activateUser,
  Book,
  toLowerCase,
  filterEvenNumbers,
} from "../problems/typo";
describe("Typo", () => {
  describe("activateUser", () => {
    it("should activate the user", () => {
      let user = { name: "John", status: "inactive" };
      expect(activateUser(user)).toEqual({ name: "John", status: "active" });
    });
  });

  describe("filterEvenNumbers", () => {
    it("should filter even numbers", () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });

  describe("toLowerCase", () => {
    it("should convert a string to lowercase", () => {
      expect(toLowerCase("HELLO WORLD")).toBe("hello world");
    });
  });

  describe("Book", () => {
    it("should create a book object", () => {
      let myBook = new Book("1984", "George Orwell");
      expect(myBook.getDescription()).toBe("1984 by George Orwell");
    });
  });
});
