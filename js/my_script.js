var func = function()
{
		// Select
		$('select.styler').styler();

		// Popup
		$(".model01").click(function(){
			$('.overlay').fadeIn('fast',function(){
				$('.popup-box').animate({'top':'100px'},500);
			});
		});

		$(".close").click(function(e){
			e.preventDefault();
			$('.popup-box').animate({'top':'-2000px'},500,function(){
				$('.overlay').fadeOut('fast');
			});
		});

		// Search
		$(".search-box").click(function(e){
			e.preventDefault();
			$(this).toggleClass('act');
			return false;
		});

			// Slider
		$('.slider02').anythingSlider({autoPlay: true, hashTags : false, theme: 'metallic', resizeContents: false})
		$('.slider01').anythingSlider({autoPlay: true, hashTags : false})


		$(window).load(function(){
		// Masonry
		$('.mcontainer').masonry({
      itemSelector: '.item',
			columnWidth: 1,
      singleMode: false,
      isResizable: true,
      isAnimated: true,
          animationOptions: {
          queue: false,
          duration: 500
      }
    });

		$('.technical').masonry({
      itemSelector: '.item',
			columnWidth: 1,
      singleMode: true,
      isResizable: true,
      isAnimated: true,
          animationOptions: {
          queue: false,
          duration: 500
      }
    });
    });

		$('.news-list').masonry({
      itemSelector: '.item',
			columnWidth: 1,
      singleMode: true,
      isResizable: true,
      isAnimated: true,
          animationOptions: {
          queue: false,
          duration: 500
      }
    });





};

$(func);

