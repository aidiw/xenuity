    console.log("로딩완료");
    var pgname = location.href; //url
    pgname = pgname.split("/");
    pgname = pgname[pgname.length - 1].split(".")[0];
    console.log("페이지구분:" + pgname);


    //    /*마우스 커서*/
    //
    //    function resultFun(x) {
    //    	var positionLeft = x.clientX;
    //    	var positionTop = x.clientY;
    //    	document.getElementById('mouse').style.left = positionLeft - 10 + "px";
    //    	document.getElementById('mouse').style.top = positionTop - 10 + "px";
    //    }
    //    if (document.addEventListener) {
    //    	document.addEventListener("mousemove", resultFun);
    //    } else if (document.attachEvent) {
    //    	document.attachEvent("onmousemove", resultFun);
    //    	//attachEvent는 IE8이하와 오페라에서 사용하는 명령어이다 };
    //    }
    //



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
    	}////////////////////////////////////////////////////////////////////
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









    }); ////// jQB //////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
