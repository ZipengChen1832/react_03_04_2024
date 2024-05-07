import { processTransactions, updateUserSettings } from "../problems/syntax";

describe("Syntax", () => {
  describe("processTransactions", () => {
    it("should process transactions and return the final balance", () => {
      let transactions = [
        { type: "deposit", amount: 100 },
        { type: "check_balance", amount: 0 },
        { type: "withdraw", amount: 50 },
        { type: "deposit", amount: 50 },
        { type: "check_balance", amount: 0 },
      ];

      let balance = processTransactions(transactions, 1000);
      expect(balance).toBe(1100);
    });
  });

  describe("updateUserSettings", () => {
    it("should update user settings and return true", () => {
      let user = {
        role: "admin",
        settings: {
          theme: "dark",
          notifications: true,
        },
      };

      let newSettings = {
        theme: "light",
        notifications: false,
      };

      let result = updateUserSettings(user, newSettings);
      expect(result).toBe(true);
    });

    it("should return false if the user does not have admin access", () => {
      let user = {
        role: "user",
        settings: {
          theme: "dark",
          notifications: true,
        },
      };

      let newSettings = {
        theme: "light",
        notifications: false,
      };

      let result = updateUserSettings(user, newSettings);
      expect(result).toBe(false);
    });
  });
});
