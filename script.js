const baseCurrency = document.getElementById("base");
const quoteCurrency = document.getElementById("quote");
const baseAmount = document.getElementById("base-amount");
const quoteAmount = document.getElementById("quote-amount");
const convertButton = document.getElementById("convert-button");

const decimalSlider = document.getElementById("decimal-slider");
const decimalSliderOutput = document.getElementById("decimal-slider-output");

const swapButton = document.getElementById("swap-button");
const dateAndHour = document.getElementById("date-and-hour");

const lang = document.getElementById("lang");
const darkModeButton = document.getElementById("dark-mode-btn");

let langCode = 'tr-TR';
let formattedTime = '';

const translations = {
    tr: {
        title: "Döviz Çevirici",
        baseLabel: "Kaynak Para Birimi",
        quoteLabel: "Hedef Para Birimi",
        baseAmountLabel: "Kaynak Tutar",
        quoteAmountLabel: "Hedef Tutar",
        convertBtn: "Çevir",
        swapBtn: "Değiştir",
        sliderLabel: "Gösterilecek Ondalık Basamak Sayısı",
        darkModeBtn: "Koyu Mod",
        sourceCodeLink: "Kaynak Kodu",
        disclaimer: "Sorumluluk Reddi Beyanı",
        currencyDataSource: "Kur Verisi Kaynağı:",
        try: "Türk Lirası (TRY)",
        usd: "Amerikan Doları (USD)",
        eur: "Euro (EUR)",
        gbp: "İngiliz Sterlini (GBP)",
        chf: "İsviçre Frangı (CHF)",
        jpy: "Japon Yeni (JPY)",
        cad: "Kanada Doları (CAD)",
        aud: "Avustralya Doları (AUD)",
        cny: "Çin Yuanı (CNY)",
        hkd: "Hong Kong Doları (HKD)",
        sgd: "Singapur Doları (SGD)",
        inr: "Hindistan Rupisi (INR)",
        mxn: "Meksika Pesosu (MXN)",
        brl: "Brezilya Reali (BRL)",
        sar: "Suudi Arabistan Riyali (SAR)"
    },
    en: {
        title: "Currency Converter",
        baseLabel: "Base Currency",
        quoteLabel: "Convert Currency",
        baseAmountLabel: "Base Currency Amount",
        quoteAmountLabel: "Quote Currency Amount",
        convertBtn: "Convert",
        swapBtn: "Swap",
        sliderLabel: "Decimal Count to be Shown",
        darkModeBtn: "Dark Mode",
        sourceCodeLink: "Source Code",
        disclaimer: "Disclaimer",
        currencyDataSource: "Currency Data Source:",
        try: "Turkish Lira (TRY)",
        usd: "United States Dollar (USD)",
        eur: "Euro (EUR)",
        gbp: "Great Britain Pound (GBP)",
        chf: "Swiss Franc (CHF)",
        jpy: "Japanese Yen (JPY)",
        cad: "Canadian Dollar (CAD)",
        aud: "Australian Dollar (AUD)",
        cny: "Chinese Yuan (CNY)",
        hkd: "Hong Kong Dollar (HKD)",
        sgd: "Singapore Dollar (SGD)",
        inr: "Indian Rupee (INR)",
        mxn: "Mexican Peso (MXN)",
        brl: "Brazilian Real (BRL)",
        sar: "Saudi Arabian Riyal (SAR)"
    },
    es: {
        title: "Conversor de Monedas",
        baseLabel: "Moneda Base",
        quoteLabel: "Convertir Moneda",
        baseAmountLabel: "Cantidad de Moneda Base",
        quoteAmountLabel: "Cantidad de Moneda de Destino",
        convertBtn: "Convertir",
        swapBtn: "Intercambiar",
        sliderLabel: "Dígitos Decimales a Mostrar",
        darkModeBtn: "Modo Oscuro",
        sourceCodeLink: "Código Fuente",
        disclaimer: "Descargo de Responsibilidad",
        currencyDataSource: "Fuente de Datos de Divisas:",
        try: "Lira turca (TRY)",
        usd: "Dólar estadounidense (USD)",
        eur: "Euro (EUR)",
        gbp: "Libra esterlina (GBP)",
        chf: "Franco suizo (CHF)",
        jpy: "Yen japonés (JPY)",
        cad: "Dólar canadiense (CAD)",
        aud: "Dólar australiano (AUD)",
        cny: "Yuan chino (CNY)",
        hkd: "Dólar de Hong Kong (HKD)",
        sgd: "Dólar de Singapur (SGD)",
        inr: "Rupia india (INR)",
        mxn: "Peso mexicano (MXN)",
        brl: "Real brasileño (BRL)",
        sar: "Riyal saudí (SAR)"
    },
    fr: {
        title: "Convertisseur de Devises",
        baseLabel: "Monnaie de Base",
        quoteLabel: "Convertir en",
        baseAmountLabel: "Montant de la Monnaie de Base",
        quoteAmountLabel: "Montant de la Monnaie Convertie",
        convertBtn: "Convertir",
        swapBtn: "Inverser",
        sliderLabel: "Nombre de Décimales à Afficher",
        darkModeBtn: "Mode Sombre",
        sourceCodeLink: "Code Source",
        disclaimer: "Avertissement",
        currencyDataSource: "Source des Données de Devises :",
        try: "Livre Turque (TRY)",
        usd: "Dollar des États-Unis (USD)",
        eur: "Euro (EUR)",
        gbp: "Livre Sterling (GBP)",
        chf: "Franc Suisses (CHF)",
        jpy: "Yen Japonais (JPY)",
        cad: "Dollar Canadien (CAD)",
        aud: "Dollar Australien (AUD)"
    },
    de: {
        title: "Währungsrechner",
        baseLabel: "Basiskährung",
        quoteLabel: "Zielwährung",
        baseAmountLabel: "Betrag der Basiswährung",
        quoteAmountLabel: "Betrag der Zielwährung",
        convertBtn: "Umrechnen",
        swapBtn: "Tauschen",
        sliderLabel: "Anzuzeigende Dezimalstellen",
        darkModeBtn: "Dunkelmodus",
        sourceCodeLink: "Quellcode",
        disclaimer: "Haftungsausschluss",
        currencyDataSource: "Währungsdatenquelle:",
        try: "Türkische Lira (TRY)",
        usd: "US-Dollar (USD)",
        eur: "Euro (EUR)",
        gbp: "Britisches Pfund (GBP)",
        chf: "Schweizer Franken (CHF)",
        jpy: "Japanischer Yen (JPY)",
        cad: "Kanadischer Dollar (CAD)",
        aud: "Australischer Dollar (AUD)"
    },
    it: {
        title: "Convertitore di Valuta",
        baseLabel: "Valuta Base",
        quoteLabel: "Converti Valuta",
        baseAmountLabel: "Importo Valuta Base",
        quoteAmountLabel: "Importo Valuta di Conversione",
        convertBtn: "Converti",
        swapBtn: "Inverti",
        sliderLabel: "Numero di Decimali da Mostrare",
        darkModeBtn: "Modalità Scura",
        sourceCodeLink: "Codice Sorgente",
        disclaimer: "Avvertenza",
        currencyDataSource: "Fonte Dati Valuta:",
        try: "Lira Turca (TRY)",
        usd: "Dollaro Statunitense (USD)",
        eur: "Euro (EUR)",
        gbp: "Sterlina Britannica (GBP)",
        chf: "Franco Svizzero (CHF)",
        jpy: "Yen Giapponese (JPY)",
        cad: "Dollaro Canadese (CAD)",
        aud: "Dollaro Australiano (AUD)"
    },
    pt: {
        title: "Conversor de Moedas",
        baseLabel: "Moeda Base",
        quoteLabel: "Converter para",
        baseAmountLabel: "Valor da Moeda Base",
        quoteAmountLabel: "Valor da Moeda Convertida",
        convertBtn: "Converter",
        swapBtn: "Inverter",
        sliderLabel: "Número de Decimais a Exibir",
        darkModeBtn: "Modo Escuro",
        sourceCodeLink: "Código-Fonte",
        disclaimer: "Aviso Legal",
        currencyDataSource: "Fonte dos Dados de Moeda:",
        try: "Lira Turca (TRY)",
        usd: "Dólar dos Estados Unidos (USD)",
        eur: "Euro (EUR)",
        gbp: "Libra Esterlina (GBP)",
        chf: "Franco Suíço (CHF)",
        jpy: "Iene Japonês (JPY)",
        cad: "Dólar Canadense (CAD)",
        aud: "Dólar Australiano (AUD)"
    },
    nl: {
        title: "Valutacalculator",
        baseLabel: "Basisvaluta",
        quoteLabel: "Doelvaluta",
        baseAmountLabel: "Bedrag in Basisvaluta",
        quoteAmountLabel: "Bedrag in Doelvaluta",
        convertBtn: "Omrekenen",
        swapBtn: "Wisselen",
        sliderLabel: "Aantal te tonen decimalen",
        darkModeBtn: "Donkere modus",
        sourceCodeLink: "Broncode",
        disclaimer: "Disclaimer",
        currencyDataSource: "Valutagegevensbron:",
        try: "Turkse lira (TRY)",
        usd: "Amerikaanse dollar (USD)",
        eur: "Euro (EUR)",
        gbp: "Brits pond (GBP)",
        chf: "Zwitserse frank (CHF)",
        jpy: "Japanse yen (JPY)",
        cad: "Canadese dollar (CAD)",
        aud: "Australische dollar (AUD)"
    },
    pl: {
        title: "Przelicznik Walut",
        baseLabel: "Waluta Bazowa",
        quoteLabel: "Waluta Docelowa",
        baseAmountLabel: "Kwota Waluty Bazowej",
        quoteAmountLabel: "Kwota Waluty Docelowej",
        convertBtn: "Przelicz",
        swapBtn: "Zamień",
        sliderLabel: "Liczba miejsc po przecinku",
        darkModeBtn: "Tryb Ciemny",
        sourceCodeLink: "Kod Źródłowy",
        disclaimer: "Zastrzeżenie",
        currencyDataSource: "Źródło Danych o Walutach:",
        try: "Lira turecka (TRY)",
        usd: "Dolar amerykański (USD)",
        eur: "Euro (EUR)",
        gbp: "Funt szterling (GBP)",
        chf: "Frank szwajcarski (CHF)",
        jpy: "Jen japoński (JPY)",
        cad: "Dolar kanadyjski (CAD)",
        aud: "Dolar australijski (AUD)"
    },
    ru: {
        title: "Конвертер валют",
        baseLabel: "Базовая валюта",
        quoteLabel: "Целевая валюта",
        baseAmountLabel: "Сумма в базовой валюте",
        quoteAmountLabel: "Сумма в целевой валюте",
        convertBtn: "Конвертировать",
        swapBtn: "Поменять местами",
        sliderLabel: "Количество знаков после запятой",
        darkModeBtn: "Темный режим",
        sourceCodeLink: "Исходный код",
        disclaimer: "Отказ от ответственности",
        currencyDataSource: "Источник данных о валютах:",
        try: "Турецкая лира (TRY)",
        usd: "Доллар США (USD)",
        eur: "Евро (EUR)",
        gbp: "Британский фунт стерлингов (GBP)",
        chf: "Швейцарский франк (CHF)",
        jpy: "Японская иена (JPY)",
        cad: "Канадский доллар (CAD)",
        aud: "Австралийский доллар (AUD)"
    },
    az: {
        title: "Valyuta Konvertoru",
        baseLabel: "Əsas Valyuta",
        quoteLabel: "Çevriləcək Valyuta",
        baseAmountLabel: "Əsas Valyuta Məbləği",
        quoteAmountLabel: "Çevrilən Valyuta Məbləği",
        convertBtn: "Çevir",
        swapBtn: "Dəyişdir",
        sliderLabel: "Göstəriləcək Onluq Rəqəmlərin Sayı",
        darkModeBtn: "Qaranlıq Rejim",
        sourceCodeLink: "Mənbə Kodu",
        disclaimer: "İmtina (Disclaimer)",
        currencyDataSource: "Valyuta Məlumat Mənbəyi:",
        try: "Türkiyə Lirəsi (TRY)",
        usd: "Amerika Birləşmiş Ştatları Dolları (USD)",
        eur: "Avro (EUR)",
        gbp: "Britaniya Funt Sterlinqi (GBP)",
        chf: "İsveçrə Frankı (CHF)",
        jpy: "Yapon Yeni (JPY)",
        cad: "Kanada Dolları (CAD)",
        aud: "Avstraliya Dolları (AUD)"
    }
};

