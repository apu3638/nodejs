const express =require("express");
const app = express();
app.get("/",function(res, res){
    res.send("Hello from docker");
});
app.listen(3000, function(){
    console.log("app listeningon 3000");
});
