setTimeout(function(){
    console.log("Hello");
},1000);

const interval=setInterval(function(){
    console.log("repeated");
},2000);

setTimeout(()=>{
    clearInterval(interval);
    console.log("Interval cleared");
},10000);