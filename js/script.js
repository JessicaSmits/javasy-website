
let workshop = $("header#workshop");

$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if ( scroll > 600) {
        workshop.css({opacity:1});
        console.log("vincent");
    } else if ( scroll < 600) {
        workshop.css({opacity:0});
        console.log("Hallo");
    }
    console.log(scroll);
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
