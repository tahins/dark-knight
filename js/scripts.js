function flashlightEffect(elem, className) {

    elem.mousemove(function(e){
        elem.css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
    });

    elem.bind('touchmove',function(e){
        e.preventDefault();
        var touch = e.originalEvent.changedTouches[0];
        console.log(touch.pageX + " - " + touch.pageY);
        elem.css('background-position',(touch.pageX - 250)+'px '+(touch.pageY - 250)+'px');
    });

    clickToWhite(elem, className);

}

function clickToBlack(elem, className) {
    elem.unbind("click");
    $(".white").unbind("click");

    $(".white").click(function(e){
            $(".white").addClass("" + className);
            elem.removeClass("white");

            clickToWhite(elem, className);

            console.log("From light to darkness");
        });
}

function clickToWhite(elem, className) {
    elem.unbind("click");
    $(".white").unbind("click");

    elem.click(function(e){
            elem.addClass("white");
            $(".white").removeClass("" + className);

            clickToBlack(elem, className);

            console.log("From darkness to light");
    });
}
