(function() {
        "use strict"
    
    let meleeType = "";

    const func = {
        webpack_inject: (w, e, get) => {
            meleeType = get("ccb6ad93");
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
    };

    meleeType.o.knuckles.worldImg.sprite = meleeType.o.karambit.worldImg.sprite;
})()
