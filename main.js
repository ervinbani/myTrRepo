
$(document).ready(function(){

$("#idbtn").click(function(){
  var c=20;
  for(var x=17;x<32;x++){
    $("#idData").append("<div class=border >" + x + "</div>");

    $("#idCapitale").append("<div class=border>" + parseFloat(c).toFixed(2) + "</div>");

    //c=parseFloat(c + c*0.1).toFixed(2);;
    c=c + c*0.1

  }


});







});
