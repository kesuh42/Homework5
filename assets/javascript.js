var timeSlotsArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var eventsArray = ["", "", "", "", "", "", "", "", ""]
var scheduleEl = $("#schedule")
var time = moment().format("LT")
var currentHour = time[0] + time[1] + time[6] +time[7]

if (localStorage.getItem("eventsArray")) {
    eventsArray = JSON.parse(localStorage.getItem("eventsArray"))
}


function renderSchedule() {
    for (var i = 0; i< 9; i++) {
        var newRow = $("<div>").addClass("schedulerow").attr("id", timeSlotsArray[i])

        var timeDiv = $("<div>").addClass("time")
        timeDiv.text(timeSlotsArray[i])
        newRow.append(timeDiv)

        var eventDiv = $("<textarea>").addClass("event").attr("id", timeSlotsArray[i] + "event")
        eventDiv.text(eventsArray[i])
        newRow.append(eventDiv)

        //Color the different event divs

        if (timeSlotsArray[i] === currentHour) {
            eventDiv.css("background-color", "red")
        }
        else if (timeSlotsArray.indexOf(currentHour) > i) {
            eventDiv.css("background-color", "gray")
        }
        else {
            eventDiv.css("background-color", "green")
        }

        var saveButton = $("<button>").addClass("save").attr("id", timeSlotsArray[i] + "save")
        saveButton.text("Save")
        newRow.append(saveButton)
        
        
        scheduleEl.append(newRow)
    }
}

renderSchedule()

function updateEvents() {
    if (event.target.getAttribute("class") === "save") {
        for (var i = 0; i< 9; i++) {
            eventsArray[i] = $("#" + timeSlotsArray[i] + "event").val()
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray))
        }
    }
}

scheduleEl.click(updateEvents)