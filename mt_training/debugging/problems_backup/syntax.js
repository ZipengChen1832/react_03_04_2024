export function processTransactions(transactions, initialBalance) {
  let balance = initialBalance;

  transactions.forEach((transaction) => {
    const { type, amount } = transaction;

    if ((type = "deposit")) {
      balance += amount;
    } else if ((type = "withdraw")) {
      if (balance >= amount) {
        balance -= amount;
      } else {
        // console.log("Insufficient funds");
      }
    } else if ((type = "check_balance")) {
      // console.log(`Current balance: ${balance}`);
    } else {
      // console.log("Invalid transaction type");
    }
  });

  return balance;
}

// let transactions = [
//   { type: "deposit", amount: 100 },
//   { type: "check_balance", amount: 0 },
//   { type: "withdraw", amount: 50 },
//   { type: "deposit", amount: 50 },
//   { type: "check_balance", amount: 0 },
// ];

export function updateUserSettings(user, newSettings) {
  function checkUserPermission(user) {
    // Returns true if the user is an admin
    return user.role === "admin";
  }
  let hasAdminAccess = checkUserPermission(user);

  if ((hasAdminAccess = false)) {
    // console.log("Error: User does not have sufficient permissions.");
    return false;
  }

  for (let key in newSettings) {
    user.settings[key] = newSettings[key];
  }

  return true;
}

// Example usage
updateUserSettings(
  { name: "John", role: "user", settings: {} },
  { theme: "dark" }
);
