
let workshop = $("#workshop");

$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if ( scroll > 500) {
        workshop.animate({"opacity":"1"});
    } else if ( scroll < 500) {
        workshop.animate({"opacity":"0"});
    }
    
});

var icons = {
    header: "inactive-icon",
    activeHeader: "active-icon"
};

$( "#accordion" ).accordion({
    icons: icons,
    collapsible: true,
    animate: 300,
});
