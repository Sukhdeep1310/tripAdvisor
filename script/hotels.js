//10 jquery methods - 15pts
// 5 jquery methods - 10pts

$(document).ready(function() {
    var click;
    
    //use a click event - 2pts
    //Used a click event to get JSON data.
        $("aside a").click(function() {
        $("main").html("");
        
    var url = "json_files/" + $(this).attr('title') + ".json";
        
        $.getJSON(url, function(data){
            $.each(data, function() {
                
                //this keyword - 5pts
                //custom function using parameters - 5pts
                //access an object property using dot notation- 2pts
                
                $.each(this, function(key, value) {
                    $("main").append(
                        "<img src=" + 
                        value.image + " width=300px height=200px> " + "<br>" + "<h1>" +
                         value.hotel_name, value.price + "</h1>" + "<h2>" +
                         value.location  + "</h2>" + "<p>" +
                        value.mobile + "</p>" + "<p>" + value.description + "</p>" + "<a href='form.html'><button id='book'>Book Now</button></a>" + "<br><br>"
                    );
                });
            });
        });   
    });

}); // end ready