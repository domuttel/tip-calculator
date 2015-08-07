console.log("sanity check");

document.getElementById("button").addEventListener("click", function(){

var billAmt = document.getElementById('total-box')[0].value;
document.getElementById('tipHere').innerHTML = calculate(value);

var tipPercentage = document.getElementById('tip-box')[0].value;
document.getElementById('tipHere').innerHTML = calculate(value);


function calculate(value){
    var tipAmt = value * 1.20;
    return tipAmt.toFixed(2);
}
});