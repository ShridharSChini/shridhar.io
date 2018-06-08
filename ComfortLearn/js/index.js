function disableSubmit() {
  document.getElementById("submit").disabled = false;
 }

function activateButton(element) {
      if(element.checked) {
        document.getElementById("submit").disabled = false;
       }
       else  {
        // document.getElementById("submit").disabled = true;
        alert("Please Accept Terms and Conditions")
      }

  }
  function validateForm(){
    var x = document.forms["myForm"]["accept_conditions"].checked;
    if (!x) {
        alert("Please Accept Terms and Conditions")
    }
  }