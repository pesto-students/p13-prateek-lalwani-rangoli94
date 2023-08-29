

async function getExchangeRate(currencyCode) {
    const result = await fetch('https://api.exchangerate.host/latest')
    const roundedResult = result.json()
        .then((val) => isNaN(val.rates[currencyCode]) ? null :
            (Math.round(val.rates[currencyCode] * 10000) / 10000))
    return roundedResult
}

getExchangeRate('XP')
    .then((rate) => {
        console.log(rate);
    })
    .catch((error) => {
        console.error(error);
    });

