/*
//VARIABLES ACQUISITION
let km = prompt("How many kilometers will your run be?");
let customerAge = prompt("Please insert your age:");

    //VARIABLES CONVERSION IN NUMBERS
    km = parseFloat(km);
    customerAge = parseInt(customerAge);

//VARIABLES DECLARATION
let ticketPrice = km*0.21;
let discount20 = 80/100;
let discount40 = 60/100;

//DISCOUNT APPLICATION
if (customerAge<18) {
    ticketPrice = ticketPrice*discount20;
    
} else if (customerAge>65){
    ticketPrice = ticketPrice*discount40;
}

//PRICE SCREEN PRINT 
document.getElementById("display").innerHTML= "Your ticket costs:" +ticketPrice.toFixed(2)+"&euro;"; */
