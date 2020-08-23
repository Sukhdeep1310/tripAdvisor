//A slider container is defined which has 3 slides on the homepage
$(document).ready(function() {
    function carousel() {
  
    //local variable- 2pts
    // for loop - 5pts
    // if statement- 5pts

  var slider = document.getElementsByClassName("slide");
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  s++;
  if (s > slider.length) {
      s = 1;
  }    
  slider[s-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

 carousel();
});