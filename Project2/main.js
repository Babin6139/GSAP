// gsap.to(".logo",{duration:2,x:300,backgroundColor:"#124563",border:"5px solid white",borderRadius:"10%",ease:"bounce"})

//Adding second object
// gsap.set(".logo,.autocad",{transformOrigin:"50% 50%"})
// gsap.to(".logo,.autocad",{duration:20, rotation:360})

//GSAP appearances
// gsap.from(".logo",{duration:1.5, opactiy:0, scale:0.5, ease:"back"})

//Multiple object synchronization
//gsap.from(".circle",{duration:1, opacity:0, y:"random(-200,200)", stagger:0.25})

//Advanced synchronization
var tl=gsap.timeline({repeat:2})
tl.from(".logo",{duration:1.5, opacity:0,scale:0.3,ease:"back"})
tl.to(".logo",{duration:1,rotation:360})
tl.from(".circle",{duration:1,opacity:0,delay:1.5,y:150,stagger:0.25},"+=1")