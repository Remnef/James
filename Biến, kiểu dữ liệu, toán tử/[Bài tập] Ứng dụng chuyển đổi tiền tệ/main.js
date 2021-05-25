let fromCurrency = parseInt(document.getElementById('fromCurrency').value);
let toCurrency = parseInt(document.getElementById('toCurrency').value);
let amount = parseInt(document.getElementById('amount').value); 
let result = document.getElementById('result');
function convert(){
    amount = parseInt(document.getElementById('amount').value);
    fromCurrency = parseInt(document.getElementById('fromCurrency').value);
    toCurrency = parseInt(document.getElementById('toCurrency').value);
    result.value = amount*fromCurrency/toCurrency;
}
let count = 0;
while (count < 5) { count++; }
console.log(count);