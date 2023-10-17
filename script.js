
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotive()
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 .text h1",
        scroller: "#main",
        start:'top 30%',
        end :'top -30%',
        scrub: 3,

    }
})
gsap.from('.page1 .text h1,h2',{
  opacity:0,
  y : 40,
 
})
tl.to('.page1 .text h1',{
    x:-100,
    duration:1,
   
},"anim")
tl.to('.page1 .text h2',{
    x:100,
    duration:1,
   
},"anim")
tl.to('.page1 .video video',{
    width:"90% ",
    duration:1,
   
},"anim")

let tl2 = gsap.timeline({
  scrollTrigger:{
      trigger: ".page1 .text h1",
      scroller: "#main",
      start:'top -80%',
      end :'top -210%',
      scrub: 3,
  }
})
tl2.to(".page1 , .page2",{
  backgroundColor:"#FFF"
})
