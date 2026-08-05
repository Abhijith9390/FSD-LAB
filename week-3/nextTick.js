console.log("starting");
setImmediate(function(){
    console.log("immediate");
});
setTimeout(function(){
    console.log("timeout");
},1000);
const interval=setInterval(function(){
    console.log("repeated");
},2000);
setTimeout(()=>{
    clearInterval(interval);
    console.log("Interval cleared");
},10000);
process.nextTick(function(){
    console.log("next tick");
});
process.nextTick(function(){
    console.log("next tick2");
});
console.log("ending");