const inputAmount = document.getElementById('amount')

// Manipulationg the input amoun to receive only numbers
inputAmount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  inputAmount.value = inputAmount.value.replace(hasCharactersRegex, '');
})
