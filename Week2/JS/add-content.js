var price =[10,5,1];
var products = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var total = 0;

//calculate the total price below
var productList= document.getElementById("productList");
productList.innerHTML += "<li>" +products[0] +": $" + price[0] +"</li>"
productList.innerHTML += "<li>" +products[1] +": $" + price[1] +"</li>"
productList.innerHTML += "<li>" +products[2] +": $" + price[2] +"</li>"

//Display purchase product to the screen
total = price[0];

//document.write("Total is" + total);
var totalPriceEle= document.getElementById("totalPrice");
totalPriceEle.textContent = "$"+ total;
