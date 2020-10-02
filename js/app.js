//Jquery//
var gqTl = new TimelineMax({paused:true});
gqTl
	.staggerFromTo(".fingerprint path", 1,{autoAlpha: 0}, {autoAlpha: 1}, 0.1);

// Hover events
$(document).on("mouseenter", ".hover", function(){
  
  gqTl.play();
  
}).on("mouseleave", ".hover", function(){
  
   gqTl.reverse();
  
});