function updateSiteLanguage() {
    const selectedLang = lang.value; // "tr", "en" veya "es" gelir
    const text = translations[selectedLang]; // Seçilen dilin sözlüğünü al

    // DOM elemanlarının metinlerini sözlüğe göre tek tek değiştiriyoruz
    document.getElementById("main-title").textContent = text.title;
    document.getElementById("base-label").textContent = text.baseLabel;
    document.getElementById("quote-label").textContent = text.quoteLabel;
    document.getElementById("base-amount-label").textContent = text.baseAmountLabel;
    document.getElementById("quote-amount-label").textContent = text.quoteAmountLabel;
    document.getElementById("convert-button").value = text.convertBtn; // Input olduğu için .value değiştirdik
    document.getElementById("swap-button").textContent = text.swapBtn;
    document.getElementById("decimal-slider-label").textContent = text.sliderLabel;
    document.getElementById("dark-mode-btn").textContent = text.darkModeBtn;
    document.getElementById("source-code-link").textContent = text.sourceCodeLink;
    document.getElementById("disclaimer").textContent = text.disclaimer;
    document.getElementById("currency-data-source").textContent = text.currencyDataSource;

    const allCurrencyOptions = document.querySelectorAll("#base option, #quote option");
    allCurrencyOptions.forEach(option => {
    option.textContent = text[option.value];
});
}





