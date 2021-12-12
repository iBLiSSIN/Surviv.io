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
        
    gun["mp5"].worldImg.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";

})
