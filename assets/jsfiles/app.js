window.onload = function(){


this.setTimeout(function(){
  $(".animation-pieces img").css("opacity","1")
  var tl = gsap.timeline();
tl.from(".img1", {rotation: 360, x: 1400, y:-800, duration: 1.2, ease: Back.easeOut.config(1.7)})
  .from(".img2", {rotation: 720, x: 1200, y:1500, duration: 1.5, ease: Back.easeOut.config(1.7)})
  .from(".img3", {rotation: 360, x: 1400, y:-1000, duration: 1, ease: Back.easeOut.config(1.7)})
  .from(".img4", {rotation: 1080, x: 1400, y:1000, duration: 1.5, ease: Back.easeOut.config(1.7)})
},1000)  
}