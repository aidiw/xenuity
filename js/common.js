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




    $(function () { ///////JQB///////
    	console.log("로딩완료");
    	/*마우스 커서*/


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
    	}
    }) ////////JQB///////
