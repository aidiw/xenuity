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
=======
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

    /*마우스 커서*/

    function resultFun(x) {
        var positionLeft = x.clientX;
        var positionTop = x.clientY;
        document.getElementById('mouse').style.left = positionLeft - 10 + "px";
        document.getElementById('mouse').style.top = positionTop - 10 + "px";
    }
    if (document.addEventListener) {
        document.addEventListener("mousemove", resultFun);
    } else if (document.attachEvent) {
        document.attachEvent("onmousemove", resultFun);
        //attachEvent는 IE8이하와 오페라에서 사용하는 명령어이다 };
    }

    ///// 전역변수 ///////////////////////////////

    // 1. 페이지번호
    var pno = 0;
    // 2. 전체 페이지수
    const totnum = 7;
    // const는 변수 var와 달리 변경불가한 상수를 말한다!
    // 3. 광스크롤방지
    var psts = 0; //(0-허용,1-불허용)

    /////////////////////////////////////////////


    $(function () { /// jQB //////////////////
        $(document).on("mousewheel DOMMouseScroll",
            function (e) {

                /////// 광스크롤막기 /////////////////
                if (psts === 1) return true; //돌아가!
                psts = 1; //잠금(기존0값을 변경)
                setTimeout(function () {
                    psts = 0;
                }, 600); /// 타임아웃 ///
                /////////광스크롤막기/////////////////

                e = window.event || e;

                var delta = e.detail ? e.detail : e.wheelDelta;
                if (/Firefox/i.test(navigator.userAgent)) {
                    //console.log("난파폭!");
                    delta = -delta; //부호를 반대로!
                } ////// if문 ////////////////////////

                // 음수일때 아랫방향
                if (delta < 0) {
                    pno++; //1씩증가
                    // 한계페이지번호 마지막번호에 고정!
                    if (pno === totnum) pno = totnum - 1;
                } /// if ///////////
                // 양수일때 윗방향
                else {
                    pno--; //1씩감소
                    // 한계페이지번호 첫번호에 고정!
                    if (pno === -1) pno = 0;
                } /// else ////////

                //console.log("페이지번호:" + pno);

                // 4. 해당순번 페이지 left 위치값 구하기
                var pgpos = $(".page").eq(pno).offset().left;
                console.log("이동페이지위치:" + pgpos);

                // 5. 페이지 이동 애니메이션
                $("html,body").stop().animate({
                    scrollLeft: pgpos + "px"
                }, 600, "easeInOutQuint");

                // 스크롤시 숫자 카운트 증가
                $(".count").text(pno + 1);

            }); //////////////// mousewheel ////////////////


        // 클릭시 스크롤이동








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









        //////////////////////////////////////////////////////
        ///////////////////////work영역///////////////////////
        // 스크롤 스와이퍼 플러그인//




        // work페이지용
        if (pgname === "work") {

            var swiper = new Swiper({
                el: '.swiper-container',
                initialSlide: 0,
                spaceBetween: 250,
                slidesPerView: 2,
                centeredSlides: true,
                grabCursor: true,
                scrollbar: {
                    el: '.swiper-scrollbar'
                },
                mousewheel: {
                    enabled: true,
                },
            });
        } ///////// if ///////////


        var mouse = $("#mouse");
        $("a").hover(
            function () {
                mouse.css({
                    transform: "scale(1.5)",
                    opacity: .5,
                    transition: "transform .3s ease-out"
                });
            },
            function () {
                mouse.css({
                    transform: "scale(1)",
                    opacity: 1
                });
            }); ////////// hover /////////////



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






>>>>>>> 9d6bb4abdac843eb9aa9f733149c99b795f38e3e


    }); ////// jQB //////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
