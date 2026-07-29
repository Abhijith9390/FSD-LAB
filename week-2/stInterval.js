function hi(){
    console.log("Hello\n");
}

let i=setInterval(hi,2000);
setTimeout(() => {
    clearInterval(i);
}, 7000);