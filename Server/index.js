const http=require("http");
// const fs=require("fs");
// const url=require("url");

const express = require("express");


// const myHaqndler=(req,res)=>{
//      const log=`Date :${Date.now()} :${req.url}  ${req.method} New requet recived\n` ;
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl);
//      if(req.url ==="/favicon.ico") return res.end();
//     fs.appendFile("log.txt",log,(err,data)=>{
//        // console.log("New request recivesd");
//    // console.log(req);
//     // res.end("Hello from the server!");
//     switch(myUrl.pathname){
       
//         case "/":
//             if(req.method ==="GET"){
//                  res.end("Hello from the server! Home Page");

//             }
           
//             break;
//             case "/about":
//                 const username=myUrl.query.myname
//                 res.end(`Hey ${username}`);
//                 break;
//                 case "/search":
//                     const search =myUrl.query.search_query;
//                     res.end(`You searched for ${search}`);
//                     break;

//                     case "/signup":
//                     if(req.method ==="GET"){
//                         res.end("This is the signup page"); 
//                         break;
//                     }
//                     else if(req.method ==="POST"){
//                         //db query to save the data
//                         req.end("Success");

//                     }

//                      default:
//                     res.end("404 Not Found");
//                     break;


//     }
    
// });

// }
//Before we were using the node now we are using express Nad doing ssame work
const app=express();
app.get("/",(req,res)=>{
    return res.send("Hello from the server! Home Page");
})
app.get("/about",(req,res)=>{
   return res.send("hello from About Page "+req.query.myname);
}) 
app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})

// const myServer=http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("Server is running on port 8000");
// });