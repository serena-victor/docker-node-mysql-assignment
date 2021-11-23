const express = require('express');
const mysql = require('mysql')

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

const database = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'test1234',
    database: 'node_app'
});

app.get('/', (req, res) => {

    const create_db = 'create database if not exists node_app'
    const use_db = 'use node_app'
    const create_table = 'create table if not exists hits(id int auto_increment, primary key(id))'
    database.query(create_db, (err) => {
        if (err) throw err;
    });
    database.query(use_db, (err) => {
        if (err) throw err;
    });
    database.query(create_table, (err) => {
        if (err) throw err;
    });

    const update_value = 'insert into hits values()'
    database.query(update_value, (err) => {
        if (err) throw err;
    });
    
    const get_value = 'select id from hits order by id desc limit 1;'
    database.query(get_value, (err, result, fields) => {
        if (err) throw err;
        res.json("this page as been seen : "+result[0].id+" times")
    });


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);