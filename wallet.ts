class Transaction{
    id: number;
    description: string;
    amount: number;

    constructor(id: number, descripton:string, amount:number){
        this.id = id;
        this.description = descripton;
        this.amount=amount;
    }
}

class Walletie{
    transactions: Transaction[] =[];
    isHidden: boolean;

    constructor(){
        this.transactions = [];
        this.isHidden = false;

    }
    addTransaction(id: number, description: string, amount: number): void{
        const transaction = new Transaction(id, description, amount);
        this.transactions.push(transaction);
    }
    removeTransaction(id: number): void{
        this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    }
    updateTransaction(id: number, description: string, amount: number): void{
        const index = this.transactions.findIndex (transaction => transaction.id === id);
        if(index !== -1){
            this.transactions[index].description = description;
            this.transactions[index].amount = amount;
        }else {
            console.log("No transaction found");
        }
    }

    showTransaction(): void {
        console.log("Transaction:");
        this.transactions.forEach(transaction =>{ 
            console.log(`ID: ${this.transaction.id}, Description: ${this.transaction.description}, Amount: ${this.transaction.amount}`);
        });
    }

    hideTransaction(): void{
        this.isHidden = true;
        console.log("Transaction are now Hidden");
    }

    unhideTransaction(): void{
        this.isHidden = false;
        console.log("Transaction Visible");
    }
}


//example of the transaction in usage

const wallet = new Wallet();
wallet.addTransaction(1, "Maa", -50);
wallet.addTransaction(2, "mii", 300);

wallet.showTransaction();

wallet.removeTransaction(2);

wallet.updateTransaction(3, "Moo", -200);

wallet.hideTransaction();

wallet.showTransaction();