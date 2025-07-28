document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Apertou enter")
    }
});
document.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        console.log("Soltou o Enter");
    }
})