//console.log('hello world')
const sum = (a,b) => {
   return a + b
}

console.log(sum(7,3))

//module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar *106.58;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen *0.006;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar }









