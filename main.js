const express = require('express');
require('./config');
const Product=require('./schema');
const app=express()
app.use(express.json());

app.post("/create", async(req, res)=>{
    let data = new Product(req.body);
    let result = await data.save();
console.log(result)
res.send(result);
});

app.put("/update/:_id", async(req, res)=>
{
    console.log(req.params)
     let data = await Product.updateOne( req.params, {$set:req.body}
);

res.send(data);
})

app.delete("/delete/:id",async(req,res) =>{
    let data = await Product.deleteOne(req.params)
    console.log(req.params)
    res.send("done");
})

app.listen(8080);