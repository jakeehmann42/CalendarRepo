let timecontainer = (".container-fluid");
let timeArray = ["9:00 a.m", "10:00 a.m", "11:00 a.m", "12:00 p.m", "1:00 p.m", "2:00 p.m", "3:00 p.m", "4:00 p.m", "5:00 p.m"];

// added array to be used in colorCode function
let timeNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let timeDisplay = $("#currentDay")

// Time display and append to currentDay <p> tag
let timeElement = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
timeDisplay.append(timeElement);

// THEN I am presented with timeblocks for standard business hours

// WHEN I click the save button for that timeblock

// THEN the text for that event is saved in local storage

// for loop for timeArray creating elements with jquery

for (let i = 0; i < timeArray.length; i++) {

    let time = timeArray[i];

    let timeSlot = $('<div>').addClass('row text-align-center');
    let hourElement = $("<div>").addClass("time-block col text-center");
    hourElement.text(time);
    timeSlot.append(hourElement);

    let inputElement = $("<div>").addClass("col-lg-6 col text-center color-block");
    // adding id attribute to loop through
    inputElement.attr("id", timeNumber[i]);
    let inputArea = $("<textarea>").addClass('textarea');
    $(this).attr('cols', 120);
    inputArea.attr('id', time);
    inputElement.append(inputArea);
    timeSlot.append(inputElement);

    let textInput = localStorage.getItem(time);
    inputArea.val(textInput);

    let saveElement = $("<div>").addClass('col-lg-3 col text-center');
    let saveBtn = $('<button>').addClass('saveBtn fa fa-save');
    saveBtn.attr("date-time", time);
    saveBtn.addClass('btn');
    saveElement.append(saveBtn);
    timeSlot.append(saveElement);
    $(".container-fluid").append(timeSlot);

    // localStorage
    $(".saveBtn").on("click", function () {
        localStorage.setItem(time, inputArea.val());
    })
};

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function colorCode() {
    let currentHour = moment().hours()
    // console.log(currentHour);

    $(".color-block").each(function () {
        let blockHour = parseInt($(this).attr('id'));
        // console.log(blockHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

}
// call function
colorCode();