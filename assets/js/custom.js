
		
		$(window).on('load', function () {
				//scrollMenu();
				// preloader();
				
        });

		function scrollMenu(){
			$(window).on('scroll', function() {
						// sticky menu activation
								if ($(window).scrollTop() > 180) {
										$('header').addClass('sticky-menu');
								} else {
										$('header').removeClass('sticky-menu');
								}
								// back to top button fade in / fade out
								if ($(window).scrollTop() > 1000) {
										$('.back-to-top').addClass('show');
								} else {
										$('.back-to-top').removeClass('show');
								}
						});
			
		}
				
		// AOS 
		function preloader() {
						setTimeout(function () {
							if ($('#loader').length > 0) {
								$('#loader').removeClass('show');
								
								AOS.init({
                                     easing: 'ease-in-out',
                                     once: true,
                                     mirror: false
                                })	
							}
						}, 1);
		 }

 		AOS.init({
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            duration: 600,
       });

	
		
	// new PureCounter(); // utiliser en front <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="2" class="purecounter"></span>
		
		
$(document).ready(function(){

		$('.back-to-top').on('click', function() {
			
				$("html, body").animate({
						scrollTop: 0
				}, 1000);
				
		});	
  

       $('.owlGallery').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
      
						
});

