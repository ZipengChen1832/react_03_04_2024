import {
  findBuildingsByZipCode,
  findPeopleByMiddleName,
  toggleUserNotification,
} from "../problems/objectProperty";

describe("objectProperty", () => {
  describe("findPeopleByMiddleName", () => {
    it("should find people by middle name", () => {
      const people = [
        {
          firstName: "John",
          middleName: "Doe",
          lastName: "Smith",
        },
        {
          firstName: "Jane",
          middleName: null,
          lastName: "Armstrong",
        },
        {
          firstName: "John",
          middleName: "Doe",
          lastName: "Jones",
        },
      ];
      expect(findPeopleByMiddleName(people, "Doe")).toEqual([
        {
          firstName: "John",
          middleName: "Doe",
          lastName: "Smith",
        },
        {
          firstName: "John",
          middleName: "Doe",
          lastName: "Jones",
        },
      ]);
    });
  });

  describe("findBuildingsByZipCode", () => {
    it("should find buildings by zip code", () => {
      const buildings = [
        {
          name: "Building A",
          address: {
            street: "123 Maple St",
            city: "Springfield",
            state: "IL",
            zipCode: "12345",
          },
        },
        {
          name: "Building B",
          address: null,
        },
        {
          name: "Building C",
          address: {
            street: "789 Oak St",
            city: "Springfield",
            state: "IL",
            zipCode: "12345",
          },
        },
      ];
      expect(findBuildingsByZipCode(buildings, "12345")).toEqual([
        {
          name: "Building A",
          address: {
            street: "123 Maple St",
            city: "Springfield",
            state: "IL",
            zipCode: "12345",
          },
        },
        {
          name: "Building C",
          address: {
            street: "789 Oak St",
            city: "Springfield",
            state: "IL",
            zipCode: "12345",
          },
        },
      ]);
    });
  });

  describe("toggleUserNotification", () => {
    it("should not throw any error", () => {
      expect(() => toggleUserNotification("johnsmith@gmail.com")).not.toThrow();
      expect(() =>
        toggleUserNotification("emailnotexist@gmail.com")
      ).not.toThrow();
    });
  });
});
