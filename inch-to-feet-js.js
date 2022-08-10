//converting inches to feet

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}
var myInches = 96;
var result = inchToFeet(myInches);
console.log('myInches result is: ', result);

var dadaInches = 120;
var result = inchToFeet(dadaInches);
console.log('dadaInches result is: ', result);

var dadiInches = 132;
var result = inchToFeet(dadiInches);
console.log('dadiInches result is: ', result);

var naniInches = 144;
var result = inchToFeet(naniInches);
console.log('naniInches result is: ', result);

//converting miles to kilometer
function mileToKm(miles){
    var km = miles / 1.60934;
    return km;
}
var marathon = mileToKm(44.5);
console.log('marathon in km: ', marathon);

var distance = mileToKm(80);
console.log('The distance is: ', distance);









