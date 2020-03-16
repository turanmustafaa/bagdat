window.onload = function(){


this.setTimeout(function(){

  $(".animation-pieces img").css({
    "opacity" :"1",
  });
  $("#fade-word").css("opacity","1").addClass("scaleanimation");
  $("#fade-word2 span").addClass("addTextDecoration");
  var tl = gsap.timeline();
tl.from(".img1", {rotation: 360, x: 1400,  duration: 1.2, ease: Back.easeOut.config(1.7)})
  .from(".img2", {rotation: 720, x: 1200,  duration: 1.5, ease: Back.easeOut.config(1.7)})
  .from(".img3", {rotation: 1080, x: 1400,  duration: 1, ease: Back.easeOut.config(1.7)})
  .from(".img4", {rotation: 1440, x: 1400, duration: 1.5, ease: Back.easeOut.config(1.7)})
},1000)  
}