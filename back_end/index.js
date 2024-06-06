import express from "express";
import bodyParser from "body-parser";
import {connectToDb, getDb} from "./db.js";


const app = express();
const port = 3000;
let db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//expenses
app.get("/expenses", async (req, res) => {
 let expenses=[];
 db.collection('Expenses')
 .find().sort({date:-1}).forEach(expense =>expenses.push(expense))
 .then(()=>{
    res.status(200).json(expenses);
 })
 .catch(()=>{
    res.status(500).json({ error: 'Can not get' });
 })
});

app.post("/expenses", async (req, res) => {
    let expenses=req.body;

    db.collection('Expenses')
    .insertOne(expenses)
    .then((r)=>{
       res.status(201).json(r);
    })
    .catch((err)=>{
       res.status(500).json({ error: err });
    })
   });

app.delete("/expenses:id", async (req, res) => {
    db.collection('Expenses')
    .deleteOne(req.params.id)
    .then((r)=>{
       res.status(201).json(r);
    })
    .catch((err)=>{
       res.status(500).json({ error: err });
    })
   });

//income
app.get("/incomes", async (req, res) => {
    let incomes=[];
    db.collection('Income')
    .find().sort({date:-1}).forEach(income =>incomes.push(income))
    .then(()=>{
       res.status(200).json(incomes);
    })
    .catch(()=>{
       res.status(500).json({ error: 'Can not get income' });
    })
   });
   
   app.post("/incomes", async (req, res) => {
       let income=req.body;
       db.collection('Income')
       .insertOne(income)
       .then((r)=>{
          res.status(201).json(r);
       })
       .catch((err)=>{
          res.status(500).json({ error: err });
       })
      });

app.delete("/incomes:id", async (req, res) => {
        db.collection('Income')
        .deleteOne(req.params.id)
        .then((r)=>{
           res.status(201).json(r);
        })
        .catch((err)=>{
           res.status(500).json({ error: err }); 
        })
       });


// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
//   });

connectToDb ((err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
          })
          db=getDb();
    }
})