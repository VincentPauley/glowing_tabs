
/* handles switching of the selected class based on click */
$("#tabWrapper").find("input[type=radio]").on("click", function() {
  $(this).parents().addClass("selected").removeClass("hovering").siblings().removeClass("selected");
});

/* controls label hovers */
$("#tabWrapper > label")
.on("mouseenter", function() {
    if($(this).hasClass("selected")) {

    } else {
      $(this).addClass("hovering");
    }
})
.on("mouseleave", function() {
  $(this).removeClass("hovering");
});
