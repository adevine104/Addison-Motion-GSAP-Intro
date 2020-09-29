// import * as Demo from './demo.js';

// console.log(Demo);

import {gsap} from "gsap";

import {smileyAnimation} from "./smiley-face.js"
// import {blueBoxAnimation} from "./blueBox.js"


const mainTL = gsap.timeline({paused:true});

    mainTL.add(smileyAnimation())
        //.addLabel("orange")
        // .add(orangeBoxAnimation())
        .play();

