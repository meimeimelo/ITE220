var price;
var quanlity;
var total;

price = 5;
quanlity = 14;
total = price * quanlity;

//document.write("Total is" + total);
var totalPriceEle= document.getElementById("totalPrice");
totalPriceEle.textContent = "$"+ total;
