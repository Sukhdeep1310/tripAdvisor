//custom function- 2pts
//global variable- 2pts
 var i;
var s = 0;
function toggle(){
    
    //Built-in method for document object-2pts
    // getElementByClassName - 2pts
    
    var btn = document.getElementsByClassName("material-icons")[0];
    
    //if-else statement- 5pts
    //innerHTML property - 2pts
    
    if(btn.innerHTML == "menu"){
        
        // getElementByTagName - 2pts
        
        document.getElementsByTagName("ul")[0].style.left="0px";
        btn.innerHTML = "close";
        btn.style.transform = "rotate(180deg)";
        btn.style.transition = "1s";
    }
    else{
        document.getElementsByTagName("ul")[0].style.left="-300px";
        btn.innerHTML = "menu";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "1s";

        }

}

//built-in method for window object - 2pts

window.onload = function(){
    
   //jquery UI - 10pts

    var acc = document.getElementsByClassName("accordion");

   //use an array - 2pts
   //Accordion is created by using EventListener and Toggle method

    for(var i=0; i<acc.length; i++){
        acc[i].addEventListener("click", function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;

            if(panel.style.display === "block"){
                panel.style.display = "none";
            }
            else{
                panel.style.display = "block";
            }
        });
    }
    
};
 //Back button is created to go back to the previous URL(history object).
  var back_btn = function(){
      //add event listener- 2pts
    //history - 10pts

var back = document.getElementById("back-button");
    back.addEventListener("click", function(){
        window.history.back();
    });

  }  



//Scrolling to top is defined on every page to reach to the top.

window.onscroll = function() {
    scroll1();
};

function scroll1() {
    
    //logical OR operator- 5pts
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } 
  else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function top_button() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

        
       