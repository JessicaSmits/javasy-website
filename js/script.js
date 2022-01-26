$(document).ready(function(){
    let workshop = $("header#workshop");

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if ( scroll > 600) {
            workshop.css({opacity:1});

        } else if ( scroll < 600) {
            workshop.css({opacity:0});
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

    $(".hamburgermenu").click(function(){

        if ($("nav").css("display") == "none") {

            $("nav").css({"display":"block"});
            $("header").css({"z-index":4});
            $("nav").slideDown(500);
            $(this).css ({
                backgroundImage:'url("assets/burgermenu2.svg")',
                backgroundRepeat: "no-repeat"
            });

        } else {

            console.log('else');

            $("nav").slideUp(500);
            $("header").css({"z-index":2});
            $("nav").css({"display":"none"});
            $(this).css ({
                backgroundImage:' url("assets/burgermenu.svg")',
                backgroundRepeat: "no-repeat"
            });
        }

        console.log('click');
        
    });

    if((window.matchMedia("(max-width: 767px)").matches) || window.screen("max-width: 767px")){
        $(".hamburgermenu").css({
            "display":"inline-block"
        })

    }

});
