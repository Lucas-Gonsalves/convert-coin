// Quotation coins of the day
const USD = 5.33
const EUR = 6.05
const GBP = 7.06


// Obtaining html elements
const form = document.querySelector('form')
const amountInput = document.getElementById('amount')
const currencySelector = document.getElementById('currency')
const footer = document.querySelector('main footer')
const descriptionSpan = document.getElementById('description')
const resultH1 = document.getElementById('result')

// Manipulationg the input amount to receive only numbers
amountInput.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amountInput.value = amountInput.value.replace(hasCharactersRegex, '');
})

// Format the coin to Real brazilian
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

// Function to convert the coin
function convertCurrency(amount, price, symbol) {
  try {
    // Displaying the quotation of the coin selected
    descriptionSpan.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calculate the total
    let total = amount * price

    if(isNaN(total)) {
      return alert('Please, enter a value corresponding to convert.')
    }

    total = formatCurrencyBRL(total).replace('R$', '')

    // Displaying the total result
    resultH1.textContent = `${total} Reais`

    // Applies the class that displays the footer to show the result
    footer.classList.add('show-result')
  
  } catch (error) {
    // Remove the class that displays the footer oculting he
    footer.classList.remove('show-result')

    console.log(error)
    alert('We were unable to convert. Please try again later.')
  }
}

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