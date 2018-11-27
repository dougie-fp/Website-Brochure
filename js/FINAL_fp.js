

//Main accordion
var acc = document.getElementsByClassName("accord-main");
for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
       //Toggle between hiding and showing the active panel
        this.classList.toggle("active");
        var panMain = this.nextElementSibling;
        if (panMain.style.display === "block") {
            panMain.style.display = "none";
        } else {
            panMain.style.display = "block";
        }
    });
}

//Nested accordion
var accb = document.getElementsByClassName("accord-nest");
for (i = 0; i < accb.length; i++) {
    accb[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panRight = this.nextElementSibling;
        if (panRight.style.maxHeight){
            panRight.style.maxHeight = null;
        } else {
            panRight.style.maxHeight = panRight.scrollHeight + "px";
            }
        });
    }

    