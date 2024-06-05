function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    var timeString = hours + ":" + minutes;
    document.getElementById("clock").textContent = timeString;
  }

setInterval(updateClock, 1000);
window.addEventListener("load", function() { updateClock() });
// lol this doesn't even display my correct timezone it displays the browsers local time
