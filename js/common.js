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
    	//		console.log("로딩완료");

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





    }) ////////JQB///////
