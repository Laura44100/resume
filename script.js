$(document).ready(function(){
    
    loadConstants();
    fitElementsToWindow(); // adjusting css
    
    /*
        Event listeners
    */
    // window resize
    $(window).resize(function(){
        fitElementsToWindow()
    });
    
    // scrolling
    $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > window.innerHeight/2) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });
});

function loadConstants(){
    
    // LANDSCAPE image
    var backgroundImg = new Image();
    backgroundImg.src = "images/pc.jpg";
    backgroundImg.onload = function() {
        
        // storing the background image's dimensions
        $("#cheat").attr("bgdImgLandscapeWidth", backgroundImg.width);
        $("#cheat").attr("bgdImgLandscapeHeight", backgroundImg.height);
        
        // setting up the background image's dimensions
        if(window.innerHeight < window.innerWidth){ // if landscape
            var imgWidth = $("#cheat").attr("bgdImgLandscapeWidth") * window.innerHeight / $("#cheat").attr("bgdImgLandscapeHeight");
            if(imgWidth < window.innerWidth) imgWidth = window.innerWidth;
            $("#firstContainer").css("background-size", imgWidth);
        }
    };
    
    // PORTRAIT image
    var backgroundImg = new Image();
    backgroundImg.src = "images/pc.jpg";
    backgroundImg.onload = function() {
        // storing the background image's dimensions
        $("#cheat").attr("bgdImgPortraitWidth", backgroundImg.width);
        $("#cheat").attr("bgdImgPortraitHeight", backgroundImg.height);
        
        // setting up the background image's dimensions
        if(window.innerHeight > window.innerWidth){ // if portrait
            var imgWidth = $("#cheat").attr("bgdImgPortraitWidth") * window.innerHeight / $("#cheat").attr("bgdImgPortraitHeight");
            if(imgWidth < window.innerWidth) imgWidth = window.innerWidth;
            $("#firstContainer").css("background-size", imgWidth);
        }
    };
}

function fitElementsToWindow(consts){
    designFirstDiv(consts);
}

function designFirstDiv(consts){
    
    // background pic
    if(window.innerHeight < window.innerWidth){ // landscape
        $("#firstContainer").css("background", "url('images/pc.jpg') no-repeat");
        var imgWidth = $("#cheat").attr("bgdImgLandscapeWidth") * window.innerHeight / $("#cheat").attr("bgdImgLandscapeHeight");
        if(imgWidth < window.innerWidth) imgWidth = window.innerWidth;
        $("#firstContainer").css("background-size", imgWidth);
    }
    else{ // portrait
        $("#firstContainer").css("background", "url('images/pc-portrait.jpg') no-repeat");
        var imgWidth = $("#cheat").attr("bgdImgPortraitWidth") * window.innerHeight / $("#cheat").attr("bgdImgPortraitHeight");
        if(imgWidth < window.innerWidth) imgWidth = window.innerWidth;
        $("#firstContainer").css("background-size", imgWidth);
    }
    
    // height
    var navbarHeight = $(".navbar").css("height");
    var height = window.innerHeight + "px";
    $("#firstContainer").css("height", height);
}
