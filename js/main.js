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
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            },
            speed: 1500,
        }, );

        //여기수정추가!
        swiper.on('slideChange', function () {
            // slideChange 슬라이드 변경 이벤트
            console.log('slide changed:' + this.activeIndex + '/' + this.previousIndex);
            // activeIndex 현재도착슬라이드 번호
            // previousIndex 이전슬라이드 번호
            var diff = this.activeIndex - this.previousIndex;
            console.log("차:" + diff);
            if (diff > 0) { //다음슬라이드
                goslide(1); //오른쪽넘기기
            } ///// if //////////
            else { //이전슬라이드
                goslide(0); //오른쪽넘기기
            } ////// else /////////

        });

        /**************** 미디어쿼리 햄버거메뉴 ***************/

        $('button').on('click', function () {
            $('body').toggleClass('open');
        });


        ////////////////////사운드 아이콘 온오프//////////////////////////////

        $(".sound").click(function () {


            //console.log("클릭");
            var soundImg = $(this).children("img");
            soundImg.attr("src", function (index, attr) {
                if (attr.match('on.gif')) {
                    return attr.replace("on.gif", "off.png");
                } else {
                    return attr.replace("off.png", "on.gif");
                }
            });


        });




        //////////////////////// 호버 버튼 부분 //////////////////
        $('.moreb, .downb').mouseleave(function (e) {
            TweenMax.to(this, 0.3, {
                scale: 1
            });
            TweenMax.to('.morew, .downw', 0.3, {
                scale: 1,
                x: 0,
                y: 0
            });
        });

        $('.moreb, .downb').mouseenter(function (e) {
            TweenMax.to(this, 0.3, {
                transformOrigin: '0 0',
                scale: 1
            });
            TweenMax.to('.morew, .downw', 0.3, {
                scale: 1.3
            });
        });

        $('.moreb, .downb').mousemove(function (e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, '.morew, .downw', 60);
        }

        function parallaxIt(e, target, movement) {
            var $this = $('.morew, .downw');
            var boundingRect = $this[0].getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            TweenMax.to(target, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
                ease: Power2.easeOut
            });
        } ////////////////////////////////////////////////////////////////////
        /////////////////////////////호버버튼!///////////////////////////////









        ////////////about 영역 ////////////////
        ///// 로드구역 /////
        //////////////////////스크롤시 페이드효과//////////////////
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


        /////////////////////마우스 이동시 섹션 무브///////////////////////

        //    	/* Store the element in el */
        //    	//    	let ele = document.getElementsByClassName('tilt');
        //    	let ele = $('.tilt');
        //
        //    	/* Get the height and width of the element */
        //    	const height = ele.height();
        //    	const width = ele.width();
        //
        //    	/*
        //    	 * Add a listener for mousemove event
        //    	 * Which will trigger function 'handleMove'
        //    	 * On mousemove
        //    	 */
        //
        //
        //    	ele.mousemove(function (e) {
        //
        //    		/*
        //    		 * Get position of mouse cursor
        //    		 * With respect to the element
        //    		 * On mouseover
        //    		 */
        //    		/* Store the x position */
        //    		const xVal = e.pageX;
        //    		/* Store the y position */
        //    		const yVal = e.pageY;
        //
        //    		/*
        //    		 * Calculate rotation valuee along the Y-axis
        //    		 * Here the multiplier 20 is to
        //    		 * Control the rotation
        //    		 * You can change the value and see the results
        //    		 */
        //    		const yRotation = 2 * ((xVal - width / 2) / width);
        //
        //    		/* Calculate the rotation along the X-axis */
        //    		const xRotation = -2 * ((yVal - height / 2) / height);
        //
        //    		/* Generate string for CSS transform property */
        //    		const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
        //
        //
        //
        //    		/* Apply the calculated transformation */
        //    		//    		obj.style.transform = string
        //    		$(this).css({
        //    			transform: string
        //    		});
        //
        //
        //    	});
        //
        //    	ele[i].addEventListener('mousemove', function () {
        //    		handleMove(event, ele[i]);
        //    	});
        //


        /* Store the element in el */
        //    	let ele = document.getElementsByClassName('tilt');
        //    	    	let ele = $('.tilt');
        //    	
        //    	    	/* Get the height and width of the element */
        //    	    	const height = ele.height();
        //    	    	const width = ele.width();
        //
        //    	    	/* Define function a */
        //    	    	function handleMove(e,obj) {
        //    				console.log(e+"/"+obj);
        //    	    		/*
        //    	    		 * Get position of mouse cursor
        //    	    		 * With respect to the element
        //    	    		 * On mouseover
        //    	    		 */
        //    	    		/* Store the x position */
        //    	    		const xVal = e.layerX
        //    	    		/* Store the y position */
        //    	    		const yVal = e.layerY
        //    	
        //    	    		/*
        //    	    		 * Calculate rotation valuee along the Y-axis
        //    	    		 * Here the multiplier 20 is to
        //    	    		 * Control the rotation
        //    	    		 * You can change the value and see the results
        //    	    		 */
        //    	    		const yRotation = 2 * ((xVal - width / 1) / width)
        //    	
        //    	    		/* Calculate the rotation along the X-axis */
        //    	    		const xRotation = -2 * ((yVal - height / 1) / height)
        //    	
        //    	    		/* Generate string for CSS transform property */
        //    	    		const string = 'perspective(500px) scale(1.08) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        //    	
        //    	    		/* Apply the calculated transformation */
        //    	//    		obj.style.transform = string
        //    				obj.css({
        //    					transform: string
        //    				});
        //    	    	}///////////////////////////////마우스무브화면무브//////////////////////////////////
        //


        //////////////////////////////마그네틱 버튼////////////////////////////


        /*스와이프시 같이 변화되는 타이틀*/
        // 갤러리 이미지 이동 대상 : 갤러리박스 (.gbox)
        var tg = $(".gbox");
        var sg = $(".sbox");

        // 슬라이드 이동 함수/////////////////
        /*
        함수명 : goslide
        기능 : 클립아트 이동
        */

        /*광클금지*/
        var sprot = 0; ///0일때는 허용  1일때는 금지


        //////////////////////////////////////////////////////////////
        var goslide = function (dir) { ///dir - 방향 0=왼쪽 1=오른쪽
            /* 광클 금지설정*/
            console.log("광클금지상태:" + sprot);

            if (sprot === 1) return false;
            sprot = 1 //잠금
            setTimeout(function () {
                sprot = 0 //잠금해제
            });

            ////////////////////////

            /*console.log("이동방향:" + dir);*/
            //오른쪽전달값 1 이므로 true
            if (dir) {
                /*맨 앞이미지 선택*/
                var first = tg.find("h2").first();
                /*맨앞 이미지 맨뒤로 이동*/
                tg.append(first);

            } /////if
            //////////왼쪽 전달값이 0 이므로 false (else로 처리)
            else {
                /*맨 앞이미지 선택*/
                var last = tg.find("h2").last();
                /*맨뒤 이미지 맨앞으로로 이동*/
                tg.prepend(last);
            };
            //오른쪽전달값 1 이므로 true
            if (dir) {
                /*맨 앞이미지 선택*/
                var first = sg.find("h4").first();
                /*맨앞 이미지 맨뒤로 이동*/
                sg.append(first);

            } /////if
            //////////왼쪽 전달값이 0 이므로 false (else로 처리)
            else {
                /*맨 앞이미지 선택*/
                var last = sg.find("h4").last();
                /*맨뒤 이미지 맨앞으로로 이동*/
                sg.prepend(last);
            }

        };



        /////////////////goslide///////////////////////

        //오른쪽버튼 클릭시 갤러리박스 배경이미지 뒤로이동
        $(".swiper-button-next").click(function () {
            console.log("오른쪽:");

            goslide(1); //오른쪽넘기기
        }) //////////click

        //오른쪽버튼 클릭시 갤러리박스 배경이미지 뒤로이동
        $(".swiper-button-prev").click(function () {
            console.log("왼쪽:");

            goslide(0); //왼쪾넘기기
        }) //////////click


        /**************** 미디어쿼리 햄버거메뉴 ***************/

        $("button").on("click", function () {
            $('body').toggleClass("open");
        });

        ////////////////////사운드 아이콘 온오프//////////////////////////////

        $(".sound").click(function () {


            //console.log("클릭");
            var soundImg = $(this).children("img");
            soundImg.attr("src", function (index, attr) {
                if (attr.match('on.gif')) {
                    return attr.replace("on.gif", "off.png");
                } else {
                    return attr.replace("off.png", "on.gif");
                }
            });


        });


    }); ////// jQB //////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
