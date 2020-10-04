    console.log("로딩완료");

    /* 부드러운 화면전환 */
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

  

    $(function () { /// jQB //////////////////
      
        var swiper = new Swiper({
            el: '.wcont',
            initialSlide: 0,
            spaceBetween: 200,
            slidesPerView: 2,
            centeredSlides: true,
            grabCursor: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: {
                enabled: true,
            },
        });

    }); ////// jQB //////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
