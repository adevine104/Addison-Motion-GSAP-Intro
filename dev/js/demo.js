

import {gsap} from "gsap";


var smileySpeed = .8;

var tl = gsap.timeline({repeat: -1, repeatDelay: .05});


tl.to(".box", {
    duration: .03,
    y: 0,
    scaleX:1
});

tl.to(".box", {
    duration: .5,
    y: -360,
    scaleX: 1
});

tl.to(".box", {
    duration: smileySpeed,
    y: 0,
    scaleX:1.2
});

tl.to(".box", {
    duration: .5,
    y: -360,
    scaleX: 1
});

tl.to(".box", {
    duration: smileySpeed,
    y: 0,
    scaleX:1.2
});

tl.to(".box", {
    duration: .5,
    y: -360,
    scaleX: 1
});


tl.to(".box", {
    duration: smileySpeed,
    y: 0,
    scaleX:1.2
});
