let count = 0
function generateTransactionId() {
    count++
    return Symbol("TRANSACTION_ID_"+ count)
}

const transaction1 = generateTransactionId(); 
console.log(transaction1); 

const transaction2 = generateTransactionId(); 
console.log(transaction2); 

const transaction3 = generateTransactionId(); 
console.log(transaction3); 