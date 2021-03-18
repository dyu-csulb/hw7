
function myFunction() {
    clearValues();
    displayText400();
    document.getElementById("lblInstruction").innerHTML  = 'Results are also in console';
  }
  
  const displayText400 = () => {
    var doc = document.getElementsByClassName("400level");
        for (var i = 0; i < doc.length; i++) {
            var val = doc[i].innerText;
            console.log(val)
            document.getElementById("lblMessage").innerHTML  += val + '<br/>';
        }   
  }
  
  
  function clearValues() {
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("lblInstruction").innerHTML  = "Click 'run' program to view results";
  }
  
  