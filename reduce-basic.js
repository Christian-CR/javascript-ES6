
// sumar todos los valores

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

// utilizando foor loop

var totalAmount = 0;
for (var i=0; i<orders.lenght; i++){
  totalAmount += orders[i].amount
}

console.log(totalAmount) 


// Utilizando reduce

var totalAmount = orders
.reduce((sum, order) => sum + order.amount, 0)
