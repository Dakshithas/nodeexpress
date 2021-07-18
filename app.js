const express = require("express")
const fs=require('fs');
const app=express();


// app.get('/',(req,res)=>{
//     res
//     .status(200)
//     .json({message:'Hello I"m server', author:'Dakshitha'})
// })
// app.post('/',(req,res)=>{
//     res
//     .status(200)
//     .json({message:'error'})
// })
const path=`${__dirname}/dev-data/data/tours-simple.json`
const tours=JSON.parse(fs.readFileSync(path))


app.get('/api/v1/tours/:id?/:x?/:y?',(req,res)=>{
    const tour=tours.find(el=>el.id===req.params.id*1)
    console.log(tour)
    if(!tour){
        res
    .status(404)
    .json({
        status:'unsuccess',
        result:0,
        data:{}
    })
    }
    res
    .status(200)
    .json({
        status:'success',
        result:tours.length,
        data:{tour}
    })
})
app.patch('/api/v1/tours/:id?',(req,res)=>{
    res.status(200).json({
        status:'success',
        data:{
            tour:'<Updated tour here...>'
        }
    })
})


app.delete('/api/v1/tours/:id',(req,res)=>{
    const tour=tours.find(el=>el.id===req.params.id*1)
    if(!tour){
        res
    .status(404)
    .json({
        status:'fail',
        message:'Invalid ID'
    })
    }
    res
    .status(204)
    .json({
        status:'success',
        data:null
    })
})

const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})