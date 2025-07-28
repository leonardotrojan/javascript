var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {

    console.log("clicou");

    this.style.color = "red";

});




// ----------------------------------------------

var title = document.querySelector("#title");

var subtitle = document.querySelector(".subtitle");

title.addEventListener("click", function() {
    if(subtitle.style.display == "block") {
        subtitle.style.display = "none";
    } else {
        subtitle.style.display = "block";
    }
})

subtitle.addEventListener("dblclick", function() {
    console.log("clique duplo!");
});