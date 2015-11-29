var price =[10, 5, 1];
var products = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var total = 0;

//calculate the total price below
var productList= document.getElementById("productList");
productList.innerHTML += "<li>" +products[0] +": $" + price[0] +"</li>"
productList.innerHTML += "<li>" +products[1] +": $" + price[1] +"</li>"
productList.innerHTML += "<li>" +products[2] +": $" + price[2] +"</li>"

//Display purchase product to the screen
// total = price[0] + price[1] + price[2];
total = price.reduce(function(prev, curr) { return prev + curr });
total = total - (total * 0.2);

//document.write("Total is" + total);
var totalPriceEle= document.getElementById("totalPrice");
totalPriceEle.textContent = "$"+ total;

var hourOfTheDay = new Date().getHours();
if (hourOfTheDay < 12 || hourOfTheDay === 24){
	document.getElementById("greeting").innerHTML = "Good Morning"
}
else if (hourOfTheDay >= 12 && hourOfTheDay < 17){
	document.getElementById("greeting").innerHTML = "Good Afternoon"
}
else {
	document.getElementById("greeting").innerHTML = "Good Evening"
}