var timeSlotsArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
var eventsArray = ["", "", "", "", "", "", "", "", ""]
var scheduleEl = $("#schedule")
var currentHour = moment().format("HH")

//Pull the events from local storage if present
if (localStorage.getItem("eventsArray")) {
    eventsArray = JSON.parse(localStorage.getItem("eventsArray"))
}

//Render the schedule
function renderSchedule() {
    //Making a schedule row for every element of timeSlotsArray
    for (var i = 0; i< 9; i++) {
        var newRow = $("<div>").addClass("schedulerow").attr("id", timeSlotsArray[i])


        //Adding column for the time, the event, and a save button (three divs)
        var timeDiv = $("<div>").addClass("time")
        timeDiv.text(timeSlotsArray[i])
        newRow.append(timeDiv)

        var eventDiv = $("<textarea>").addClass("event").attr("id", timeSlotsArray[i] + "event")
        eventDiv.text(eventsArray[i])
        newRow.append(eventDiv)

        //Color the different event divs
        if (timeArray[i] === currentHour) {
            eventDiv.css("background-color", "red")
        }
        else if ((timeArray.indexOf(currentHour) < i && (timeArray.includes(currentHour))) || (parseInt(currentHour) < 9)) {
            eventDiv.css("background-color", "green")
        }
        else {
            eventDiv.css("background-color", "gray")
        }

        var saveButton = $("<button>").addClass("save").attr("id", timeSlotsArray[i] + "save")
        saveButton.text("Save")
        newRow.append(saveButton)
        
        scheduleEl.append(newRow)
    }
}

//Initial page render
renderSchedule()

//Set up the save button function and event listener
function updateEvents() {
    if (event.target.getAttribute("class") === "save") {
        for (var i = 0; i< 9; i++) {
            eventsArray[i] = $("#" + timeSlotsArray[i] + "event").val()
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray))
        }
    }
}

scheduleEl.click(updateEvents)