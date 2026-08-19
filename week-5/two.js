const fs=require('fs');
const reader=fs.createReadStream("input.txt");
reader.on("data",(chunk)=>{
    console.log(chunk);
});
reader.on("end",()=>{
    console.log("Reading Completed");
});