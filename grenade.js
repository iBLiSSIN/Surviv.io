(function() {
        "use strict"
    
    let throwable = "";

    const func = {
        webpack_inject: (w, e, get) => {
            throwable = get("035f2ecb");
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

    throwable.frag.handImg.equip.right.scale = .05;
    throwable.frag.handImg.equip.right.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";
    throwable.frag.lootImg.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";
    throwable.frag.worldImg.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";
    throwable.frag.handImg.equip.cook.right.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";
    throwable.frag.handImg.equip.throwing.right.sprite = "https://image.flaticon.com/icons/png/512/3226/3226191.png";
})()
