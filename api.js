const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();   

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.get('/experts', (req, res)=>{
    client.query(`Select * from experts`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/experts/:id', (req, res)=>{
    client.query(`Select * from experts where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/experts', (req, res)=> {
    const expert = req.body;
    console.log(expert)
    let insertQuery = `insert into experts(id, firstname, lastname, expertise, experience, ratings, photo) 
                       values(${expert.id}, '${expert.firstname}', '${expert.lastname}', '${expert.expertise}', ${expert.experience}, ${expert.ratings}, '${expert.photo}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/experts/:id', (req, res)=> {
    let expert = req.body;
    let updateQuery = `update experts
                       set firstname = '${expert.firstname}',
                       lastname = '${expert.lastname}',
                       expertise = '${expert.expertise}',
                       experience = ${expert.experience},
                       ratings = ${expert.ratings}
                       where id = ${expert.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/experts/:id', (req, res)=> {
    let insertQuery = `delete from experts where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})