/*
Task 3: Bank Account with Private Fields
Create a BankAccount class with the following:
A private field #balance that is initialized to 0.
A deposit(amount) method that adds to the balance.
A withdraw(amount) method that subtracts from the balance (only if sufficient funds are available).
A getBalance() method that returns the current balance.
Test the class by creating an instance, depositing and withdrawing money, and logging the balance after each operation.
*/

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            console.log("Sorry! you don't have sufficient balance.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const bankAccount1 = new BankAccount();
bankAccount1.deposit(5000);
bankAccount1.withdraw(4000);
console.log(bankAccount1.getBalance());