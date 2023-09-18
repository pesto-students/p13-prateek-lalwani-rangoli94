function getExchangeRate(currencyCode, callBack) {
    const result = fetch('https://api.exchangerate.host/latest')

    return result
        .then((val) => val.json())
        .then(obj => callBack(obj.rates[currencyCode]))

}

function roundedNumber(num) {
    if (isNaN(num)) {
        return null
    }
    return (Math.round(num * 10000) / 10000)
}

getExchangeRate('USD', roundedNumber).then((rate) => {
    console.log(rate);
})
    .catch((error) => {
        console.error(error);
    });