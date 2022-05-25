gsap.registerPlugin(ScrollTrigger);

gsap.to(".btn", {
    scrollTrigger: {
        trigger: ".btn",
        toggleActions: "restart pause none none"
    },
    x:400,
    rotation:360,
    duration:3
})