var number = new Decimal(10);
var cost = new Decimal(10);
var numPerSec = new Decimal(0);

setInterval(function() {
  number = Decimal.add(number, numPerSec)
	
  document.getElementById("number").innerText = number;
}, 1000);
