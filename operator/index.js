var mealCost = 10.25;
var tipPercent = 17;
var taxPercent = 5;

var totalCost = mealCost + mealCost * (tipPercent / 100) + mealCost * (taxPercent / 100);
var round = Math.round(totalCost);
var str = 'The total meal cost is ' + round + ' dollars.';
console.log(str);
