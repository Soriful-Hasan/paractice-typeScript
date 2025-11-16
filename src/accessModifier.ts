class BankAccount {
  protected accountId: number;
  accountName: string;
  balance: number;

  constructor(accountId: number, accountName: string, balance: number) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.balance = balance;
  }
}

class subBankAccount extends BankAccount {
  getBalance() {
    this.accountId;
  }
}

const sorifulBank = new BankAccount(2222, "sofiful hasan", 4000);
sorifulBank.accountName = "jahidul";
console.log(sorifulBank);
