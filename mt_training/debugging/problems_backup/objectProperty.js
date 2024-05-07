// Example people
// const people = [
//   {
//     firstName: "John",
//     middleName: "Doe",
//     lastName: "Smith",
//   },
//   {
//     firstName: "Jane",
//     middleName: null,
//     lastName: "Armstrong",
//   },
//   {
//     firstName: "John",
//     middleName: "Doe",
//     lastName: "Jones",
//   },
// ];

export function findPeopleByMiddleName(people, middleName) {
  // middleName should be case insensitive
  return people.filter(
    (person) => person.middleName.toLowerCase() === middleName.toLowerCase()
  );
}

// Example buildings
// const buildings = [
//   {
//     name: "Building A",
//     address: {
//       street: "123 Maple St",
//       city: "Springfield",
//       state: "IL",
//       zipCode: "12345",
//     },
//   },
//   {
//     name: "Building B",
//     address: null,
//   },
//   {
//     name: "Building C",
//     address: {
//       street: "789 Oak St",
//       city: "Springfield",
//       state: "IL",
//       zipCode: "12345",
//     },
//   },
// ];

export function findBuildingsByZipCode(buildings, zipCode) {
  return buildings.filter((building) => building.address.zipCode === zipCode);
}

// function should not throw an error
export function toggleUserNotification(userEmail) {
  function getUserByEmail(email) {
    const users = [
      {
        email: "johnsmith@gmail.com",
        notification: true,
      },
      {
        email: "janesmith@gmail.com",
        notification: false,
      },
    ];
    return users.find((user) => user.email === email);
  }

  // user.notification should be toggled
  const user = getUserByEmail(userEmail);
  user.notification = !user.notification;

  return;
}
