"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Jacob Gordon
   Date:   02/28/19
   
   Filename: tc_cart.js
	
*/
// Sets the initial value of the order to 0
var orderTotal = 0;
// Sets up the initial HTML code to set up the table for the cart
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// Creates a for loop, where i is the array that will be used throughout the code. The array goes up once every loop until the array index is 3, then it stops
for (var i = 0; i <= 3; i++) {
    // Sets up the item array to be pulled in to use images for each table cell
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
    // Creates 3 data cells, one for the 3 different arrays, each loop a new data cell will be made with the corresponding array
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    // The item cost of an item is the price of the item of the corresponding index of the array times the corresponding index of the quantity
    var itemCost = itemPrice[i] * itemQty[i];
    // Creates a data cell where how much an item cost will go
    cartHTML += "<td>$" + itemCost + "</td></tr>"
    // The order total is the cost of the items plus the order total
    orderTotal = orderTotal + itemCost;

}
// Allows
cartHTML += "<tr> <td colspan = '4'> Subtotal </td> <td>$" +
    orderTotal + "</td> </tr> </table>";

document.getElementById("cart").innerHTML = cartHTML;