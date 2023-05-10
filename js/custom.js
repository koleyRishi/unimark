$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 70) {  
        $(".navbar").removeClass("navbar-extended");
    } else {
       $(".navbar").addClass("navbar-extended");
    }
  });


//Vanta js
VANTA.CLOUDS({
    el: "#cloud-vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0xb1b1b1,
    cloudColor: 0x96c2d9,
    cloudShadowColor: 0x435465,
    sunGlareColor: 0xff3f00,
    speed: 1.20
})