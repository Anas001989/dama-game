import React from 'react';
import reactDom from 'react-dom';
//import $ from 'jquery';
//var Height = document.getElementById('cont').style.height;

//document.getElementById('bg2').style.height = "650px";

$("#infobtn").click(function () {

    $("#startpg").addClass("hidepage");
    $("#infopg").removeClass("hidepage");

    $("#banner").removeClass("banner_holder");
    $("#banner").addClass("banner_hide");
    $("#footer").removeClass("banner_footer");
    $("#footer").addClass("banner_hide");
    $("body").addClass("Bg");

});

$("#backbtn").click(function () {

    $("#startpg").removeClass("hidepage");
    $("#infopg").addClass("hidepage");

    $("#banner").addClass("banner_holder");
    $("#banner").removeClass("banner_hide");
    $("#footer").addClass("banner_footer");
    $("#footer").removeClass("banner_hide");
    $("body").removeClass("Bg");

});

$(document).ready(function () {
    $(document).keydown(function (event) {
        if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
           // alert('disabling zooming');
            event.preventDefault();
            // 107 Num Key  +
            //109 Num Key  -
            //173 Min Key  hyphen/underscor Hey
            // 61 Plus key  +/=
        }
    });

    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            //alert('disabling zooming');
            event.preventDefault();
        }
    });
});
var start = new Date;

setInterval(function () {

    var distance = new Date - start;

    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    h = checkval(h);
    m = checkval(m);
    s = checkval(s);

    $("#timer1").text(h + ":" + m + ":" + s);
}, 1000);

function checkval(x) {
    if (x<10) {
        return "0" + x ;
    }
    else {
        return x;
    }
}
//(function(){setInterval("document.body.style.zoom=1/window.devicePixelRatio", 1); var viewport=document.createElement("meta");viewport.id="viewport";viewport.name="viewport";viewport.content="width=device-width, initial-scale=1";document.body.parentElement.children[0].appendChild(viewport);})()