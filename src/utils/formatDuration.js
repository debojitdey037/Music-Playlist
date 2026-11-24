function formatDuration(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  
  return minutes + ":" + remainingSeconds;
}

export default formatDuration;
