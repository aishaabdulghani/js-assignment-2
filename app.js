var firstname = prompt ("Enetr Your First Name ")
var lastname = prompt ("Enetr Your Last Name ")
console.log(firstname)
console.log(lastname)
var city = prompt ("Enter City" , "Karachi")
console.log(city)

let hour = 14
if (hour >= 6 && hour < 12){
    console.log("Good Morning")
}else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}

var eat = prompt ("Choose Your Favourite Dish")

if(eat == "biryani"){
    console.log("Available")
}else if(eat == "burger"){
    console.log("Not Available")
}