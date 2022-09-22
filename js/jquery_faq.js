// waits until the page loads and then execute
$(function(){
    $(".page-update").click(function() {
        $("dd").toggleClass("invisible");
    });

    $("dt").on("click", function(){
        $(this).css('background-color', 'rgb(150, 215, 89)');
    });

    $("#change-background").on("click", function(){
        $("ul").each(function(){
            $(this).children().last().css("background-color", "yellow");
        });
    });
    $("h3").on("click", function(){
        $(this).next().children().first().css("font-weight", "bold");
    })
    $("li").on("click", function() {
        $(this).parent().children().first().css("color", "blue");
    });
});
