// Create a function that will be called when the user clicks on the button element you added to your HTML.
calculateButton = document.querySelector('#calculateBtn');
var mainContent = document.getElementById('mainFieldset');

calculateButton.onclick = function calculateMortgage() {
// This function should grab the values entered by the user from the input elements and the select element and then calculate the monthly payment.

//Grab Loan Balance value
var loanBalaceInput = parseInt(document.getElementById('loanBalance').value);

//Grab Interest Rate value
var interestRate = parseFloat(document.getElementById('interestRate').value);

//Grab Loan Term
var loanTerm = parseInt(document.getElementById('loanTerm').value);

//Grab Period
var period = parseInt(document.getElementById('period').value);

// // monthly interest rate       
var  monthlyInterestRate = (interestRate / 100) / period;          

// // number of payments
var numberOfPayments = loanTerm * period;

// // compounded interest rate
var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments); 

// // interest quotient
var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

//final calculation
var monthlyPayment = loanBalaceInput * interestQuotient;
var monthlyPaymentFixed = monthlyPayment.toFixed(2);

//create p element and append it to document
output = document.createElement('p')
output.innerText = "Your monthly mortgage payment is $" + monthlyPaymentFixed + " dollars.";
output.className = 'lead col-md-4 col-md-offset-4';
mainContent.appendChild(output);
};

//Reviewed and approved by CM


