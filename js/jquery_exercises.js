"use strict";
// waits until the html document loads and then run
$(function(){
    // alert('The DOM has finished loading!');
    //
    // let $div = $("#comment").html();
    // alert($div);

    // let $elementWithSameId = $("#comment").html();
    // alert($elementWithSameId);

    // give a border to all elements with a class codeup
    // $(".codeup").css('border', '1px solid red');
    //
    // $("li").css({'fontSize': '20px', 'backgroundColor': 'lightgreen'});
    // $("h1").css('backgroundColor', 'lightgreen');
    // $("p").css('backgroundColor', 'lightgreen');
    //
    // alert($("#title").html());
    //
    // $("h1, p, li").css('backgroundColor', 'hotpink');

    $("h1").on('click', function(){
        $(this).css('background-color', 'rgb(150, 180, 78)');
    });

    $("p").on('dblclick', function(){
        $(this).css('font-size', '18px');
    });

    $("li").hover(function(){
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'black');
    });
});