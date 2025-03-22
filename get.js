const product = require("./learn");
const a = new product("thetniang",0,400000);
const fet = require("./api/api");
const b = a.cartbuy(6);
console.log(b)
const bb = new product("thet naing tun",4500,4500);
const c = bb.discount(4);
console.log(c)
const fe = new fet("",{name:"thet naing tun"});

fe.get().then((d)=>{
    console.log(d)`console.log(s)`
    const what = 434;const ls = "gfdsdf";
})
