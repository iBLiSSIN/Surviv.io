(function() {
        'use strict';
    
    let gun = "";
    
    const func = {
        webpack_inject: (w, e, get) => {
            gun = get("ad1c4e70");
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
    Object.keys(gun).forEach(function(key) {
        if(gun[key].type === "gun") {
            gun[key].lootImg.sprite = "";
        }
    })

})
