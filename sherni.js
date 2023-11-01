var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+"px" 
   crsr.style.top=dets.y+"px"
   blur.style.left=dets.x - 250 +"px"
   blur.style.top=dets.y- 250 +"px"
})


gsap.to("#nav",{
backgroundColor :"green",
duration:0.5,
deley:1,
height:"120px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    
    start:"top -10%",
    end:"top -11%",
    scrub:1,

    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})