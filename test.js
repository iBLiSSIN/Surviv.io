(function() {
        'use strict';
    
    let gun = "";
    
    const func = {
        webpack_inject: (w, e, get) => {
            gun = get("0d807371");
        },
    };
    if(typeof window.webpackJsonp === 'function') {
        window.webpackJsonp([0], func, ["webpack_inject"]);
    } else {
        window.webpackJsonp.push([
            ["webpack_inject"],
            func,
            [["webpack_inject"]]
        ]);
    }
        
    gun.players["m9_01"].path = "audio/guns/scout_01.mp3";

})
