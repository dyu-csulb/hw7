
function myFunction() {
  bodyNodes();
  document.getElementById("lblInstruction").innerHTML  = 'Results are also in console';

}

const bodyNodes = () => {
  document.getElementById("div-body").childNodes.forEach(
    node => {
      console.log(node)
      document.getElementById("lblMessage").innerHTML  += node.textContent + '<br/>';
    }
  )
}


function clearValues() {
  document.getElementById("lblMessage").innerHTML  = '';
  document.getElementById("lblInstruction").innerHTML  = "Click 'run' program to view results";
  
}







