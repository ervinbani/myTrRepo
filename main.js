
$(document).ready(function(){
    
    //funzione che rileva  il dato e crea i calcoli al click del button
    $("#idbtn").click(function(){
        $("#idData").html("");
        $("#idCapitale").html("");
        
        var c=parseInt($("#idCapIniziale").val());
        if(isNaN(c) || c<1){
            alert("Valore non valido, inserisci un numero positivo");

        }
        else{
            for(var x=0;x<32;x++){
                $("#idData").append("<div class=border >" + x + "</div>");
                $("#idCapitale").append("<div class=border>" + parseFloat(c).toFixed(2) + "</div>");

                c=c + c*0.03;

          }
        }
        
        $("#idCapIniziale").val("");

    });

    //funzione che rileva il dato al press del tasto invio
    $("#idCapIniziale").keypress(function(e) {
        if (e.which == 13) {
            $("#idData").html("");
            $("#idCapitale").html("");
            
            var c=parseInt($("#idCapIniziale").val());
            if(isNaN(c) || c<1){
                alert("Valore non valido, inserisci un numero positivo");

            }
            else{
                for(var x=0;x<32;x++){
                    $("#idData").append("<div class=border >" + x + "</div>");
                    $("#idCapitale").append("<div class=border>" + parseFloat(c).toFixed(2)
                     + "</div>");

                    c=c + c*0.03;

            }
            $("#idCapIniziale").val("");
            }
        
        }
      });

});
