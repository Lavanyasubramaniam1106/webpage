$(document).ready(function () {
    

    $("#btnsubmit").click(function () {


        
      
        if ($("#txtusername").val() == '' || $("#txtpassword").val()=='') {
            alert("Please fill username and pasword");
          
        }
        if ($("#txtusername").val() == 'admin' || $("#txtpassword").val()=='admin') {
            window.location.href="Homepage.html";
          
        }


  
    
    });
  
    $("#btnsubmitregistration").click(function () {


        
      
        if ($("#txtconpassword").val() ==  $("#txtpassword").val()) {
            alert("Please enter same password and confirm password");
          
        }



  
    
    });


});
