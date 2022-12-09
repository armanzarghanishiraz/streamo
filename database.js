const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'StreamoDataBase',
});

app.post('/register', (req,res) => {
    const name = req.body.email;
    const email = req.body.email;
    const pass = req.body.pass;

    db.query(
        "INSERT INTO registration (name, email, pass) VALUES (?, ?, ?)", 
        [req.body.name, req.body.email, req.body.pass], (err, result) => {
            console.log(err);
        }
    )
})

app.post('/sign-in', (req, res) => {
    const name = req.body.name
    const email = req.body.email;
    const pass = req.body.pass;

    db.query(
        "SELECT * FROM registration WHERE email = ? AND pass = ?",
        [req.body.email, req.body.pass],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }

            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({message: "Wrong email/password combination"})
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});