$(document).ready(function () {
    $("#anchor").hover(function () {
        alert("You hover anchor tag!");
    },
        function () {
            alert("You now hover out anchor tag!");
        });
    $("#tag").focus(function () {
        $(this).css("color", "yellow");
    });
    $("#tag").click(function(){
       alert("you just click the focus function");
      });
      $("#mouse").mouseover(function(){
        $("#mouse").css("background-color", "yellow");
      });
      $("#mouse").mouseout(function(){
        $("#mouse").css("background-color", "lightgray");
      });
      $("#tag").click(function(event){
        event.preventDefault();
      });
})