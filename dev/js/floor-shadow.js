import {gsap} from "gsap";
import {smileySpeed} from "./animationSpeed.js"
import {smileySpeed2} from "./animationSpeed.js"

export function shadowAnimation(){

    var tl = gsap.timeline({repeat: -1, repeatDelay: .05});


    tl.to("#smiley-floor-shadow", {
        duration: smileySpeed,
        y: 0,
        scaleX:.85
    });

    tl.to("#smiley-floor-shadow", {
        duration: smileySpeed2,
        scaleX: 1
    });

    tl.to("#smiley-floor-shadow", {
        duration: smileySpeed,
        scaleX:.85
    });

    tl.to("#smiley-floor-shadow", {
        duration: smileySpeed2,
        scaleX: 1
    });

    return tl;

}