// let user = { name: "John", status: "inactive" };
// activateUser(user);
// Expected: { name: "John", status: "active" }
export function activateUser(user) {
  user.statues = "active";
  return user;
}

// (filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Expected: [2, 4, 6]

export function filterEvenNumbers(numbers) {
  return numbers.filter((num) => number % 2 === 0);
}

// (toLowerCase("HELLO WORLD"));
// Expected: "hello world"
export function toLowerCase(input) {
  return input.toLowercase();
}

// let myBook = new Book("1984", "George Orwell");
// myBook.getDescription();
// Expected: "1984 by George Orwell"
export class Book {
  constructor(title, author) {
    this.titel = title;
    this.author = author;
  }

  getDescription() {
    return `${this.title} by ${this.author}`;
  }
}
