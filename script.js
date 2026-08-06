const baseCurrency = document.getElementById("base");
const quoteCurrency = document.getElementById("quote");
const baseAmount = document.getElementById("base-amount");
const quoteAmount = document.getElementById("quote-amount");
const convertButton = document.getElementById("convert-button");

const decimalSlider = document.getElementById("decimal-slider");
const decimalSliderOutput = document.getElementById("decimal-slider-output");

decimalSlider.addEventListener("input", (e) => {
    e.preventDefault();
    decimalSliderOutput.value = decimalSlider.value;
})

convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Converting...");
    document.getElementById("quote-amount").value = null;
    getCurrencyData(baseCurrency.value, quoteCurrency.value, baseAmount.value, quoteAmount.value);
})


async function getCurrencyData(baseCurrency, quoteCurrency, baseAmount, quoteAmount, decimalCount) {
    try {
        const currencyUrl = `https://api.frankfurter.dev/v2/rate/${baseCurrency}/${quoteCurrency}`;
        const currencyResponse = await fetch(currencyUrl);
        const currencyData = await currencyResponse.json();


        const {rate} = currencyData;

        quoteAmount = +(baseAmount * rate).toFixed(Number(decimalSliderOutput.value));

        console.log(`Base Currency: ${baseCurrency}, Base Amount: ${baseAmount}, Quote Currency: ${quoteCurrency}, Quote Amount: ${quoteAmount}, Exchange Rate: ${rate}`);

        document.getElementById("quote-amount").value = quoteAmount;

    }
    catch (error) {
        console.log("An error occured!", error);
    }
    
}

// favori donüşümler ekleme gelmeli, örneğin altta bi buton çıkmalı ona basınca direkt o dönüşüm ayarlanmalı