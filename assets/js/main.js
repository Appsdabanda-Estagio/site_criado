const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    950: {
        items: 3
    }
}

/*A rever todo este código 01h00 tempo do vídeo */
$(document).ready(function () {
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** CLIKANDO O EVENTO DO BOTÃO DE MENU A REVER 01H00 tempo do vídeo */
    $toggleCollapse.click(function () {
        $nav.$toggleCollapse('collapse');
    })

    //Owl Carousel for Blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //Clik To Scroll Top
    $('.move-up span').click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    //Initialize AOS Instance
    AOS.init();

});