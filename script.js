var timerElement = document.getElementById('timer'); // Get the HTML element with the id 'timer'

var timer; // Variable to hold the setInterval timer
var startTime; // Variable to store the start time of the timer
var pausedTime = 0; // Variable to store the time elapsed while the timer was paused

function startTimer() {
  if (!timer) { // Check if the timer is not already running
    startTime = Date.now() - pausedTime; // Calculate the start time by subtracting the paused time from the current time
    timer = setInterval(updateTimer, 1000); // Start a setInterval timer that calls the 'updateTimer' function every second (1000 milliseconds)
  }
}

function updateTimer() {
  var currentTime = Date.now(); // Get the current time
  var elapsedTime = currentTime - startTime; // Calculate the elapsed time by subtracting the start time from the current time

  // Calculate the hours, minutes, and seconds from the elapsed time
  var hours = Math.floor(elapsedTime / (60 * 60 * 1000));
  var minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);

  var timeString = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds); // Format the time into a string with leading zeros
  timerElement.textContent = timeString; // Update the text content of the 'timerElement' with the formatted time string
}

function padZero(number) {
  return (number < 10 ? '0' : '') + number; // Add a leading zero to numbers less than 10
}

function stopTimer() {
  if (timer) { // Check if the timer is running
    clearInterval(timer); // Clear the setInterval timer
    timer = null; // Set the timer variable to null to indicate that the timer is stopped
    pausedTime = Date.now() - startTime; // Calculate the time elapsed while the timer was running and store it in 'pausedTime'
  }
}

function resetTimer() {
  stopTimer(); // Stop the timer
  pausedTime = 0; // Reset the paused time to zero
  timerElement.textContent = '00:00:00'; // Reset the text content of the 'timerElement' to '00:00:00'
}
