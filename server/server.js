const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors());
app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.json({limit:'10mb'}));

let db = sqlite3.Database('credentials.db', (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connected to the access database.');
});

app.post('/DataManagement', (req, res) => {
    const { username, password } = req.body;

    db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, row) => {
        if(err){
            throw err;
        }
        if(row.length >0){
            res.send({validation:true})
        } else {
            res.send({validation:false})
        }
    })
});

app.listen(3001, () => console.log('Listening at port 3001'));