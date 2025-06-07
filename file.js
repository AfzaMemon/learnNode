const fs=require("fs");

//fs.writeFileSync("test.txt","Hello, this is a test file created using Node.js fs module.");
//fs.writeFile("test.txt","Hello, this is a test file created using Node.js fs module. Async",err=>{})
//sync function can stire in variable and can return but without sysnc that is async will not return any thing
//infact with async funcyion u have to write the callback function
const result =fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

fs.readFile("./contacts.txt","utf-8",(err,data)=>{
    if(err){
console.log("Error reading file:", err);
    }
    else{
console.log("Async read:", data);
    }
})

//Append adding data in last it will not override file as Writefile is dsoing
fs.appendFileSync("test.txt",`${Date.now()} Afza Memon  `+"\n");
//copy file
fs.cpSync("test.txt","copyTest.txt");
//delete file
fs.unlinkSync("./copyTest.txt");

//statsync is a synchronous function that returns an object with information about the file
console.log(fs.statSync("test.txt"));