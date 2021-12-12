(function() {
    'use strict';
 
let shits = "";
 
const func = {
    webpack_inject2: (w, e, get) => {
        shits = get("03f4982a");
    },
};
 
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject2"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject2"],
        func,
        [["webpack_inject2"]]
    ]);
}
    
Object.keys(shits).forEach(function(key2) {
    if(key2.match(/tree/g)) {
        shits[key2].img.sprite = "https://surviv.io/img/map/map-tree-res-02.svg";
    } else if(key2.match(/bush/g)) {
        shits[key2].img.scale = 0.16;
    } else if(key2.match(/table/g)) {
        shits[key2].img.sprite = "";
    }
})
})()
