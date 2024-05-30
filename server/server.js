const express = require('express');
const app = express();
const cors = require('cors');
const { all } = require('axios');
const sqlite3 = require('sqlite3').verbose();


app.use(cors());

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.json({limit:'10mb'}));

const db = new sqlite3.Database('credentials.db', sqlite3.OPEN_READONLY, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Connected to the access database.');
});

//LOGIN

// app.post('/DataManagement', (req, res) => {
//     const { username, password } = req.body;

//     db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, row) => {
//         if(err){
//             throw err;
//         }
//         if(row.length >0){
//             res.send({validation:true})
//         } else {
//             res.send({validation:false})
//         }
//     })
// });

// app.listen(5173, () => console.log('Listening at port 5173'));

//DATA MANAGEMENT

db.get('/credentials', (req, res) => {
        // const {username, password} = req.body;
        // db.each(`select * from credentials`, (err, row) => {
        //     if(err){
        //         console.error(err.message);
        //     }
        //     console.log(row.username + "\t" + row.password);
        // });

        db.all('select * from users');
    }
);
