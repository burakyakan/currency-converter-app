const baseCurrency = document.getElementById("base");
const quoteCurrency = document.getElementById("quote");
const baseAmount = document.getElementById("base-amount");
const quoteAmount = document.getElementById("quote-amount");


async function getCurrencyData(baseCurrency, quoteCurrency) {
    try {
        const currencyUrl = ``;
        const currencyResponse = await fetch(currencyUrl);
        const currencyData = await currencyResponse.json();
        

    }
    catch (error) {
        console.log("An error occured!", error);
    }
    
}