var index= 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
carousel(); // Start the carousel when the script loads