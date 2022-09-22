// waits until the page loads and then execute
$(function(){
    $(".page-update").click(function() {
        $("dd").toggleClass("invisible");
    });

    $("dt").on("click", function(){
        $(this).css('background-color', 'rgb(150, 215, 89)');
    });
});
