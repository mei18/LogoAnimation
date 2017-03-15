
var tm = new TimelineMax();

tm.staggerTo(".logoC", 1, {rotation:360, y:20}, 0.5);
tm.staggerTo(".eachLine", 1, {rotation:360, y:2}, 0.1);
tm.from(".textU1", 0.5, {xPercent: -500,opacity:0, ease:Power1.easeOut});
tm.from(".textU2", 0.5, {xPercent: +500,opacity:0, ease:Power1.easeOut});
tm.from(".letterC", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterE", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterN", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterF", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterO", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterT", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterE2", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".letterC2", 0.2, {opacity:0, ease:Power3.easeOut});
tm.from(".textTD",2, {opacity:0, ease:Power2.easeIn});
tm.from(".letterZ", 1, {opacity:0, ease:Power3.easeOut, repeat:-1, yoyo:true});
