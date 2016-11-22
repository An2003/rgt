var klokke = document.getElementById('klokke');


var date = new Date();
var audio = new Audio("yey.mp4");

setInterval(function(){
 date = new Date();

  var sec = date.getSeconds();
  var min = date.getMinutes();
  var tim = date.getHours();

  HFK12.innerHTML = tim + ":" + min + ":" + sec;


},40);


HFK12.innerHTML = "11:11:11";


audio.loop = true;
audio.play();
