var number = new Decimal(10);
var cost = new Decimal(10);
var numPerSec = new Decimal(0);

setInterval(function() {
  number = number.add(numPerSec)
	
  document.getElementById("number").innerText = number;
}, 1000);
