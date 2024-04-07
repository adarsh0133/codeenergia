const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

// loco()

gsap.fromTo("#box1",{
    top:"115%"
},{
    top:"-8%",
    duration:2,
    delay:.5,
    ease: "power4.inOut",
})
gsap.fromTo("#box2",{
    top:"120%"
},{
    top:"25%",
    duration:2,
    delay:.6,
    ease: "power4.inOut",
})
gsap.fromTo("#box3",{
    top:"150%"
},{
    top:"60%",
    duration:2,
    delay:.7,
    ease: "power4.inOut",
})
gsap.fromTo("#box4",{
    top:"180%"
},{
    top:"95%",
    duration:2,
    delay:.8,
    ease: "power4.inOut",
})
gsap.to("#box1",{
    top:"-70%",
    width:"60%",
    height:"60vh",
    duration:2,
    delay:1.9,
    ease: "power4.inOut",
})
gsap.to("#box2",{
    top:"-50%",
    width:"60%",
    height:"60vh",
    duration:2,
    delay:1.9,
    ease: "power4.inOut",
})
gsap.to("#box3",{
    y:26,
    width:"80%",
    height:"73vh",
    duration:2,
    delay:1.9,
    ease: "power4.inOut",
})
gsap.to("#box4",{
    width:"60%",
    height:"50vh",
    duration:2,
    delay:1.9,
    ease: "power4.inOut",
})


gsap.fromTo("#box5,#box9",{
    top:"-115%",
},{
    top:"100%",
    duration:2,
    delay:.5,
    ease: "power4.inOut",
})
gsap.fromTo("#box6,#box10",{
    top:"-120%",
},{
    top:"65%",

    duration:2,
    delay:.6,
    ease: "power4.inOut",
})
gsap.fromTo("#box7,#box11",{
    top:"-150%",
},{
    top:"30%",

    duration:2,
    delay:.7,
    ease: "power4.inOut",
})
gsap.fromTo("#box8,#box12",{
    top:"-180%",
},{
    top:"-5%",
    duration:2,
    delay:.8,
    ease: "power4.inOut",
})

