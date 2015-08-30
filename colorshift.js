var currentTime;

//pads 2 digit number with a zero
pad2 = function(number) {
  return (number < 10 ? '0' : '') + number
}
 
startColorShift = function(){
  var date = new Date(); 
  currentTime = "#" + date.getHours() + date.getMinutes() + date.getSeconds();
  Timer = setInterval(changeTime, 1000);
}

changeTime = function(){
  var time_string = currentTime.substring(1); //removes the '#'
  var time_chunks = time_string.match(/.{1,2}/g); //splits the 6 char string into 3-chunks of 2
  var hours, mins, secs;

  hours = Number(time_chunks[0]);
  mins = Number(time_chunks[1]);
  secs = Number(time_chunks[2]);
  secs ++;
  if (secs == 60){
    secs = 0;
    mins = mins + 1;
  } 
  if (mins == 60){
    mins = 0;
    hours = hours + 1;
  }
  if (hours == 13){
    hours = 1;
  }

  currentTime = "#" + pad2(hours) + pad2(mins) + pad2(secs);
  changeColor(currentTime);
}

changeColor = function(baseColor) {
  $("#big-square").css({background: baseColor}); //changes the background of the page using the current time
}
