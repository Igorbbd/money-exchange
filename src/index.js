// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0)
    return {};
    let newObject = {
        H: null,
        Q: null,
        D: null,
        N: null,
        P: null
    }
    if (currency >= 50){
        newObject.H = Math.floor(currency / 50)
    } else {
        delete newObject.H
    };
    currency = currency % 50;
    if (currency >= 25){
        newObject.Q = Math.floor(currency / 25)
    } else {
        delete newObject.Q
    };
    currency = currency % 25;
    if (currency >= 10){
        newObject.D = Math.floor(currency / 10)
    } else {
        delete newObject.D
    };
    currency = currency % 10;
    if (currency >= 5){
        newObject.N = Math.floor(currency / 5)
    } else {
        delete newObject.N
    };
    currency = currency % 5;
    if (currency > 0){
        newObject.P = currency;
    } else {
        delete newObject.P
    }
    return newObject;
};