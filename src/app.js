const express = require("express");
require("../src/db/conn");
const menRouter = require('./routers/men')

const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(menRouter)

// app.get("/", async(req, res) => {
//     res.send("Hello from Manmeet")
// })

// // We will handle post request
// app.post("/mens", async(req, res) =>{
//     try{
//         const addingMensRecords = new MensRanking(req.body);
//         console.log(req.body);
//         const insertMens = await addingMensRecords.save();
//         res.status(201).send(insertMens);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// // we will handle get request
// app.get("/mens", async(req, res) =>{
//     try{
//         const getMens = await MensRanking.find({}).sort({"ranking": 1});
//         res.status(400).send(getMens);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })


// // we will handle get request by individual
// app.get("/mens/:id", async(req, res) =>{
//     try{
//         const _id = req.params.id;
//         const getMen = await MensRanking.findById(_id);
//         res.status(400).send(getMen);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// // we will handle patch request by individual
// app.patch("/mens/:id", async(req, res) =>{
//     try{
//         const _id = req.params.id;
//         const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
//             new: true,
//             runValidators: true
//         });
//         res.status(200).send(getMen);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// // we will handle deleter request
// app.delete("/mens/:id", async(req, res) =>{
//     const id = req.params.id;
//     if(!id){
//         return res.status(400).send({error: "Missing Id"});
//     }
//     try{
//         const deleteMen = await MensRanking.findByIdAndDelete(id);
//         if(!deleteMen){
//             return res.status(404).send({error: "NOT FOUND"});
//         }
//         res.send(deleteMen);
//     }catch(e){
//         res.send(400).send(e);
//     }
// })


app.listen(port, () =>{
    console.log(`Connection is live at port no ${port}`);
})