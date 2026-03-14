// Quotation coins of the day
const USD = 5.33
const EUR = 6.05
const GBP = 7.06


// Obtaining html elements
const form = document.querySelector('form')
const footer = document.querySelector('main footer')
const amountInput = document.getElementById('amount')
const currencySelector = document.getElementById('currency')

// Manipulationg the input amount to receive only numbers
amountInput.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amountInput.value = amountInput.value.replace(hasCharactersRegex, '');
})

// Capturing submit event of the form 
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currencySelector.value) {
    case 'USD':
      convertCurrency(amountInput.value, USD, 'US$')
      break
   
    case 'EUR':
      convertCurrency(amountInput.value, EUR, '€')
      break
   
    case 'GBP':
      convertCurrency(amountInput.value, GBP, '£')
      break
  }
}

// Function to convert the coin
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}