// ==UserScript==
// @name         Remove Unnecessary Bubbles on Google
// @namespace    Gaggol
// @version      1.0.0
// @description  Only show Video, Images & More button (If Available)
// @author       Gaggol
// @grant        none
// @match      *://*.google.com/*
// ==/UserScript==


(function() {
    'use strict';
    var keepBoxes = ["Videos", "Images", "Filters and topics", "Search Modes", "All", "More"]
    var findH = ["Filters and topics", "Search Modes"]

    function loop(loopAmount) {
        setTimeout(function() {
            var x = document.getElementsByTagName("h1");
            for(var i = 0; i < x.length; i++) {
                if(findH.includes(x[i].textContent)) {
                    var childElements = x[i].parentNode.children;
                    for(var j = 0; j < childElements.length; j++) {
                        if(!keepBoxes.includes(childElements[j].textContent)) {
                            if(childElements[j].tagName != "SPAN") {
                                childElements[j].remove()
                            }
                        }
                    }
                }
            }
            if(--loopAmount) loop(loopAmount);
        }, 50);
    }
    loop(20);

})();
