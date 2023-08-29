function getExchangeRate(currencyCode) {
    const result = fetch('https://api.exchangerate.host/latest')

    return result
        .then((val) => val.json())
        .then(obj =>
            isNaN(obj.rates[currencyCode]) ?
                null :
                Math.round(obj.rates[currencyCode] * 10000) / 10000)
}

getExchangeRate('USD').then((rate) => {
    console.log(rate);
})
    .catch((error) => {
        console.error(error);
    });
