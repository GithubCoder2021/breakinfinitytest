var number = new Decimal(10);
var cost = new Decimal(10);
var mulPerSec = new Decimal(10);

setInterval(function() {
  number = number.mul(mulPerSec);
	
  document.getElementById("number").innerText = number;
}, 100);

