(function() {
        "use strict"
    
    let plr = "";

    const func = {
        webpack_inject: (w, e, get) => {
            plr = get("0d807371");
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

    plr.players["m9_01"].path = plr.players["flare_gun_01"].path;
})()
