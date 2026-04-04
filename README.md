# Convert Coin

A simple currency converter built with HTML, CSS, and vanilla JavaScript. The app lets users enter an amount, choose a currency, and convert it to Brazilian Real (`BRL`).

## Features

- Convert `USD`, `EUR`, and `GBP` to `BRL`
- Clean and responsive single-page interface
- Input sanitization for numeric values only
- Result formatting using Brazilian currency standards
- No dependencies or build step required

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- scripts.js
`-- img/
```

## How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.

You can also use an extension like Live Server in VS Code if you prefer a local development server.

## How It Works

- The user enters an amount.
- The user selects a source currency.
- JavaScript applies a predefined exchange rate.
- The converted value is displayed in Brazilian Real.

## Exchange Rates

The current version uses fixed exchange rates defined directly in `scripts.js`:

- `USD = 5.33`
- `EUR = 6.05`
- `GBP = 7.06`

If you want real-time conversion, you can replace these static values with data from an exchange rate API.

## Notes

- The interface content is currently mixed with Portuguese labels and messages.
- The amount field only accepts digits in the current implementation.

## Future Improvements

- Fetch live exchange rates from an API
- Support decimal values in the amount field
- Add more currencies
- Improve form validation and feedback messages

## License

This project is available for study and personal use.
