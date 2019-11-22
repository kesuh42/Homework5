var timeSlotsArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var eventsArray = ["", "", "", "", "", "", "", "", ""]
var scheduleEl = $("#schedule")


function renderSchedule() {
    for (var i = 0; i< 9; i++) {
        var newRow = $("<div>").addClass("schedulerow").attr("id", timeSlotsArray[i])

        var timeDiv = $("<div>").addClass("time")
        timeDiv.text(timeSlotsArray[i])
        newRow.append(timeDiv)

        var eventDiv = $("<div>").addClass("event")
        eventDiv.text(eventsArray[i])
        newRow.append(eventDiv)

        var saveButton = $("<button>").addClass("save").attr("id", timeSlotsArray[i] + "save")
        saveButton.text("Save")
        newRow.append(saveButton)
        
        
        scheduleEl.append(newRow)
    }
}

renderSchedule()

function updateEvents() {
    
}