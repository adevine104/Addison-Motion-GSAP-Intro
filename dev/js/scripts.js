// import * as Demo from './demo.js';

// console.log(Demo);

import {gsap} from "gsap";

import {smileyAnimation} from "./smiley-face.js"
import {shadowAnimation} from "./floor-shadow.js"


const mainTL = gsap.timeline({paused:true});

    mainTL.add(smileyAnimation(),"startAll")
        .add(shadowAnimation(),"startAll")
        .play();



