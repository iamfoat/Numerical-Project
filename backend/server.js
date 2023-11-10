const cors = require("cors")
const bodyParser = require("body-parser")

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(cors());

app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'numer',
    port: 3306
})

connection.connect((err) => {
    if (err) {
        console.log('eror', err);
        return;
    }
    console.log('MySQl successfully connected');
})

app.get('/example', (req, res)=>{ connect.query("SELECT * FROM bisection",(err, result)=>{ 
    if(err){
        console.error(err)
    }
    else{
        res.send(result)
    }
})
})



app.listen(3001, () => console.log('Server is run'));