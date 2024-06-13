document.addEventListener('DOMContentLoaded', function(event) {	
	var scrollPos = 0;
	var isScrolling = false; 
	function handleScroll() {
	  if (!isScrolling) {
	    window.requestAnimationFrame(function() {
	      var scroll = document.documentElement.scrollTop;
	      var header = document.querySelector('.header');
	      var headerLinks = document.querySelector('.header__links');
	      if (scroll > 15 && scroll > scrollPos) {
	        header.classList.add('scroll');
	        headerLinks.style.marginTop = -headerLinks.offsetHeight + 'px';
	      } else {
	        header.classList.remove('scroll');
	        headerLinks.style.marginTop = 0;
	      }
	      if (scroll > 1) {
	        header.classList.add('show');
	      } else {
	        header.classList.remove('show');
	      }
	      scrollPos = scroll;
	      isScrolling = false; 
	    });
	  }
	  isScrolling = true; 
	}
	handleScroll();
	window.addEventListener('scroll', handleScroll);

	var burger = document.querySelector('.header__burger');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	var menuButton = document.querySelectorAll('.hassublist>a, .formobile>a');
	if(burger){
    burger.addEventListener('click', function(event) {
    		burger.classList.toggle('active');
    		menu.classList.toggle('active');
    		body.classList.toggle('lock');
  	});
	}
	if(menuButton){
		menuButton.forEach(function(menuButton) {
		    menuButton.addEventListener('click', function(event) {
		    	event.preventDefault();
		    	menuButton.parentNode.classList.toggle('open');
		    	var subMenu = menuButton.parentNode.querySelector('.sublist');
		    	slideToggle(subMenu);
		    });
		});
	}

  if(document.querySelector('.main__slider')){
      new Swiper('.main__slider', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
        effect:'fade',
        fadeEffect: { crossFade: true },
			  autoplay: {
			    delay: 4000,
			    disableOnInteraction: false,
			  },
			  navigation: {
			    prevEl: '.main__prev',
			    nextEl: '.main__next',
			  },
			  pagination: {
			  	clickable:true,
			    el: '.main__pagination',
			  },
		    on: {
		      slideChange: function () {
		        var currentSlide = this.slides[this.activeIndex];
		        var bgImageUrl = currentSlide.getAttribute('data-bg');
		        if (bgImageUrl) {
		          var backgroundImages = document.querySelectorAll('.main__background img');
		          backgroundImages.forEach(function (image) {
		            if (image.getAttribute('data-bg') === bgImageUrl) {
		              image.classList.add('active');
		            } else {
		              image.classList.remove('active');
		            }
		          });
		        }
		      },
		    },

      });
  }

  if(document.querySelector('.ourworks__slider')){
      new Swiper('.ourworks__slider', {
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        loop:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
		    freemode:true,
			  navigation: {
			    prevEl: '.ourworks__prev',
			    nextEl: '.ourworks__next',
			  },
			  breakpoints: {
			  	1401:{
			  		slidesPerView: 3,
			  		spaceBetween: 30,
			  	},
			  	1121:{
			  		slidesPerView: 2,
			  		spaceBetween: 20,
			  	},			  	
			  	767:{
			  		slidesPerView: 1.5,
			  		spaceBetween: 15,
			  	},
			  	0:{
			  		slidesPerView: 1.2,
			  		spaceBetween: 10,
			  	},
			  }
      });
  }
  if(document.querySelector('.projects__slider')){
      new Swiper('.projects__slider', {
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 6,
        loop:true,
        freemode:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
			  navigation: {
			    prevEl: '.projects__prev',
			    nextEl: '.projects__next',
			  },
			  breakpoints: {
			  	1651:{
			  		slidesPerView: 6,
			  		spaceBetween: 30,
			  	},
			  	1420:{
			  		slidesPerView: 5,
			  		spaceBetween: 20,
			  	},
			  	1024:{
			  		slidesPerView: 4,
			  		spaceBetween: 20,
			  	},			  	
			  	767:{
			  		slidesPerView: 3,
			  		spaceBetween: 15,
			  	},
			  	0:{
			  		slidesPerView: 2,
			  		spaceBetween: 10,
			  	},
			  }
      });
  }
	if(document.querySelector('.partners__slider')){
	    new Swiper('.partners__slider', {
	        speed: 600,
	        spaceBetween: 30,
	        slidesPerView: 4,
	        slidesPerGroup: 1,
	        loop: true,
			    mousewheel: {
			        forceToAxis: true,
			    },
			    freemode:true,
	        navigation: {
	            prevEl: '.partners__prev',
	            nextEl: '.partners__next',
	        },
	        breakpoints: {
	            1401: {
	                slidesPerView: 4,
	                spaceBetween: 30,
	                slidesPerGroup: 1,
							    grid: {
							      rows: 1,
							    },
	            },
	            1121: {
	                slidesPerView: 3,
	                spaceBetween: 20,
	                slidesPerGroup: 1,
							    grid: {
							      rows: 1,
							    },
	            },        
	            768: {
	                slidesPerView: 2,
	                spaceBetween: 15,
	                slidesPerGroup: 1,
							    grid: {
							      rows: 1,
							    },
	            },
	            0: {
	                slidesPerView: 2,
	                spaceBetween: 10,
	                slidesPerGroup: 2,
							    grid: {
							      rows: 2
							    },
	            },
	        }
	    });
	}
  if(document.querySelector('.whyus__slider')){
      new Swiper('.whyus__slider', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
		    freemode:true,
			  navigation: {
			    prevEl: '.whyus__prev',
			    nextEl: '.whyus__next',
			  },
			  pagination: {
			  	clickable:true,
			    el: '.whyus__pagination',
			  },
      });
  }

  if(document.querySelector('.project__slider')){
      new Swiper('.project__slider', {
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        initialSlide: 1,
        loop:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
		    freemode:true,
        centeredSlides: true,
			  navigation: {
			    prevEl: '.project__prev',
			    nextEl: '.project__next',
			  },
	      thumbs: {
	        swiper: {
	          el: ".project__navslider",
	          slidesPerView: 3,
	          spaceBetween: 5,
	        },
	      },

			  breakpoints: {
			  	1121:{
			  		slidesPerView: 3,
			  		spaceBetween: 30,
			  	},
			  	0:{
			  		slidesPerView: 1,
			  		spaceBetween: 10,
			  	},
			  }
      });
  }


	function slideToggle(element) {
	  var target = element.style;
	  target.transition = 'all 0.3s ease-in-out';
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}
	if (document.querySelector('[data-fancybox]')) {
	    Fancybox.bind("[data-fancybox]", {
	        Images: {
	            zoom: false,
	        },
	        Thumbs: false,
	        on: {
	            reveal: (fancybox, slide) => {
	                if (slide.caption && slide.contentEl) {
	                    var captionSpan = document.createElement('span');
	                    captionSpan.textContent = slide.caption;
	                    slide.contentEl.appendChild(captionSpan);
	                }
	            },
	        },
	    });
	}


  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');

		    });
		});		
	}
  const sendButton = document.querySelectorAll(".form-button");
  if(sendButton){
	  sendButton.forEach(function (sendButton) {
	    sendButton.addEventListener("click", function (event) {
	    	event.preventDefault();
			  var formConsultation = this.closest("form");
			  if (formConsultation) {
			    var requiredElements = formConsultation.querySelectorAll("[required]");
			    var allValid = true;
			    requiredElements.forEach(function(element) {
			      if (!validateElement(element)) {
			        allValid = false;
			      }
			    });
			    if(allValid){
			    	const dataSuccess = this.getAttribute("data-success");
			    	const formIdPopup = document.querySelector(`${dataSuccess}`);
			    	if(formIdPopup){
			    		if(document.querySelector('.popup.open')){
			    			document.querySelector('.popup.open').classList.remove('open');
			    		}
			        formIdPopup.classList.add("open");
			        body.classList.add('popuplock');	
			        // formConsultation.submit();
			    	}
			    }
			  }
	    });
	  });  	
  }
	var faqTop = document.querySelectorAll('.faq__top');
	if(faqTop){
		faqTop.forEach(function(faqTop) {
		    faqTop.addEventListener('click', function(event) {
		    		faqTop.parentNode.classList.toggle('active');
		    		slideToggle(faqTop.nextElementSibling);

		    });
		});		
	}  
	var seoMore = document.querySelectorAll('.seo__more');
	if(seoMore){
		seoMore.forEach(function(seoMore) {
		    seoMore.addEventListener('click', function(event) {
		    	if(seoMore.closest('.seo')){
		    		seoMore.closest('.seo').classList.toggle('active');
		    	}
		    });
		});		
	}  
	if(document.querySelector('.service__bottom')){
		const swiperReviewsBreakpoint = 1261; 
		let swiperReviews;
		function handleReviews() {
		  if (window.innerWidth >= swiperReviewsBreakpoint) {
		    if (swiperReviews) {
		    	for (var i = 0; i <= swiperReviews.length - 1; i++) {
		    		swiperReviews[i].destroy();
		    	}
		      swiperReviews = null;
		    }
		  } else {
		    if (!swiperReviews) {
		      swiperReviews = new Swiper('.service__bottom', {
				      speed: 600,
				      spaceBetween: 15,
				      slidesPerView:1,
				      loop:true,
						  navigation: {
						    prevEl: '.service__prev',
						    nextEl: '.service__next',
						  },
		      });
		    }
		  }
		}
		handleReviews();
		window.addEventListener('resize', handleReviews);		
	}
  if(document.querySelector('.variants__slider')){
      new Swiper('.variants__slider', {
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 4,
        loop:true,
		    mousewheel: {
		        forceToAxis: true,
		    },
		    freemode:true,
			  navigation: {
			    prevEl: '.variants__prev',
			    nextEl: '.variants__next',
			  },
			  breakpoints: {
			  	1501:{
			  		slidesPerView: 4,
			  		spaceBetween: 30,
			  	},
			  	1101:{
			  		slidesPerView: 3,
			  		spaceBetween: 20,
			  	},
			  	601:{
			  		slidesPerView: 2,
			  		spaceBetween: 15,
			  	},
			  	0:{
			  		slidesPerView: 1.2,
			  		spaceBetween: 10,
			  	},
			  }
      });
  }
  if(document.querySelector('.page__slider')){
      new Swiper('.page__slider', {
        speed: 600,
        spaceBetween: 15,
        slidesPerView: 1,
        loop:true,
        centeredSlides: true,
		    mousewheel: {
		        forceToAxis: true,
		    },
        freemode:true,
			  navigation: {
			    prevEl: '.page__prev',
			    nextEl: '.page__next',
			  },
	      thumbs: {
	        swiper: {
	          el: ".page__navslider",
	          slidesPerView: 3,
	          loop:true,
	          spaceBetween: 10,
	          direction:'vertical',
					  breakpoints: {
					  	1121:{
					  		spaceBetween: 10,
					  		direction:'vertical',
					  	},
					  	0:{
					  		spaceBetween: 5,
					  		direction:'horizontal',
					  	},
			 			}
	        },
	      },
      });
  }

	const telmask = document.querySelectorAll("input[type='tel']");
	if(telmask){
	    telmask.forEach(function(input) {
	        const maskOptions = {
	          mask: '+{7}(000) 000-00-00',
	          lazy:true,
	        };
	       	const mask = IMask(input, maskOptions);
	        input.addEventListener('focus', function() {
	            mask.updateOptions({
	                lazy: false
	            });
	        });
	        input.addEventListener('blur', function() {
	            mask.updateOptions({
	                lazy: true
	            });
	        });

	        var prevElement = input.previousElementSibling;
	        if(input.parentNode.previousElementSibling){
	        	var prevElement2 = input.parentNode.previousElementSibling.querySelector('input');
	        }
	        if(prevElement && prevElement.tagName.toLowerCase() === 'input') {
	            prevElement.addEventListener('input', function() {
	            	prevElement.value = prevElement.value.charAt(0).toUpperCase() + prevElement.value.slice(1);
	            });
	        }else if(prevElement2 && prevElement2.tagName.toLowerCase() === 'input'){
	            prevElement2.addEventListener('input', function() {
                prevElement2.value = prevElement2.value.charAt(0).toUpperCase() + prevElement2.value.slice(1);
	            });	        	
	        }
	    });
	}

	var catalogCards = document.querySelectorAll('.catalog__card')
	if(catalogCards){
		catalogCards.forEach(function(catalogCard) {
		    catalogCard.addEventListener('mouseenter', function(event) {
		    	catalogCard.classList.add('hover');
		    	catalogVideo = catalogCard.querySelector('video');
		    	if(catalogVideo){
		    		catalogVideo.play();
		    	}
		    });
		    catalogCard.addEventListener('mouseleave', function(event) {
		    	catalogCard.classList.remove('hover');
		    	catalogVideo = catalogCard.querySelector('video');
		    	if(catalogVideo){
		    		catalogVideo.pause();
		    		// catalogVideo.currentTime = 0;
		    	}
		    });
		});
	}
	var projectsSlides = document.querySelectorAll('.projects__slide')
	if(projectsSlides){
		projectsSlides.forEach(function(projectsSlide) {
		    projectsSlide.addEventListener('mouseenter', function(event) {
		    	projectsSlide.classList.add('hover');
		    	projectsVideo = projectsSlide.querySelector('video');
		    	if(projectsVideo){
		    		projectsVideo.play();
		    	}
		    });
		    projectsSlide.addEventListener('mouseleave', function(event) {
		    	projectsSlide.classList.remove('hover');
		    	if(projectsVideo){
		    		projectsVideo.pause();
		    		// catalogVideo.currentTime = 0;
		    	}
		    });
		});
	}



});



function validateElement(element) {
  var elementType = element.getAttribute("type");
  var errorMessageElement = element.parentNode.querySelector('.errorText');
  if (elementType === "text" || elementType === "tel" || element.tagName === "TEXTAREA") {
    if (element.value.trim() === "") {
  		element.classList.add('error');
  		element.focus();
      setTimeout(function() {
        element.classList.remove('error');
      }, 1500); 	 
      return false;
    }
  } else if (elementType === "email") {
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(element.value)) {
  		element.classList.add('error');
  		element.focus();
      setTimeout(function() {
        element.classList.remove('error');
      }, 1500); 	 
      return false;
    }
  } else if (elementType === "checkbox") {
    if (!element.checked) {
    	element.classList.add('error');
  		element.focus();
      setTimeout(function() {
        element.classList.remove('error');
      }, 1500); 	
      return false;
    }
  }
  element.classList.remove('error');
  return true;
}


