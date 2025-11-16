class BankAccount {
  protected accountId: number;
  accountName: string;
  balance: number;

  constructor(accountId: number, accountName: string, balance: number) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.balance = balance;
  }

  //   addBalance(newBalance: number) {
  //     this.balance = this.balance + newBalance;
  //   }
  set setBalance(newBalance: number) {
    this.balance = this.balance + newBalance;
  }

  get getBalance() {
    return this.balance;
  }
}

const sorifulBank = new BankAccount(2222, "sofiful hasan", 4000);
// sorifulBank.addBalance(100);
sorifulBank.setBalance = 100;
console.log("this is your account balance", sorifulBank.getBalance);
sorifulBank.accountName = "jahidul";
console.log(sorifulBank);
