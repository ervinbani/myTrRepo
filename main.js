
$(document).ready(function(){
  
$("#idbtn").click(function(){
  $("#idData").html("");
  $("#idCapitale").html("");
  
  var c=parseInt($("#idCapIniziale").val());
  for(var x=0;x<32;x++){
    $("#idData").append("<div class=border >" + x + "</div>");

      //c=parseFloat(c + c*0.1).toFixed(2);;
    
    $("#idCapitale").append("<div class=border>" + parseFloat(c).toFixed(2) + "</div>");

    c=c + c*0.03;

  }
  
  $("#idCapIniziale").val("");


});


});
