class Bank {
  bankId: number;
  bankNam: string;
  private balance: number;

  constructor(bankId: number, bankNam: string, balance: number) {
    this.bankId = bankId;
    this.bankNam = bankNam;
    this.balance = balance;
  }

  private addBalance(deposit: number) {
    this.balance = deposit + this.balance;
  }
  publicBalance(newDeposit: number) {
    this.addBalance(newDeposit);
  }
}

const deposit1 = new Bank(1111, "Sunali Bank Ltd.", 4000);
deposit1.publicBalance(4000);
console.log(deposit1);