function changeDateLanguage(){
    if (lang.value === "tr") {
        langCode = 'tr-TR'
    } else if (lang.value === "en") {
        langCode = 'en-US'
    } else if (lang.value === "es") {
        langCode = 'es-ES'
    } else if (lang.value === "fr") {
        langCode = 'fr-FR'
    } else if (lang.value === "de") {
        langCode = 'de-DE'
    } else if (lang.value === "it") {
        langCode = 'it-IT'
    } else if (lang.value === "pt") {
        langCode = 'pt-PT'
    } else if (lang.value === "nl") {
        langCode = 'nl-NL'
    } else if (lang.value === "pl") {
        langCode = 'pl-PL'
    } else if (lang.value === "ru") {
        langCode = 'ru-RU'
    } else if (lang.value === "az") {
        langCode = 'az-AZ'
    }
        

    const now = new Date();
    formattedTime = now.toLocaleString(`${langCode}`, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });
}



swapButton.addEventListener("click", (e) => {
    e.preventDefault();
    let x = baseCurrency.value;
    let y = quoteCurrency.value;
    quoteCurrency.value = x;
    baseCurrency.value = y;
    quoteAmount.value = null;
});

decimalSlider.addEventListener("input", (e) => {
    e.preventDefault();
    decimalSliderOutput.value = decimalSlider.value;
});

convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Converting...");
    document.getElementById("quote-amount").value = null;
    getCurrencyData(baseCurrency.value, quoteCurrency.value, baseAmount.value, quoteAmount.value);
    changeDateLanguage();
    dateAndHour.innerHTML = formattedTime;
});

lang.addEventListener("change", () => {
    updateSiteLanguage();
    changeDateLanguage();
    dateAndHour.innerHTML = formattedTime;
});

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

