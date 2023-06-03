class Bank {
    constructor () {
        this.balance=0
    }

    get_balance(){
        return this.balance
    }

    deposite(deposite_amount){
        this.balance+=deposite_amount
    }

    withdraw(withdraw_amount){

        this.balance>=withdraw_amount ? this.balance-=withdraw_amount : console.log(`you cannot withdraw the amount as your current balance : ${this.balance} is less than the amount you are trying to withdraw : ${withdraw_amount}`)
    }
}

// b1=new Bank()
// console.log(b1.get_balance())
// b1.deposite(100)
// console.log(b1.get_balance())
// b1.withdraw(20)
// console.log(b1.get_balance())

b2=new Bank()
console.log(b2.get_balance())
// b2.deposite(100)
// b2.deposite(100)
// b2.deposite(100) 
b2.withdraw(200)