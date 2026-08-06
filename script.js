const baseCurrency = document.getElementById("base");
const quoteCurrency = document.getElementById("quote");
const baseAmount = document.getElementById("base-amount");
const quoteAmount = document.getElementById("quote-amount");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Converting...");
    document.getElementById("quote-amount").value = null;
    getCurrencyData(baseCurrency.value, quoteCurrency.value, baseAmount.value, quoteAmount.value);
})


async function getCurrencyData(baseCurrency, quoteCurrency, baseAmount, quoteAmount) {
    try {
        const currencyUrl = `https://api.frankfurter.dev/v2/rate/${baseCurrency}/${quoteCurrency}`;
        const currencyResponse = await fetch(currencyUrl);
        const currencyData = await currencyResponse.json();


        const {rate} = currencyData;

        quoteAmount = baseAmount * rate;

        console.log(`Base Currency: ${baseCurrency}, Base Amount: ${baseAmount}, Quote Currency: ${quoteCurrency}, Quote Amount: ${quoteAmount}, Exchange Rate: ${rate}`);

        document.getElementById("quote-amount").value = quoteAmount;

    }
    catch (error) {
        console.log("An error occured!", error);
    }
    
}

// favori donüşümler ekleme gelmeli, örneğin altta bi buton çıkmalı ona basınca direkt o dönüşüm ayarlanmalı