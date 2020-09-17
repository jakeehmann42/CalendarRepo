// Write current day to page

let currentday = moment().format("LLLL");
$("#currentDay").text(currentday);


//Make an array of business hours in order to grab
let businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"] 

// Get the current hour
let currentHour = parseInt(moment().format("H"));
console.log(currentHour);


// Test time condition to change color of the div
for (i = 9; i <= 17; i++) {

    //create row div inside loop, and add attrs and write to DOM (remember to append)
    let rowDiv = $("<div>");
    
    rowDiv.addClass("row time-block");

    $(".container").append(rowDiv);




    //Create time div inside loop, add attrs and write to DOM (append)
    let timeDiv = $("<div>");
    
    timeDiv.addClass("hour col");

    
    let hour = $("<h3>");
    
    hour.text(businessHours[i-9]);
    
    timeDiv.append(hour);


}


// Create content div and add attributes and write to the row div


// Create button div and create attributes and write to the Row Div


// Create a function to change color (based on time) in an IF statement.


// Event listener to unlock time slots


// Test condition that will allow text inputs


// Event listener for clicking the general buttons