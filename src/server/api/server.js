const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('../database/dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Welcome')
})

server.get('/strutture', async (req, res) => {
    //GET STRUTTURE
    try{
        const strutture = db('strutture');
        res.json(strutture);
    } catch(err){
        console.log(err);
    }
})

server.post('/strutture', (req, res) => {
    //POST A STRUCTURE
})



//Nessuna funzione per aggiornare o eliminare strutture al momento
server.put('/strutture', (req, res) => {
    //UPDATE A STRUCTURE
})

server.delete('/strutture', (req, res) => {
    //DELETE A STRUCTURE
})

module.exports = server;