var title = document.querySelector("#title");

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

title.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});


var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {
    
    var leg = document.querySelector("#leg");

    leg.classList.remove("hide");
})

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseout", function() {
    
    var leg = document.querySelector("#leg");

    leg.classList.add("hide");
})