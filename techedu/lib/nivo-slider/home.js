(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#nivoslider').nivoSlider({
				effect: 'random',
				slices: 15,
				boxCols: 10,
				boxRows: 10,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: true
			 });
})(jQuery); 