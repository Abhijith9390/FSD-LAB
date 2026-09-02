const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.write("<h1>HI WELCOME TO SERVER......!</h1>");
    res.end();
});
server.listen(3000,()=>{
    console.log("server is running at prt 3000");
});