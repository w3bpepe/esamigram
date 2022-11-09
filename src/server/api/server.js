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
        const strutture = await db('strutture');
        res.json(strutture);
    } catch(err){
        console.log(err);
    }
})

server.post('/strutture', async (req, res) => {
    //POST A STRUCTURE
    const struttura  = req.body;
    if(!struttura){
        return res.status(400).json({message:'inserisci la struttura'});
    }
    try{
        await db('strutture').insert(struttura);
        res.status(201).json({message: 'struttura aggiunta'})
    }catch(err){
        console.log(err);
    }
})



//Nessuna funzione per aggiornare o eliminare strutture al momento
server.put('/strutture', (req, res) => {
    //UPDATE A STRUCTURE
})

server.delete('/strutture', async (req, res) => {
    //DELETE ALL STRUCTURES, FUNZIONALE PER RIPULIRE DB E RIPOPOLARE DURANTE LE PROVE
    try{
        await db('strutture').del();
        res.status(201).json({message: 'strutture eliminate'})
    }catch(err){
        console.log(err);
    }
})

module.exports = server;