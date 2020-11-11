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

    hour.text(businessHours[i - 9]);

    timeDiv.append(hour);


    //CntentDiv(Append)
    let contentDiv = $("<div>");

    contentDiv.addClass("past");

    // Create if statements for time periods and add classes. ("past,present,future")
    if (i < currentHour) {
        contentDiv.addClass("past");
    }

    if (i === currentHour) {
        contentDiv.addClass("present");
    }

    if (i > currentHour) {
        contentDiv.addClass("future");
    }

    rowDiv.append(contentDiv);



    // Create button div and create attributes and write to the Row Div
    let buttonDiv = $("<div>");

    buttonDiv.addClass("saveBtn col");

    buttonDiv.append("<i class=\"far fa-save" + businessHours[i - 9] + "\"></i>");

    rowDiv.append(buttonDiv);


    // Create a function in an IF statement to change the color based on TIME


}



/// NEW PC CHANGES
// AS IN I DON'T REMEMBER ANYTHING I HAD GOING FOR ME IN THIS UNIT
//BASICALLY STARTED OVER






// remove old classes
$(this).removeClass("past");
$(this).removeClass("present");
$(this).removeClass("future");

let blockHour = parseInt($(this).attr("id").split("-")[1]);




function timeTextUpdater() {
    $("#today").text(moment().format("MM DD YYYY, h:mm"));
}


hourUpdater();
timeTextUpdater();
// Time Interval to see if it needs updated

let hourInterval = setInterval(hourUpdater, 60000);

let timeTextInterval = setInterval(timeTextUpdater, 1000);


// loading saved data

$("#nine .activity").val(localStorage.getItem("nine"));
$("#ten .activity").val(localStorage.getItem("ten"));
$("#eleven .activity").val(localStorage.getItem("eleven"));
$("#twelve .activity").val(localStorage.getItem("twelve"));
$("#one .activity").val(localStorage.getItem("one"));
$("#two .activity").val(localStorage.getItem("two"));
$("#three .activity").val(localStorage.getItem("three"));
$("#four .activity").val(localStorage.getItem("four"));
$("#five .activity").val(localStorage.getItem("five"));