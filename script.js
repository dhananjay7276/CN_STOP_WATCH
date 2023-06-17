var timerElement = document.getElementById('timer');
    var timer;
    var startTime;
    var pausedTime = 0;

    function startTimer() {
      if (!timer) {
        startTime = Date.now() - pausedTime;
        timer = setInterval(updateTimer, 1000);
      }
    }

    function updateTimer() {
      var currentTime = Date.now();
      var elapsedTime = currentTime - startTime;
      var hours = Math.floor(elapsedTime / (60 * 60 * 1000));
      var minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
      var seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);

      var timeString = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
      timerElement.textContent = timeString;
    }

    function padZero(number) {
      return (number < 10 ? '0' : '') + number;
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
        pausedTime = Date.now() - startTime;
      }
    }

    function resetTimer() {
      stopTimer();
      pausedTime = 0;
      timerElement.textContent = '00:00:00';
    }