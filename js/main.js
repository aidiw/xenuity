    console.log("로딩완료");
    var pgname = location.href; //url
    pgname = pgname.split("/");
    pgname = pgname[pgname.length - 1].split(".")[0];
    console.log("페이지구분:" + pgname);





    $(function () { /// jQB //////////////////
        // 스크롤 스와이퍼 플러그인//
        var swiper = new Swiper({
            el: '.swiper-container',
            initialSlide: 0,
            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
            grabCursor: true,
            mousewheel: {
                enabled: true,
            },
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            },
            speed: 1500,
        });

        ////////////////////////스와이프 커버플로우 ///////////////////////////////////
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





        ////////////about 영역 ////////////////
        ///// 로드구역 /////

        function isElementUnderBottom(elem, triggerDiff) {
            const {
                top
            } = elem.getBoundingClientRect();
            const {
                innerHeight
            } = window;
            return top > innerHeight + (triggerDiff || 0);
        }

        function handleScroll() {
            const elems = document.querySelectorAll('.up-on-scroll');
            elems.forEach(elem => {
                if (isElementUnderBottom(elem, -20)) {
                    elem.style.opacity = "0";
                    elem.style.transform = 'translateY(70px)';
                } else {
                    elem.style.opacity = "1";
                    elem.style.transform = 'translateY(0px)';
                }
            })
        } //////////handlescroll

        window.addEventListener('scroll', handleScroll);







        // 스크롤 스와이퍼 플러그인//



        $(".page").hover(
            function () { // over
                $(this).css({
                    transform: "rotateY(40deg) scale(.8)",
                    transformStyle: "preserve-3d",
                    transition: "transform .4s",

                });
            },
            function () { // out
                //            $(this).css({
                //                transform:"rotateY(0deg)"
                //                
                //            });
            }); //////// hover //////////////








    }); ////// jQB //////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
