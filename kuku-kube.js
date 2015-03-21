var ping = function() {
  var cells = $("#box > span").get();
  for (var i = 0; i < cells.length - 1; i++) {
    if (cells[i].style.background != cells[i + 1].style.background) {
      $(cells[i + 1]).click();
      if (i == 0) { // for simplicity, just click both cells
        $(cells[i]).click();
      }
      break;
    }
  }
}
var accel_factor = 1;
setInterval(function(){
  for (var i = 0; i < accel_factor; i++)
      ping(); 
}, 1);
