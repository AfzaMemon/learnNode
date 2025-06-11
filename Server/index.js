const http=require("http");
const fs=require("fs");
const url=require("url");

const myServer=http.createServer((req,res) =>{
    const log=`Date :${Date.now()} :${req.url} New requet recived\n` ;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
     if(req.url ==="/favicon.ico") return res.end();
    fs.appendFile("log.txt",log,(err,data)=>{
       // console.log("New request recivesd");
   // console.log(req);
    // res.end("Hello from the server!");
    switch(myUrl.pathname){
       
        case "/":
            res.end("Hello from the server! Home Page");
            break;
            case "/about":
                const username=myUrl.query.myname
                res.end(`Hey ${username}`);
                break;
                default:
                    res.end("404 Not Found");
                    break;


    }
    
});
});
myServer.listen(8000,()=>{
    console.log("Server is running on port 8000");
});