const express = require("express");
const users=require("./MOCK_DATA.json")
const app = express();
const Port = 8000;

app.get("/users", (req,res)=>{
  return res.json((users))
})

app.listen(Port, () => {
  console.log(`Server started at Port : ${Port}`);
});
