const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const path=require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'client/build')));
// gatting all route
const router=require("./router");
//use all router
app.use(router);
const PORT=process.env.PORT||3004;

app.get("*",(req,res)=>{ 
res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT,()=>{
console.log(`server>>Listning to the port:${PORT}`)
})