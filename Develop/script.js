var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

var timeBlock = $(".hour");

localStorage.setItem("time-block", JSON.stringify
(timeBlock));

var lastSave = JSON.parse(localStorage.getItem
    ("time-block"));
