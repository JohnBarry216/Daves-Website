app.controller('homeCtrl', ['$scope', function($scope){
	$scope.title = 'Home';

					/* Handles and and all effects related to slideshow */
		// Set up caption transitions.
		//  Note that the key is in relation to captions "t" attribute in the html
		var _CaptionTransitions = [];
		_CaptionTransitions["CLIP|L"] = { 
			$Duration: 600, 
			$Clip: 1, 
			$Easing: $JssorEasing$.$EaseInOutCubic
		};
		// Set up automatic slideshow transitions, these are not related to clicking arrows/bullets
		//  Note that more transitions can be found here: (http://www.jssor.com/development/tool-slideshow-transition-viewer.html)
		var _SlideshowTransitions = [
		    {  
			   $Duration:1000,
			   x:0.25,
			   $Zoom:1.5,
			   $Easing:{  
			      $Left:$JssorEasing$.$EaseInWave,
			      $Zoom:$JssorEasing$.$EaseInSine
			   },
			   $Opacity:2,
			   $ZIndex:-10,
			   $Brother:{  
			      $Duration:1000,
			      x:-0.25,
			      $Zoom:1.5,
			      $Easing:{  
			         $Left:$JssorEasing$.$EaseInWave,
			         $Zoom:$JssorEasing$.$EaseInSine
			      },
			      $Opacity:2,
			      $ZIndex:-10
			   }
			}
		];
		// Jssor options and defintions can be found here (http://www.jssor.com/development/reference-options.html)
		var options = {
		    $AutoPlay: true, 								// Automatically start slideshow
		    $AutoPlayInterval: 7500, 						// 7.5 second between transitions
		    $DragOrientation: 0,							// Do not allow dragging

		    $SlideshowOptions: {                            
		        $Class: $JssorSlideshowRunner$,             // Default, required
		        $Transitions: _SlideshowTransitions			// Transition options set above
		    },

		    $BulletNavigatorOptions: {                            
		        $Class: $JssorBulletNavigator$				// Default, required
		    },

		    $CaptionSliderOptions: {                        
		        $Class: $JssorCaptionSlider$,          		// Default, required     
		        $CaptionTransitions: _CaptionTransitions,   // Transitions options set above
		        $PlayInMode: 1,                             // 1: will show first captions and then show second and so on
		        $PlayOutMode: 3                             // 3: removes all captions at the same time
		    },

		    $ArrowNavigatorOptions: {
		        $Class: $JssorArrowNavigator$           	// Default, required
		    }
		};
		// Start slideshow with set options
		var jssor_slider1 = new $JssorSlider$("slideshow-box", options);
	
}]);