import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormLabel, FormControl } from "react-bootstrap";

function AddForm( { setOspedali, ospedali }) {
    /*struttura: stato determinato dalla struttura che si sta inserendo */
    const [struttura, setStruttura] = useState({
        Nome: '',
        Regione: '',
        Città: '',
        numero: '',
        esami: ['']
    });

    /*esami: stato per gestire più facilmente gli esami e dare la possibilità di aggiungerne
    quanti se ne vuole */
    const [esami, setEsami] = useState(['']);

    /*funzioni "handle": funzioni per aggiornare lo stato della struttura in inserimento con spread
    dei dati attuali */
    const handleNome = e => {
        setStruttura({...struttura, Nome: e.target.value});
    }

    const handleRegione = e => {
        setStruttura({...struttura, Regione: e.target.value});
    }

    const handleCitta = e => {
        setStruttura({...struttura, Città: e.target.value});
    }

    const handleNumero = e => {
        setStruttura({...struttura, numero: e.target.value});
    }

    /*handleEsami: funzione leggermente diversa dagli altri handle, permette di tenere
    in ordine gli esami e dare la possibilità di modificare l'input con più o meno esami
    con accuratezza sfruttando l'index*/
    const handleEsami = async (e, index) => {
        const value = e.target.value;
        const examsTemp = [...esami];
        examsTemp[index] = value;
        setEsami(examsTemp);
    }

    /*useEffect: chiamato quando "esami" cambia, necessario in quanto setState è asincrono
    e non registrava quindi l'ultima lettera dell'ultimo esame*/
    useEffect(()=>{
        setStruttura({...struttura, esami:[...esami]});;
    },[esami])

    /*handleSubmit: aggiunge la struttura attuale agli ospedali già presenti tramite props
    (si potrebbe aggiungere una pulizia dei value così da non avere i campi ancora compilati
    dopo aver submittato una struttura) */
    const handleSubmit = e => {
        e.preventDefault();
        setOspedali([...ospedali, struttura]);
        axios.post('http://localhost:3333/strutture', struttura)
            .then( res => {
            })
            .catch(err => {
                console.log(err);
            })
        setStruttura({
            Nome: '',
            Regione: '',
            Città: '',
            numero: '',
            esami: ['']
        });
        setEsami(['']);
    }

    /*handleAddExam: funzione con lo scopo di aumentare la length degli esami di 1 e quindi
    offrire un ulteriore campo di input */
    const handleAddExam = () => {
        setEsami([...esami, ''])
    }
    
    /*handleRemoveExam: funzione per rimuovere uno dei campi di input per gli esami, agisce
    tramite index per rimuovere l'esame desiderato arbitrariamente e non semplicemente l'ultimo
    (ovviamente in fase di registrazione) */
    const handleRemoveExam = (index) => {
        const exams = [...esami];
        exams.splice(index, 1);
        setEsami(exams)
        setStruttura({...struttura, esami:[...exams]});;

    }

    return(

        <Container id="formContainer" className="d-grid h-100 mt-4">

            {/*semplice form in bootstrap che sfrutta le funzioni sopra elencate*/}
            <Form onSubmit={handleSubmit} className="text-center w-100">
                <h3>Aggiungi Struttura</h3>
                
                <FormLabel>Nome struttura</FormLabel>
                <FormControl value={struttura.Nome} onChange={handleNome}></FormControl>
                
                <FormLabel>Regione</FormLabel>
                <FormControl value={struttura.Regione} onChange={handleRegione}></FormControl>
                
                <FormLabel>Città</FormLabel>
                <FormControl value={struttura.Città} onChange={handleCitta}></FormControl>
                
                <FormLabel>Numero di telefono</FormLabel>
                <FormControl value={struttura.numero} onChange={handleNumero}></FormControl>
                
                <FormLabel>Esami</FormLabel>
                {esami.map((esame, index) => (
                    <>
                    <div className="input-group mb-3">
                    <FormControl type="text" className="form-control" value={esame} onChange={(e) => handleEsami(e, index)}></FormControl>
                    {esami.length > 1 && (
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-danger" type="button" onClick={() => handleRemoveExam(index)}>-</button>
                    </div>
                    )}
                    </div>
                    {esami.length -1 === index && 
                        (
                            <>
                            <Button className="mt-2" onClick={handleAddExam}>+</Button><p></p>
                            </>
                        )
                    }
                    </>
                ))}

                <Button type="submit" className="mt-4">Aggiungi</Button>
            </Form>
        </Container>
    )
}

export default AddForm;