

import {gsap} from "gsap";


var smileySpeed = .8;

var tl = gsap.timeline({repeat: -1, repeatDelay: .05});


tl.to(".smiley-face", {
    duration: smileySpeed,
    y: -50,
    scaleX:1
});

tl.to(".smiley-face", {
    duration: .5,
    y: 360,
    x: 405,
    scaleX: 1.2
});

tl.to(".smiley-face", {
    duration: smileySpeed,
    y: -50,
    scaleX:1
});

tl.to(".smiley-face", {
    duration: .5,
    y: 360,
    x: 405,
    scaleX: 1.2
});

tl.to(".smiley-face", {
    duration: smileySpeed,
    y: -50,
    scaleX:1
});

tl.to(".smiley-face", {
    duration: .5,
    y: 360,
    x: 405,
    scaleX: 1.2
});
