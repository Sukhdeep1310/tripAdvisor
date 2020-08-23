//form validation- 10pts
//Used Ready method to execute JQuery code after loading all the elements.
$(document).ready(function() {
       
//Email Pattern is defined    
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#submit").click(function(evt){
//Extra spaces are eliminated using trim() method of JQuery.
        var arrivalDate = $("#arrival_date").val().trim();
        var nights = $("#nights").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var phonePattern = /^(\d{3})-+(\d{3})-+(\d{4})$/; 
        var valid = true;
        
        //Logical NOT operator - 5pts
        //focus event-2pts
        if(!name)
            {
                
                $("#name").next().text("Enter your name!");
                $("#name").focus();
                valid = false;
            }
        else
            
            {
                $("#name").next().text("");
            }
         if(!email || !emailPattern.test(email))
            {
                
                $("#email").next().text("Enter a valid email address!");
                $("#email").focus();
                valid = false;
            }
        else
            {
                $("#email").next().text("");
            }
        if(!phone || !phonePattern.test(phone))
            {
                $("#phone").next().text("Enter a valid phone number!");
                $("#phone").focus();
                valid = false;
            }
        else
            
            {
                $("#phone").next().text("");
            }
        if(!arrivalDate)
            {
                $("#arrival_date").next().text("Please enter date!");
                $("#arrival_date").focus();
                valid = false;
            }
        else
            { $("#arrival_date").next().text("");
            }
        
        //if- else if- 5pts
        
        if(!nights)
            {
                
                $("#nights").next().text("Please enter numerics!");
                $("#nights").focus();
                valid = false;
            }
        else if(isNaN(nights)){
            
                $("#nights").next().text("Please enter numerics!");
                $("#nights").focus();
                valid = false;
        }
        else
            {
                $("#nights").next().text("");
            }
        
        if(!valid)
            
            {
                //preventDefault() method is used to prevent the default execution
                evt.preventDefault();
            }
        else{
            alert("Thank you for booking!!");
        }
        });
			
}); 