gsap.to("#box5",{
    top:"110%",
    width:"30%",
    left:"-20%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box6",{
    top:"80%",
    width:"30%",
    left:"-20%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box7",{
    top:"40%",
    width:"30%",
    left:"-20%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box8",{
    top:"0%",
    width:"30%",
    left:"-20%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})

gsap.to("#box9",{
    top:"110%",
    width:"30%",
    left:"120%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box10",{
    top:"80%",
    width:"30%",
    left:"120%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box11",{
    top:"40%",
    width:"30%",
    left:"120%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})
gsap.to("#box12",{
    top:"0%",
    width:"30%",
    left:"120%",
    height:"40vh",
    duration:2,
    delay:2,
    ease: "power4.inOut",
})

gsap.to("#box1 img,#box2 img,#box3 img,#box4 img,#box5 img,#box6 img,#box7 img,#box8 img,#box9 img,#box10 img,#box11 img,#box12 img",{
    scale:1,
    duration:3,
    delay:2,
})
gsap.to("#box3child1",{
    y:"-130%",
    duration:1,
    delay:2
})
gsap.fromTo("#box3child1 img",{
    y:-265
},{
    y:0,
    duration:1,
    delay:2
})
gsap.to("#box3child2",{
    y:"-130%",
    duration:1,
    delay:3
})
gsap.fromTo("#box3child2 img",{
    y:-750
},{
    y:0,
    duration:1,
    delay:3
})

gsap.to("#box4",{
    opacity:0,
    display:"none",
    duration:1,
    delay:2.5
})
const showAnim = gsap.from('#nav', {
    y: -140,
    paused: true,
    duration: 0.5,
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: "bottom -2000%",
    onUpdate: (self) => {
        if(self.direction === -1){
            showAnim.play()
        }else{
            showAnim.reverse()
        }
    }
});
gsap.from("#nav",{
    y: -200,
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 4
})
gsap.from("#page1",{
    opacity:0,
    display:"none",
    duration:1,
    delay: 5
})

var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 })

tl
.to(".slide-cover:nth-child(1)",{
    rotate: "-90deg",
    left: "-115%",
    width: "10vw",
    height: "35vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 10,
}, "same")
.to(".slide-cover:nth-child(1) img",{
    rotate: "90deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 10,
    height: "50vh",
}, "same")
.to(".slide-cover:nth-child(2)",{
    rotate: "-90deg",
    left: "-17.75%",
    height: "26vw",
    width: "68vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 10,
}, "same")
.to(".slide-cover:nth-child(2) img",{
    rotate: "90deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 10,
    width: "26vw",
    height: "68vh",
}, "same")
.to("#options h3:nth-child(1)",{
    opacity: "0.5",
    delay: 10.5,
    duration: 1
}, "same")
.to("#options h3:nth-child(2)",{
    opacity: "1",
    delay: 10.5,
    duration: 1
}, "same")
.to(".slide-cover:nth-child(2)",{
    rotate: "-180deg",
    left: "-131%",
    height: "10vw",
    width: "35vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
}, "same1")
.to(".slide-cover:nth-child(2) img",{
    rotate: "180deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    height: "50vh",
}, "same1")
.to(".slide-cover:nth-child(3)",{
    rotate: "-90deg",
    left: "-17.75%",
    height: "26vw",
    width: "68vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    zIndex: "99999"
}, "same1")
.to(".slide-cover:nth-child(3) img",{
    rotate: "90deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    width: "26vw",
    height: "68vh",
}, "same1")
.to("#options h3:nth-child(2)",{
    opacity: "0.5",
    delay: 2.5,
    duration: 1
}, "same1")
.to("#options h3:nth-child(3)",{
    opacity: "1",
    delay: 2.5,
    duration: 1
}, "same1")
.to(".slide-cover:nth-child(3)",{
    rotate: "-180deg",
    left: "-131%",
    height: "10vw",
    width: "35vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
}, "same2")
.to(".slide-cover:nth-child(3) img",{
    rotate: "180deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    height: "50vh",
}, "same2")
.to(".slide-cover:nth-child(4)",{
    rotate: "-90deg",
    left: "-17.75%",
    height: "26vw",
    width: "68vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    zIndex: "99999"
}, "same2")
.to(".slide-cover:nth-child(4) img",{
    rotate: "90deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    width: "26vw",
    height: "68vh",
}, "same2")
.to("#options h3:nth-child(3)",{
    opacity: "0.5",
    delay: 2.5,
    duration: 1
}, "same2")
.to("#options h3:nth-child(4)",{
    opacity: "1",
    delay: 2.5,
    duration: 1
}, "same2")
.to(".slide-cover:nth-child(4)",{
    rotate: "-180deg",
    left: "-131%",
    height: "10vw",
    width: "35vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
}, "same3")
.to(".slide-cover:nth-child(4) img",{
    rotate: "180deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    height: "50vh",
}, "same3")
.to(".slide-cover:nth-child(5)",{
    rotate: "-90deg",
    left: "-17.75%",
    height: "26vw",
    width: "68vh",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    zIndex: "99999"
}, "same3")
.to(".slide-cover:nth-child(5) img",{
    rotate: "90deg",
    duration: 2,
    ease: "Expo.easeInOut",
    delay: 2,
    width: "26vw",
    height: "68vh",
}, "same3")
.to("#options h3:nth-child(4)",{
    opacity: "0.5",
    delay: 2.5,
    duration: 1
}, "same3")
.to("#options h3:nth-child(5)",{
    opacity: "1",
    delay: 2.5,
    duration: 1
}, "same3")

gsap.to("#p4-circle",{
    scrollTrigger:{
        trigger: "#page5",
        start: "top top",
        scrub: 1,
        end: "+=" + (window.innerHeight * 2),
        pin:true,
    },
    transform:" translate(-50%,0%) rotate(-131deg)"
})

var counter = 1
document.querySelector("#right h3 span").textContent = '0'+counter+'/05'
document.querySelector("#center>span").textContent = '0'+counter+'/05'
const changeValue = () => {
    if(counter<5){
        counter++
        document.querySelector("#center>span").textContent = '0'+counter+'/05'
        document.querySelector("#right h3 span").textContent = '0'+(counter+1)+'/05'
    }else{
        counter=1
        document.querySelector("#center>span").textContent = '0'+counter+'/05'
        document.querySelector("#right h3 span").textContent = '0'+counter+'/05'
    }
}
setTimeout(() => {
    setInterval(() => {
        changeValue()
    }, 4200);
}, 6600);